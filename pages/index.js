import React from 'react';

import MasterLayout from '../components/master-layout';
import Countdown from "../components/render/countdown";
import Link from "next/link";
import SectionAfterMovie from "../components/render/section-aftermovie";

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
                <SectionAfterMovie />
            </div>
        </MasterLayout>
    );
};

export default Home;
