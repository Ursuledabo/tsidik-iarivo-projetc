import React, { Component } from "react";

export class Body extends Component {
  render() {
    return (
      <div className="corps">
        <div className="title">
          <h1>S'informer, Réserver sans se déplacer</h1>
          <p>
            Soyer le premier a etre au courant lors de grand actualités du
            moment <div>partout a Tananarivo dans tout les domaines:</div>
            <div className="jaune">
              sport,cinéma,restaurant, <code id="white">etc ....</code>
            </div>
          </p>
        </div>

        <div className="pub">
          <div>
            <h1 className="blue">+TOP 5</h1>
            <p>
              Découvrer les top 5 du momemts dans votre secteur d'activités
              préférer
            </p>
          </div>

          <div id="pubCenter">
            <h1 className="blue">+ 20 réservation /jour</h1>
            <p>
              Vous etes tres actif ? Rassurez-vous, vous pouvez allez jusqu'a
              plus de 20 réservations par jour
            </p>
          </div>

          <div>
            <h1 className="jaune">+ bonus</h1>
            <p>
              Vous pouvez avoir une réduction jusqu'a <b>-25%</b> selon votre
              activités et votre rapidité
            </p>
          </div>
        </div>

        <div className="btn">
          <button>
            <div id="Btext"> Découvrir</div> <div id="fleche">&rarr;</div>
          </button>
        </div>
      </div>
    );
  }
}

export default Body;
