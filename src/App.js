import Header from "./Components/Header/Header";
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home"

function App() {
  return (
    <div className="App">
      <h1>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="contact" element={<h1>Contact</h1>} />
        </Routes>

      </h1>
    </div>
  );
}

export default App;
