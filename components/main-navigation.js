import React from 'react';
import Link from 'next/link';
import {useRouter} from "next/router";

const MainNavigation = () => {
    const router = useRouter();

    return (
        <header className='main-navigation'>
            <div className='main-navigation__inner'>
                <div className='main-navigation__info'>
                    <Link href="/">
                        <a>
                            <span>
                                12-13
                            </span>
                            <span>
                                aug 2022
                            </span>
                        </a>
                    </Link>
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
                        <li className={ (router.pathname === "/line-up" || router.pathname === '/line-up/[query]' ? 'main-navigation__menu--item is-active' : 'main-navigation__menu--item') }>
                            <Link href="/line-up">
                                <a>
                                    Line-Up
                                </a>
                            </Link>
                        </li>
                        <li className={ (router.pathname === "/info" ? 'main-navigation__menu--item is-active' : 'main-navigation__menu--item') }>
                            <Link href='/info'>
                                <a>
                                    FAQ
                                </a>
                            </Link>
                        </li>
                        <li className='main-navigation__menu--item main-navigation__menu--cta'>
                            <Link href='/tickets'>
                                <a className={ (router.pathname === "/tickets" ? 'is-active' : '') }>
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
