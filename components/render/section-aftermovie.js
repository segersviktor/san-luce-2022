import React from 'react';
import Link from 'next/link';

const SectionAfterMovie = () => {

    return (
        <section className="section-aftermovie__wrapper">
            <div className="section-aftermovie">
                <div className="section-aftermovie__inner">
                    <h2>Lorem ipsum dolor!</h2>
                    <br/>
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nulla perferendis possimus quas vitae? Dignissimos error nam nemo nulla pariatur, provident repellat sit voluptatem. In.
                    </p>
                    <br/>
                    <Link href='#'>
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
