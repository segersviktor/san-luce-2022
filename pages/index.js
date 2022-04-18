import React from 'react';

import MasterLayout from '../components/master-layout';
import Countdown from "../components/render/countdown";
import SectionAfterMovie from "../components/render/section-aftermovie";

// TODO
// - Replace all # links with active url
// - SEO

const Home = () => {
    return (
        <MasterLayout>
            <div className="main-layout__content">
                <div className="section-hero__wrapper"
                     style={{backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(images/sanluce-banner.jpeg)'}}>
                    <div className="section-hero">
                        <img src={'/images/sanluce-green.png'} alt='Logo San Luce' className='section-hero__logo'/>
                    </div>
                </div>
                <Countdown/>
                <SectionAfterMovie/>
            </div>
        </MasterLayout>
    );
};

export default Home;
