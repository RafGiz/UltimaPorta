import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const styleTpg = {
  flexGrow: 1,
  mr: 2,
  display: { xs: "none", md: "flex" },
  fontFamily: "monospace",
  fontWeight: 800,
  color: "inherit",
  textDecoration: "none",
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container maxWidth='lg' sx={{background: 'red'}}>
      <h1>ULTIMA PORTA</h1>
      <Typography variant='h6' component='div' sx={styleTpg}>
        <Button
          variant='contained'
          onClick={(e) => navigate(-1)}
          color='primary'
        >
          <ArrowBackIosIcon />
        </Button>
      </Typography>
    </Container>
  );
}
