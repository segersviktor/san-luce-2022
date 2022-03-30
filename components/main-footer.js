import React from 'react';

import Link from 'next/link';
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const MainFooter = () => {

    return (
        <footer className="main-footer__wrapper">
            <div className="main-footer container">
                <div className="row">
                    <div className="col-sm">
                        <p className="main-footer__subtitle title">
                            Volg ons op
                        </p>
                        <ul className="main-footer__menu main-footer__menu--socials">
                            <li>
                                <Link href="#" passHref={ true }>
                                    <a target="_blank">
                                        <FontAwesomeIcon icon={ faFacebook }/>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" passHref={ true }>
                                    <a target="_blank">
                                        <FontAwesomeIcon icon={ faInstagram }/>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <p className="main-footer__subtitle title">
                            Algemeen
                        </p>
                        <ul className="main-footer__menu">
                            <li>
                                <Link href='#'>
                                    <a>
                                        Startpagina
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <a>
                                        Tickets
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <a>
                                        Contact
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    <a>
                                        FAQ
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <p className="main-footer__subtitle title">
                            Locatie
                        </p>
                        <ul className="main-footer__menu">
                            <li>
                                <Link href='#'>
                                    <a>
                                        Rozenlaan
                                        2840 Rumst,
                                        Belgium
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                - Socials
                - Adres
                - Email

                {/*<div className="main-footer__body">{ new Date().getFullYear() } { __('site.footer.copyright') }</div>*/}


            </div>
        </footer>
    );
};

export default MainFooter;
