import React from 'react';

import MasterLayout from '../components/master-layout';
import MainHeader from "../components/main-header";
import {useRouter} from "next/router";
import lineUpData from '../data/lineUpData.json';

const LineUp = ({lineUpData}) => {
    const router = useRouter();

    return (
        <MasterLayout>
            <div className="main-layout__content">
                <MainHeader/>
                <div className="section-line-up">
                    <div className="container">
                        <div>
                            <ul className="section-line-up__menu">
                                <li className={(router.pathname === "/line-up" ? 'main-navigation__menu--item is-active' : 'main-navigation__menu--item')}>
                                    <a href="">Release date</a>
                                </li>
                                <li>
                                    <a href="">Vrijdag</a>
                                </li>
                                <li>
                                    <a href="">Zaterdag</a>
                                </li>
                            </ul>
                        </div>
                        <section className="section-line-up__inner row">
                            <div className="row">
                                {lineUpData.map((item, index) => {
                                    const backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url('images/cards/${item.image}')`;
                                    return (
                                        <div key={ index } className="item__wrapper col">
                                            <div className="item" style={{backgroundImage: backgroundImage}}>
                                                <span className="item__name">
                                                    {item.name}
                                                </span>
                                                <div className="item__bottom">
                                                    <div className="item__date">
                                                    <span className="item__date--date">
                                                        {item.date}
                                                    </span>
                                                        <span className="item__date--hour">
                                                        {item.time}
                                                    </span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    );
                                })}
                            </div>

                        </section>
                    </div>
                </div>
            </div>
        </MasterLayout>
    );
};

export const getStaticProps = async () => {

    return {
        props: {lineUpData: lineUpData.data},
    };
};

export default LineUp;
