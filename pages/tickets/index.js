import React from 'react';
import MasterLayout from "../../components/master-layout";
import MainHeader from "../../components/main-header";

const Tickets = () => {
    const ticketOptions = [
        {
            'name': 'combi ticket',
            'price': '25',
            'description': 'Vrijdag 12/08 & Zaterdag 13/08'
        },
        {
            'name': 'dag ticket',
            'price': '14',
            'description': 'Vrijdag 12/08,<br> Zaterdag 13/08'
        }
    ]

    return (
        <MasterLayout>
            <div className="main-layout__content">
                <MainHeader/>
                <div className="section-tickets">
                    <section className="container">
                        <div className="ticket-blocks">
                            { ticketOptions.map((item) => {
                                return (
                                    <a key={ item.name } className="ticket-blocks__item">
                                        <span className="ticket-blocks__item--title">
                                            { item.name }
                                        </span>
                                        <p className="ticket-blocks__item--description text" dangerouslySetInnerHTML={{ __html: item.description }}>
                                        </p>
                                        <span className="ticket-blocks__item--price">
                                            &euro; { item.price } <br/>
                                            <sub>Inc. Administratiekosten</sub>
                                        </span>
                                    </a>
                                )
                            }) }
                        </div>
                        <h3>Tickets</h3>
                        <ul className="text">
                            <li>
                                San Luce is enkel toegankelijk voor personen die 16 jaar of ouder zijn!
                            </li>
                            <li>
                                Een { ticketOptions[1].name } kost &euro;{ ticketOptions[1].price } en is geldig op de gekozen dag.
                            </li>
                            <li>
                                Een { ticketOptions[0].name } kost &euro;{ ticketOptions[0].price } en is het hele weekend geldig.
                            </li>
                            <li>
                                Er worden geen tickets terugbetaald.
                            </li>
                        </ul>
                        <p className="text mb-0">
                            De ticketverkoop opent snel.
                        </p>
                    </section>
                </div>
            </div>
        </MasterLayout>
    )
}

export default Tickets;
