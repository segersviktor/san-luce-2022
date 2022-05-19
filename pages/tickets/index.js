import React, {useState} from 'react';
import MasterLayout from "../../components/master-layout";
import MainHeader from "../../components/main-header";
import Script from "next/script";

const Tickets = () => {
    const [error, setError] = useState('');

    return (
        <MasterLayout>
            <Script
                src="https://esq-store.s3.amazonaws.com/public/js/embed.js"
                onLoad={ () => {
                    ESQ.embed({
                        link: "https://san-luce2020.eventsquare.co/nkawi4wmgq5y/2ysnkmg3defe",
                        element: "esq-store",
                    });
                } }
                onError={ () => {
                    setError('Ay caramba, er loopt iets fout. Probeer het later nog eens.');
                } }
            />
            <div className="main-layout__content">
                <MainHeader/>
                <div className="section-tickets">
                    <section className="container">
                        <h3>Tickets</h3>
                        <ul className='text'>
                            <li>
                                Een combi ticket geeft je op zaterdag en zondag toegang tot het festival.
                            </li>
                            <li>
                                Met een dag ticket heb je enkel toegang op de gekozen dag.
                            </li>
                            <li>
                                Er worden geen tickets terugbetaald.
                            </li>
                        </ul>
                        <div className="section-tickets__inner">
                            <div className="section-tickets__notification">
                                San Luce is enkel toegankelijk voor personen die 16 jaar of ouder zijn!
                            </div>
                            { error ? (
                                <div className="alert alert-danger" role="alert">
                                    { error }
                                </div>
                            ) : '' }
                            <div id="esq-store"/>
                        </div>
                    </section>
                </div>
            </div>
        </MasterLayout>
    )
}

export default Tickets;
