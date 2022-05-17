import React from 'react';
import Link from 'next/link';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const FaqNavigation = () => {

    return (
        <ul>
            <li className={ (router.pathname === "/faq" ?? 'is-active') }>
                <Link href="/faq">
                    <a>Algemeen<FontAwesomeIcon icon={ faChevronRight }/></a>
                </Link>
            </li>
            <li className={ (router.pathname === "/faq/tickets" ?? 'is-active') }>
                <Link href="/faq/tickets">
                    <a>Tickets<FontAwesomeIcon icon={ faChevronRight }/></a>
                </Link>
            </li>
            <li className={ (router.pathname === "/faq/locatie" ?? 'is-active') }>
                <Link href="/faq/locatie">
                    <a>Locatie<FontAwesomeIcon icon={ faChevronRight }/></a>
                </Link>
            </li>
            <li className={ (router.pathname === "/" ? 'main-navigation__menu--item is-active' : 'main-navigation__menu--item') }>
                <Link href='/'>
                    <a>
                        Home
                    </a>
                </Link>
            </li>
        </ul>
    );
};

export default FaqNavigation;
