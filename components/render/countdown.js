import React, {useEffect, useState} from 'react';

const Countdown = () => {
    const [started, setStarted] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // TODO Confirm starting hour
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
        <div className="section-countdown__wrapper">
            <div className="section-countdown__inner">
                { started ? (
                    <section className="section-countdown container-xxl">
                        <p className='section-countdown__text'>&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;Countdown - Tis begonnen!</p>
                        <p className='section-countdown__text'>&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;Location - Rozenlaan 2840 Rumst</p>
                        <p className='section-countdown__text'>&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;Countdown - Tis begonnen!</p>
                        <p className='section-countdown__text'>&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;Location - Rozenlaan 2840 Rumst</p>
                        <p className='section-countdown__text'>&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;Countdown - Tis begonnen!</p>
                        <p className='section-countdown__text'>&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;Location - Rozenlaan 2840 Rumst</p>
                        <p className='section-countdown__text'>&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;Countdown - Tis begonnen!</p>
                        <p className='section-countdown__text'>&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;Location - Rozenlaan 2840 Rumst</p>
                        <p className='section-countdown__text'>&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;Countdown - Tis begonnen!</p>
                        <p className='section-countdown__text'>&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;Location - Rozenlaan 2840 Rumst</p>
                    </section>
                ) : (
                    <section className="section-countdown container-xxl">
                        <p className='section-countdown__text'>{days} dagen {hours} uren {minutes} minuten {seconds} seconden</p>
                        <p className='section-countdown__text'>Rozenlaan 2840 Rumst</p>
                        <p className='section-countdown__text'>{days} dagen {hours} uren {minutes} minuten {seconds} seconden</p>
                        <p className='section-countdown__text'>Rozenlaan 2840 Rumst</p>
                        <p className='section-countdown__text'>{days} dagen {hours} uren {minutes} minuten {seconds} seconden</p>
                        <p className='section-countdown__text'>Rozenlaan 2840 Rumst</p>
                        <p className='section-countdown__text'>{days} dagen {hours} uren {minutes} minuten {seconds} seconden</p>
                        <p className='section-countdown__text'>Rozenlaan 2840 Rumst</p>
                        <p className='section-countdown__text'>{days} dagen {hours} uren {minutes} minuten {seconds} seconden</p>
                        <p className='section-countdown__text'>Rozenlaan 2840 Rumst</p>
                        <p className='section-countdown__text'>{days} dagen {hours} uren {minutes} minuten {seconds} seconden</p>
                        <p className='section-countdown__text'>Rozenlaan 2840 Rumst</p>
                        <p className='section-countdown__text'>{days} dagen {hours} uren {minutes} minuten {seconds} seconden</p>
                        <p className='section-countdown__text'>Rozenlaan 2840 Rumst</p>
                        <p className='section-countdown__text'>{days} dagen {hours} uren {minutes} minuten {seconds} seconden</p>
                        <p className='section-countdown__text'>Rozenlaan 2840 Rumst</p>
                        <p className='section-countdown__text'>{days} dagen {hours} uren {minutes} minuten {seconds} seconden</p>
                        <p className='section-countdown__text'>Rozenlaan 2840 Rumst</p>
                        <p className='section-countdown__text'>{days} dagen {hours} uren {minutes} minuten {seconds} seconden</p>
                        <p className='section-countdown__text'>Rozenlaan 2840 Rumst</p>
                        <p className='section-countdown__text'>{days} dagen {hours} uren {minutes} minuten {seconds} seconden</p>
                        <p className='section-countdown__text'>Rozenlaan 2840 Rumst</p>
                        <p className='section-countdown__text'>{days} dagen {hours} uren {minutes} minuten {seconds} seconden</p>
                        <p className='section-countdown__text'>Rozenlaan 2840 Rumst</p>
                    </section>
                )}
            </div>
        </div>
    );
};

export default Countdown;
