import React from 'react';
import Link from 'next/link';

const SectionAfterMovie = () => {

    return (
        <section className="section-aftermovie__wrapper">
            <div className="section-aftermovie">
                <div className="section-aftermovie__inner">
                    <div className="section-aftermovie__title">
                        <h2>Terug van weggeweest!</h2>
                    </div>
                    <br/>
                    <p className="text">
                        Na twee jaar van gedwongen afwezigheid kunnen we weer, met het zalige San-Luce-gevoel van weleer! Hoog tijd om weer eens alles kapot te springen tijdens het leukste weekend van het jaar!
                    </p>
                    <br/>
                    <Link href='/line-up'>
                        <a className='btn btn-outline-light'>
                            Line up
                        </a>
                    </Link>
                    <br/>
                    <Link href='/tickets'>
                        <a className='btn btn-light'>
                            Tickets
                        </a>
                    </Link>
                </div>
                <div className="section-aftermovie__movie">
                    <video
                        controls
                        src={ "/media/aftermovie.mp4" }
                        autoPlay
                        muted
                        loop
                        className='section-aftermovie__movie--player' />
                </div>
            </div>
        </section>
    );
};

export default SectionAfterMovie;
