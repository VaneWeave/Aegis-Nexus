import Header from "./Components/Header/Header";
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home/Home"
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import DoctorForms from "./Components/Doctors/DoctorForms";
import PatientForms from "./Components/Patients/PatientForms";
// import ipfs from "./ipfs";



function App() {
  return (
    <div className="App">
      <h1>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctorForms" element={<DoctorForms />} />
          <Route path="/patientForms" element={<PatientForms />} />
        </Routes>
        <Footer />

      </h1>
    </div>
  );
}

export default App;
