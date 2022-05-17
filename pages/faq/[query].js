import React from 'react';
import MasterLayout from "../../components/master-layout";
import MainHeader from "../../components/main-header";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Question from "../../components/render/question";
import questionData from "../../data/faq.json";

const InfoQuery = ({ questions, subject }) => {
    return (
        <MasterLayout>
            <div className="main-layout__content">
                <MainHeader/>
                <div className="section-questions container">
                    <aside className="section-questions__menu">
                        <ul>
                            <li>
                                <a href="">
                                    Algemeen
                                    <FontAwesomeIcon icon={ faChevronRight }/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Tickets
                                    <FontAwesomeIcon icon={ faChevronRight }/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Locatie
                                    <FontAwesomeIcon icon={ faChevronRight }/>
                                </a>
                            </li>
                        </ul>
                    </aside>
                    <section className="section-questions__inner container">
                        <div className="questions">
                            { questions.map((item, key) => {
                                return (
                                    <Question key={ key } question={ item.question } answer={ item.answer } />
                                )
                            }) }
                        </div>
                        <div className="questions questions--other">
                            {/*TODO MAIL ADRES*/}
                            <p className="text">Voor meer info kan je ons altijd bereiken op <a href="mailto:lennert.slabbinck@hotmail.be">info@sanluce.be</a></p>
                        </div>
                    </section>
                </div>
            </div>
        </MasterLayout>
    )
}

export const getStaticPaths = async () => {
    const subjects = [
        'algemeen',
        'tickest',
        'locatie'
    ];

    const paths = subjects.map((subject) => ({
        params: { query: subject }
    }));

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps = async (context) => {
    const subject = context.params.query;

    return {
        props: {
            subject: subject,
            questions: questionData[subject]
        }
    }
}

export default InfoQuery;
