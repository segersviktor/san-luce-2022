import React, {useState} from 'react';
import Link from 'next/link';
import {useRouter} from "next/router";

const MobileNavigation = () => {
    const router = useRouter();
    const [mobileNav, setMobileNav] = useState(false);

    const toggleMobileNav = () => {
        setMobileNav(!mobileNav);
    }

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
                <div className="main-navigation__toggle">
                    <div className={ mobileNav ? 'main-navigation__toggle--btn is-active' : 'main-navigation__toggle--btn' } onClick={ toggleMobileNav }>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                    </div>
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
                                    Info
                                </a>
                            </Link>
                        </li>
                        <li className={ (router.pathname === "/faq" ? 'main-navigation__menu--item is-active' : 'main-navigation__menu--item') }>
                            <Link href='/faq'>
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

export default MobileNavigation;
