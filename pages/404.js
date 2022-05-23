import React from 'react';

import MasterLayout from '../components/master-layout';
import Countdown from "../components/render/countdown";
import SectionAfterMovie from "../components/render/section-aftermovie";
import SectionNews from "../components/render/section-news";
import MainHeader from "../components/main-header";
import Link from 'next/link'

const NotFound = () => {
    return (
        <MasterLayout>
            <MainHeader/>
            <div className="main-layout__content">
                <div className="section-error__wrapper container">
                    <section className="section-error">
                        <h1>404 — Pagina niet gevonden</h1>
                        <Link href="/">
                            <a>
                                Terug naar startpagina.
                            </a>
                        </Link>
                    </section>
                </div>
            </div>
        </MasterLayout>
    );
};

export default NotFound;
