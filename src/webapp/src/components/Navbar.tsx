import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import View from "./View";
import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <View path={"/"} name={"Home"} />
          <View path={"/about"} name={"O NAS"} />
          <View path={"/offer"} name={"OFERTA"} />
          <View path={"/service"} name={"NASZE USŁUGI"} />
          <View path={"/contact"} name={"KONTAKT"} />
          <View path={"/client"} name={"STREFA KLIENTA"} />
          
          <Button
          
            variant='contained'
            onClick={(e) => navigate(-1)}
            color='primary'
          >
            <ArrowBackIosIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
