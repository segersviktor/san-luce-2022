import React from 'react';

import Link from 'next/link';
import { useRouter } from "next/router";

const MainNavigation = () => {

    const router = useRouter();

    return (
        <header className='main-navigation'>
            <div className='main-navigation__inner'>
                <div className='main-navigation__info'>
                    <span>
                        12-13
                    </span>
                    <span>
                        aug 2022
                    </span>
                </div>
                <nav className='main-navigation__menu'>
                    <ul className='main-navigation__menu--list'>
                        <li className={ (router.pathname === "/" ? 'main-navigation__menu--item is-active' : 'main-navigation__menu--item') }>
                            <Link href='/'>
                                <a>
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li  className='main-navigation__menu--item'>
                            <Link href='#'>
                                <a>
                                    Line Up
                                </a>
                            </Link>
                        </li>
                        <li  className='main-navigation__menu--item'>
                            <Link href='#'>
                                <a>
                                    Contact
                                </a>
                            </Link>
                        </li>
                        <li  className='main-navigation__menu--item'>
                            <Link href='#'>
                                <a>
                                    Faq
                                </a>
                            </Link>
                        </li>
                        <li  className='main-navigation__menu--item main-navigation__menu--cta'>
                            <Link href='#'>
                                <a>
                                    Tickets
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default MainNavigation;
