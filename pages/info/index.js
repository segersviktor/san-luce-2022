import React from 'react';
import MasterLayout from "../../components/master-layout";
import MainHeader from "../../components/main-header";

const Info = () => {
    const backgroundImage = `linear-gradient(to bottom left, rgba(235, 54, 23, 0.5), rgba(24, 158, 100, 0.5)), url('../images/crew.png')`;

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
                                    Het idee van San Luce ontstond in het jaar 2007 uit een initiatief van enkele jongeren uit de kleinlandeigendom. Deze jonge heren wouden met dit evenement een nieuw facet geven aan de Lichtfeesten . Tijdens deze Lichtfeesten versieren alle inwoners van de kleinlandeigendom te Reet hun huizen en voortuinen met lichtjes en maken er op deze manier een feeëriek spektakel van waar vanalles te beleven is.
                                </p>
                                <p className="text">
                                    Dit nieuwe San Luce organiseerde ze door, op een geweldig ingekleede locatie, geweldige live artiesten en DJ&apos;s te laten komen. In 2014 nam een nieuwe garde van organisators de touwen in hand en gaf het festival een groeispurt van 500 man naar een kleine 2500 feestvierdes per avond.
                                </p>
                            </div>
                            <div className="section-info__text">
                                <p className="text">
                                    Deze garde organiseert vrijdag en zatedag tijdens de lichtfeesten een groots muzikaal en lichtspectakel. Zo hebben we afgelopen nationale artiesten als Tourist LeMC, Soul Shakers, Daisy, Average Rob, Alpharock, Stijn van De Voorde,... op ons podium hebben zien optreden.
                                </p>
                                <p className="text">
                                    Hiernaast wordt er ook plaats gehouden voor het lokale talent. Track-Thor is de afgelopen 5 jaar al een vaste afsluiter voor San Luce. Daarnaast komen ook DJ DIVS en RBE op ons podium optreden, die eveneens trotste wijkbewoners zijn.
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
