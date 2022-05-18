import React from 'react';
import Link from 'next/link';
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useRouter} from "next/router";

const MainFooter = () => {
    const router = useRouter();

    return (
        <footer className="main-footer__wrapper">
            <div className="main-footer container">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
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
                    <div className="col-sm-12 col-md-4">
                        <p className="main-footer__subtitle title">
                            Algemeen
                        </p>
                        <ul className="main-footer__menu">
                            <li className={ (router.pathname === "/" ? 'is-active' : '') }>
                                <Link href='/'>
                                    <a>
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li className={ ((router.pathname === "/line-up" || router.pathname === '/line-up/[query]') ? 'is-active' : '') }>
                                <Link href="/line-up">
                                    <a>
                                        Line-Up
                                    </a>
                                </Link>
                            </li>
                            <li className={ (router.pathname === "/info" ? 'is-active' : '') }>
                                <Link href='/info'>
                                    <a>
                                        Info
                                    </a>
                                </Link>
                            </li>
                            <li className={ (router.pathname === "/faq" ? 'is-active' : '') }>
                                <Link href='/faq'>
                                    <a>
                                        FAQ
                                    </a>
                                </Link>
                            </li>
                            <li className={ (router.pathname === "/tickets" ? 'is-active' : '') }>
                                <Link href='/tickets'>
                                    <a className={ (router.pathname === "/tickets" ?? 'is-active') }>
                                        Tickets
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <p className="main-footer__subtitle title">
                            Locatie
                        </p>
                        <ul className="main-footer__menu">
                            <li>
                                <Link href='https://goo.gl/maps/7YRDvTidJDRozx7U7'>
                                    <a rel="nofollow" target="_blank">
                                        Rozenlaan
                                        2840 Rumst,
                                        Belgium
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main-footer__copyright">
                    <span>
                        &copy; { new Date().getFullYear() } San Luce
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;
