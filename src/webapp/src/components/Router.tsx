import { Box } from "@mui/system";
import { Routes, Route, Outlet } from "react-router-dom";
import About from "./About";
import Client from "./Client";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import NoMatch from "./NoMatch";
import Offer from "./Offer";
import Service from "./Service";

export default function Router() {
  return (
    <div>
        <Navbar />
        <Box>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='offer' element={<Offer />} />
            <Route path='service' element={<Service />} />
            <Route path='contact' element={<Contact />} />
            <Route path='client' element={<Client />} />
            <Route path='*' element={<NoMatch />} />
          </Routes>
          <Outlet />
        </Box>
    </div>
  );
}
