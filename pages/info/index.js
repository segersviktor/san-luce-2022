import React from 'react';
import MasterLayout from "../../components/master-layout";
import MainHeader from "../../components/main-header";

const Info = () => {
    return (
        <MasterLayout>
            <div className="main-layout__content">
                <MainHeader/>
                <div className="section-info__wrapper">
                    <section className="section-info container">
                        <h3>San luce festival</h3>
                        <div className="section-info__inner">
                            <div className="section-info__text">
                                <p className="text">
                                    San Luce biedt al zestien jaar een uitlaatklep aan jongeren tijdens de Lichtfeesten. Enkele jongeren uit het Kleine Landeigendom in Reet vonden dat er tijdens de lichtfeesten te weinig georganiseerd werd voor de jeugd en namen dan maar zelf het heft in handen. Wat begon als een klein gesjord podium onder de boom van Groeninge, groeide al snel uit tot een heus festival met een spectaculaire lichtshow en grote artiesten. Al is de essentie steeds dezelfde gebleven: een sympathiek zomers feestje bouwen voor de lokale jeugd, met aandacht voor licht, het blijven tenslotte de Lichtfeesten.
                                    <br/><br/>
                                    In die zestien jaar werd het festival ook steeds door lokale jongeren op poten gezet. Het ontwerpen van het podium, de opbouw, de afbraak, de lichtshow, de dj’s, de shiften, de foto’s, de aftermovies,... alles werd en wordt nog steeds voor 100% door jeugd georganiseerd. De organisatie is dan ook ongelooflijk trots op hoe het festival de laatste jaren gegroeid is en elk jaar een tikje professioneler wordt. Het jeugdige ‘diy-aspect’ van San Luce, maakt het dan ook tot een van de sympathiekste evenementen uit de streek.
                                    <br/><br/>
                                    Doorheen de jaren zijn er al heel wat grote namen de revue gepasseerd; Tourist Lemc, Wahwahsda, Gunther D, Soul Shakers, Average Rob & Omdat het kan Soundsystem om er zo een paar op te noemen. Maar San Luce draait niet enkel om gevestigde waarden, er is veel aandacht voor lokaal talent en toffe acts, de belevenis primeert!
                                    <br/><br/>
                                    Na zestien jaar eindigt het verhaal op Groeninge. Het huidige San Luce concept loopt ten einde, maar niet zonder een laatste editie in 2022. Wat de toekomst brengt, is voor later…
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </MasterLayout>
    )
}

export default Info;
