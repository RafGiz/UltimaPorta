import Body from './conponents/Body';
import Home from './conponents/Home';
import Navbar from './conponents/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnotherBody from './conponents/AnotherBody';


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/body" element={<Body />} />
          <Route path="/anotherbody" element={<AnotherBody />} />

        </Routes>
      </Router>


    </div>
  );
}

export default App;