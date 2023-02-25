import { Box, Button, Container } from "@mui/material";
import View from "./View";

export default function About() {
  return (
    <Container maxWidth={false}>
      <Box
        sx={{backgroundColor: "transparent"}}>
        <div>
          <h1>O NAS</h1>
            <h3>
              <div>
                <p>Jest to pierwszy taki serwis na ktorym możecie Państwo dokonoć
                  wszelkich czynności związanych ze stratą bliskiej osoby bez
                  wychodzenia z domu i zbednych formalności. Rozumiemy, że w tym trudnym
                  czasie sprawy zwiazane z ostatnim pożegnaniem są niezwykle
                  skomplikowane i wydaje się - trywialne. Dlatego jesteśmy tu po to aby
                  je wszystkie ulatwić i umożliwić ich załatwienie bez wychodzenia z
                  domu. Zachęcamy do zapoznania się z naszą ofertą.</p>
              </div>
            </h3>
          </div>
        <div>
        <Button>Nasza Oferta<View path={"/offer"} name={"OFERTA"} /></Button>
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
      </Box>
      <Button>Powrót na stronę główną<View path={"/"} name={"Home"} /></Button>
    </Container>
    
   
    
  );
}
