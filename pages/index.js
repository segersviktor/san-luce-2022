import React from 'react';

import MasterLayout from '../components/master-layout';
import Countdown from "../components/render/countdown";
import Link from "next/link";

// TODO
// - Replace all # links with active url
// - SEO

const Home = () => {
    return (
        <MasterLayout>
            <div className="main-layout__content">
                <div className="section-hero__wrapper">
                    <div className="section-hero">
                        <img src={ '/images/sanluce-green.png' } alt='Logo San Luce' className='section-hero__logo'/>
                        <video loop autoPlay muted className="section-hero__movie">
                            <source src={ "/media/aftermovie_header.mp4" } type="video/mp4"/>
                        </video>
                    </div>
                </div>
                <Countdown/>
                <section className="grid index-menu container-xl">
                    <Link href="/line-up">
                        <a className="grid__item grid__item--menu index-menu--item" style={{backgroundImage: 'linear-gradient(to bottom left, rgba(235, 54, 23, 0.5), rgba(24, 158, 100, 0.5)), url(images/san-luce-sfeer1.jpeg)'}}>
                            Line-Up
                        </a>
                    </Link>
                    <Link href="/faq">
                        <a className="grid__item grid__item--menu index-menu--item" style={{backgroundImage: 'linear-gradient(to bottom left, rgba(235, 54, 23, 0.5), rgba(24, 158, 100, 0.5)), url(images/san-luce-sfeer1.jpeg)'}}>
                            FAQ
                        </a>
                    </Link>
                    <Link href="/tickets">
                        <a className="grid__item grid__item--menu index-menu--item" style={{backgroundImage: 'linear-gradient(to bottom left, rgba(235, 54, 23, 0.5), rgba(24, 158, 100, 0.5)), url(images/san-luce-sfeer2.jpeg)'}}>
                            Tickets
                        </a>
                    </Link>
                </section>
            </div>
        </MasterLayout>
    );
};

export default Home;
