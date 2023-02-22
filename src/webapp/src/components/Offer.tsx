import { useState } from "react";

import coffinImage from "./images/coffin.png";
import urnImage from "./images/urn.png";
import carImage from "./images/car.png";
import wreathImage from "./images/wreath.png";
import clothesImage from "./images/clothes.png";
import '../background.css';
// import backgroundImage from "./images/background.png";

export default function Offer() {
  const [burialVisible, setBurialVisible] = useState(false);
  const [cremationVisible, setCremationVisible] = useState(false);

  function handleBurialClick() {
    setBurialVisible((prevState) => !prevState);
    setCremationVisible(false);
  }
  function handleCremationClick() {
    setCremationVisible((prevState) => !prevState);
    setBurialVisible(false);
  }
  
  return (
    <div id="offer-container">
      <div
        id="offer-text"
        style={{
          textAlign: "center",
          fontFamily: "Gloock, sans-serif",
          fontSize: "46px",
          marginTop: "50px",
        }}
      >
        <u><b>Nasza Oferta</b></u>
      </div>
      <div id="offer-subtext">
        <div>
          <button onClick={handleBurialClick}>
            <div
              id="offer-text"
              style={{
                fontFamily: "Gloock, sans-serif",
                fontSize: "25px",
              }}
            >
              <u><b>Organizacja Pogrzebu</b></u>
            </div>
          </button>
          <div className={burialVisible ? "visible" : ""}>
          <div
              id="offer-text"
              style={{
                marginTop: '20px',
                fontFamily: "Gloock, sans-serif",
                fontSize: "20px",
              }}
            >
              Wszelkie informacje odnośnie pogrzebu
            </div>
          </div>
        </div>
        <div>
          <button onClick={handleCremationClick}>
            <div
              id="offer-text"
              style={{
                fontFamily: "Gloock, sans-serif",
                fontSize: "25px",
              }}
            >
              <u><b>Organizacja Kremacji</b></u>
            </div>
          </button>
          <div className={cremationVisible ? "visible" : ""}>
          <div
              id="offer-text"
              style={{
                marginTop: '20px',
                fontFamily: "Gloock, sans-serif",
                fontSize: "20px",
              }}
            >
              Wszelkie informacje odnośnie kremacji
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "50px", marginTop: "300px" }}>
          <img
            src={coffinImage}
            alt="Coffin"
            style={{ width: "200px", height: "200px" }}
          />
          <div
            id="offer-text"
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontFamily: "Gloock, sans-serif",
              fontSize: "23px",
            }}
          >
            Trumny
          </div>
        </div>
        <div style={{ marginRight: "50px", marginTop: "300px" }}>
          <img
            src={urnImage}
            alt="Urns"
            style={{ width: "200px", height: "200px" }}
          />
          <div
            id="offer-text"
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontFamily: "Gloock, sans-serif",
              fontSize: "23px",
            }}
          >
            Urny
          </div>
        </div>
        <div style={{ marginRight: "50px", marginTop: "300px" }}>
          <img
            src={carImage}
            alt="Cars"
            style={{ width: "200px", height: "200px" }}
          />
          <div
            id="offer-text"
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontFamily: "Gloock, sans-serif",
              fontSize: "23px",
            }}
          >
            Samochody
          </div>
        </div>
        <div style={{ marginRight: "50px", marginTop: "300px" }}>
          <img
            src={wreathImage}
            alt="Funeral Wreaths"
            style={{ width: "200px", height: "200px" }}
          />
          <div
            id="offer-text"
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontFamily: "Gloock, sans-serif",
              fontSize: "23px",
            }}
          >
            Wieńce
          </div>
        </div>
        <div>
          <img
            src={clothesImage}
            alt="Funeral Clothes"
            style={{ width: "200px", height: "200px", marginTop: "300px" }}
          />
          <div
            id="offer-text"
            style={{
              textAlign: "center",
              marginTop: "20px",
              fontFamily: "Gloock, sans-serif",
              fontSize: "23px",
            }}
          >
            Odzież pogrzebowa
          </div>
        </div>
      </div>
    </div>
  );
}

