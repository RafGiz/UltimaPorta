import Box from "@mui/material/Box";
import logoImage from "./images/logo.png";
import View from "./View";

export default function Home() {
  return (
    <div className="card">
      <div className="logo-container">      
        <img id="logo-image" src={logoImage} alt="Logo" />        
      </div>
      <div className="welcome=message">
        <h1>Witamy w Wirtualnym Domie Pogrzebowym</h1>
        </div>
        <table width="1000"  align="center">
          <td>
            <tr><p>Kim jesteśmy</p></tr>
              <tr><Box sx={{ display: "flex", flexGrow: 1  }}>
                    <View path={"/about"} name={"O NAS"} />
                    </Box>
              </tr>
          </td>
          <td>
            <tr><p>Zapraszamy do zapoznania się z naszą ofertą</p></tr>
              <tr>
                <Box sx={{ display: "flex", flexGrow: 1 }}>
                  <View path={"/offer"} name={"OFERTA"} />
                </Box>
              </tr>
          </td>
         
        </table>
        
    </div>
  );
}
