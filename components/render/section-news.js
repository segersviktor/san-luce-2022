import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import lineUpData from "../../data/line-up.json";

const SectionNews = () => {
    const [releases, setReleases] = useState([]);

    useEffect(() => {
        const data = lineUpData.data;
        setReleases(data.slice(0, 2));
    }, []);

    const currentDate = new Date();

    return (
        <section className="news__wrapper container">
            <div className="news">
                <div className="news__header">
                    <h2>Nieuwste releases</h2>
                </div>
                <div className="news__inner grid">
                    {releases.map((item, index) => {
                        const isReleased = currentDate > new Date(item.release);
                        if (!isReleased) return ('');

                        const backgroundImage = `linear-gradient(to bottom left, rgba(235, 54, 23, 0.5), rgba(24, 158, 100, 0.5)), url('images/lineup/${item.image}')`;
                        return (
                            <div key={ index } className="line-up__item grid__item is-stale" style={{backgroundImage: backgroundImage}}>
                                <span className="line-up__item--name">
                                    {item.name}
                                </span>
                            </div>
                        );
                    })}
                    <Link href='/line-up'>
                        <div className="grid__item line-up__item news__inner--cta">
                            <span className="line-up__item--name">
                                <a>Ontdek de line-up</a>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SectionNews;
