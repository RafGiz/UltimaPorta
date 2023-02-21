import { useState } from "react";

import coffinImage from "./images/coffin.png";
import urnImage from "./images/urn.png";
import carImage from "./images/car.png";
import wreathImage from "./images/wreath.png";
import clothesImage from "./images/clothes.png";

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
          fontFamily: "Arial, sans-serif",
          fontSize: "36px",
          marginTop: "50px",
        }}
      >
        Nasza Oferta
      </div>
      <div id="offer-subtext">
        <div>
          <button onClick={handleBurialClick}>Organizacja Pogrzebu</button>
          <div className={burialVisible ? "visible" : ""}>
            <p>Information about burial</p>
          </div>
        </div>
        <div>
          <button onClick={handleCremationClick}>Organizacja Kremacji</button>
          <div className={cremationVisible ? "visible" : ""}>
            <p>Information about cremation</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "50px",marginTop: "300px" }}>
          <img
            src={coffinImage}
            alt="Coffin"
            style={{ width: "200px", height: "200px" }}
          />
          <p>Coffins</p>
        </div>
        <div style={{ marginRight: "50px",marginTop: "300px" }}>
          <img
            src={urnImage}
            alt="Urns"
            style={{ width: "200px", height: "200px" }}
          />
          <p>Urns</p>
        </div>
        <div style={{ marginRight: "50px",marginTop: "300px" }}>
          <img
            src={carImage}
            alt="Cars"
            style={{ width: "200px", height: "200px" }}
          />
          <p>Cars</p>
        </div>
        <div style={{ marginRight: "50px",marginTop: "300px" }}>
          <img
            src={wreathImage}
            alt="Funeral Wreaths"
            style={{ width: "200px", height: "200px" }}
          />
          <p>Funeral Wreaths</p>
        </div>
        <div>
          
          <img
            src={clothesImage}
            alt="Funeral Clothes"
            style={{ width: "200px", height: "200px",marginTop: "300px" }}
          />
          <p>Funeral Clothes</p>
        </div>
      </div>
    </div>
  );
}

