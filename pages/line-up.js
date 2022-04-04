import React, {useState} from 'react';

import MasterLayout from '../components/master-layout';
import MainHeader from "../components/main-header";
import {useRouter} from "next/router";
import lineUpData from '../data/lineUpData.json';

const LineUp = ({lineUpData}) => {
    const router = useRouter();
    const [expandedDetails, setExpandedDetails] = useState(false);
    const [detailsTitle, setDetailsTitle] = useState('');
    const [detailsDescription, setDetailsDescription] = useState('');
    const [detailsImage, setDetailsImage] = useState('');
    const [detailsDay, setDetailsDay] = useState('');
    const [detailsHour, setDetailsHour] = useState('');

    const toggleModal = (event) => {
        event.preventDefault();

        const target = event.target.closest('.line-up__item');
        if (target) {
            const item = JSON.parse(target.getAttribute('data-detail'));
            setDetailsTitle(item.name)
            setDetailsDescription(item.description)
            setDetailsImage(item.image)
            setExpandedDetails(!expandedDetails);
            setDetailsDay(item.day);
            setDetailsHour(item.hour);
        }
    };

    const getDetailInfo = (item) => {
        return JSON.stringify({
            'name': item.name,
            'description': item.description,
            'image': item.image,
            'day': item.date,
            'hour': item.time
        });
    };

    return (
        <MasterLayout>
            <div className="main-layout__content">
                <MainHeader/>
                <div className="section-line-up">
                    <div className="container">
                        <div>
                            <ul className="section-line-up__menu">
                                <li className={ (router.pathname === "/line-up" ? 'main-navigation__menu--item is-active' : 'main-navigation__menu--item') }>
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
                        <section className="section-line-up__inner">
                            <div className="grid line-up">
                                {lineUpData.map((item, index) => {
                                    const backgroundImage = `linear-gradient(to bottom left, rgba(235, 54, 23, 0.5), rgba(24, 158, 100, 0.5)), url('images/cards/${item.image}')`;
                                    return (
                                        <div
                                            key={ index }
                                            className="grid__item line-up__item"
                                            style={{backgroundImage: backgroundImage}}
                                            onClick={ toggleModal }
                                            data-detail={ getDetailInfo(item) }
                                        >
                                            <span className="line-up__item--name">
                                                {item.name}
                                            </span>
                                            <div className="line-up__item--date">
                                                <span>{item.date}</span>
                                                <span>{item.time}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className="fade modal dialog__backdrop" hidden={ !expandedDetails }>
                <div className="dialog">
                    <div className="dialog__image">
                        <img src={ `/images/cards/${detailsImage}` } alt={ `${detailsTitle} image` } />
                    </div>
                    <div className="dialog__title">
                        <h3>{ detailsTitle }</h3>
                    </div>
                    <div className="dialog__description">
                        <p className="text">
                            { detailsDescription }
                        </p>
                    </div>
                    <div className="dialog__date">
                        <span>{ detailsDay }</span>
                        <span>{ detailsHour }</span>
                    </div>
                    <div className="dialog__actions">
                        <button>Close</button>
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
