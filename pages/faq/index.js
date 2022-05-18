import React from 'react';
import MasterLayout from "../../components/master-layout";
import MainHeader from "../../components/main-header";
import questionData from "../../data/faq.json";
import Question from "../../components/render/question";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Faq = ({ questions, subject }) => {
    return (
        <MasterLayout>
            <div className="main-layout__content">
                <MainHeader/>
                <div className="section-questions container">
                    <aside className="section-questions__menu">
                        <ul>
                            <li className="is-active">
                                <Link href="/faq">
                                    <a>
                                        Algemeen
                                        <FontAwesomeIcon icon={ faChevronRight }/>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq/tickets">
                                    <a>
                                        Tickets
                                        <FontAwesomeIcon icon={ faChevronRight }/>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq/locatie">
                                    <a>
                                        Locatie
                                        <FontAwesomeIcon icon={ faChevronRight }/>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </aside>
                    <section className="section-questions__inner container">
                        <div className="questions">
                            <div className="questions__title">
                                <h3>Algemeen</h3>
                            </div>
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


export const getStaticProps = async () => {
    return {
        props: {questions: questionData['algemeen']},
    };
};

export default Faq;
