import React from 'react';
import MasterLayout from "../../components/master-layout";
import MainHeader from "../../components/main-header";
import questionData from "../../data/faq.json";
import Question from "../../components/render/question";

const Faq = ({questions}) => {
    return (
        <MasterLayout>
            <div className="main-layout__content">
                <MainHeader/>
                <div className="section-questions">
                    <section className="container">
                        <h3>Praktisch</h3>
                        <div className="questions">
                            { questions['Praktisch'].map((item, key) => {
                                return (
                                    <Question key={ key } question={ item.question } answer={ item.answer } />
                                )
                            }) }
                        </div>
                        <h3>Tickets</h3>
                        <div className="questions">
                            { questions['Tickets'].map((item, key) => {
                                return (
                                    <Question key={ key } question={ item.question } answer={ item.answer } />
                                )
                            }) }
                        </div>
                        <h3>Hoe geraak ik op San Luce?</h3>
                        <div className="questions">
                            { questions['Hoe geraak ik op San Luce?'].map((item, key) => {
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
        props: {questions: questionData},
    };
};

export default Faq;
