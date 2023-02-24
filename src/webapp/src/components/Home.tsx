import logoImage from "./images/logo.png";

export default function Home() {
  return (
    <div className="card">
      <div className="logo-container">
        <img id="logo-image" src={logoImage} alt="Logo" />
        <span className="logo-text">
          <u>
            <b>ULTIMA PORTA</b>{" "}
          </u>
        </span>
      </div>
      <div className="welcome=message">
        <h1>Witamy w UltimaPorta, wirtualnym Domie Pogrzebowym</h1>
        <p>
          Jest to pierwszy taki serwis na ktorej mozecie Panstwo dokonoc
          wszelkich czynnosci zwiazanych ze strata bliskiej osoby bez
          wychodzenia z domu i zbednych formalnosci. Rozumiemy, ze w tym trudnym
          czasie sprawy zwiazane z ostatnim pozegnaniem sa niezwykle
          skomplikowane i wydaje sie - trywialne. Dlatego jestesmy tu po to aby
          je wszystkie ulatwic i umozliwic ich zalatwienie bez wychodzenia z
          domu. Zachecamy do zapoznania sie z nasza oferta.
        </p>
      </div>
      <div className="quote-container">
        <p className="quote-text">
          "Ci których kochamy nie odchodzą, są przy nas każdego dnia.
          Niewidoczni, niesłyszalni ale zawsze blisko. Wciąż kochani i wciąż
          stęsknieni."{" "}
        </p>
        <p className="quote-author">- Romain Rolland</p>
        <p className="quote-text">
          "Kogo kiedykolwiek prawdziwie kochaliśmy nigdy już nie możemy stracić;
          tych których głeboko kochaliśmy stają się częścią nas samych."{" "}
        </p>
        <p className="quote-author">- Helen Keller</p>
      </div>
    </div>
  );
}
