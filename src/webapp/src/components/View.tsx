import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props{
  path: string
  name: string
}

const styleTpg = {
  flexGrow: 1,
  mr: 2,
  display: { xs: "none", md: "flex" },
  fontFamily: "monospace",
  fontWeight: 800,
  color: "inherit",
  textDecoration: "none",
};

const View = (props: Props) => {
  
  const navigate = useNavigate();

  return (
    <div>
      <Typography variant='h6' component='div' sx={styleTpg}>
        <Button
          variant='contained'
          onClick={() => navigate(props.path)}
          color='primary'
        >
          {props.name}
        </Button>
      </Typography>
    </div>
  );
}

export default View
