import React, {useEffect, useState} from 'react';

import MasterLayout from '../components/master-layout';

const Home = ({params}) => {

    // TODO Confirm starting hour
    const startDate = new Date("Aug 12, 2022 19:00:00").getTime();

    const [started, setStarted] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const target = new Date('08/12/2022 19:00:00');

        const interval = setInterval(() => {
            const now = new Date();
            const diff = target.getTime() - now.getTime();

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            setDays(days);

            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            setHours(hours);

            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(minutes);

            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            setSeconds(seconds);

            if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
                setStarted(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <MasterLayout>
            <div className="main-layout__content">
                <div className="section-hero__wrapper"
                     style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(\'images/sanluce-banner.jpeg\')' }}>
                    <div className="section-hero">
                        <img src={ '/images/sanluce-green.png' } alt='Logo San Luce' className='section-hero__logo' />
                    </div>
                </div>
                <div className="section-countdown__wrapper">
                    <div className="section-countdown">
                        { started ? (
                            <p className='section-countdown__text'>San luce 2022 is begonnen!!</p>
                        ) : (
                            <p className='section-countdown__text'>San Luce 2022: {days} dagen {hours} uren {minutes} minuten {seconds} seconden</p>
                        )}
                    </div>
                </div>
            </div>
        </MasterLayout>
    );
};

export default Home;
