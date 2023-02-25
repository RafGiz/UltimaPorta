import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import View from "./View";


const Navbar = () => {
  // const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position='static'>
        <Toolbar>
      
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <View path={"/"} name={"Home"} />
            <View path={"/about"} name={"O NAS"} />
            <View path={"/offer"} name={"OFERTA"} />
            <View path={"/service"} name={"NASZE USŁUGI"} />
            <View path={"/contact"} name={"KONTAKT"} />
          </Box>

          <View path={"/login"} name={"LOGIN"} />

          {/* <Button
            variant='contained'
            onClick={() => navigate(-1)}
            color='primary'
          >
            <ArrowBackIosIcon />
          </Button> */}

        </Toolbar>
      </AppBar>
      <div className="card">
        <div className="logo-container">
          <span className="logo-text">
            <u>
             <b>ULTIMA PORTA</b>{" "}
            </u>
          </span>
        </div>
       </div> 
    </Box>
    
  );
};

export default Navbar;
