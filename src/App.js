import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import UserInterfaceDesign from "./Pages/UserInterfaceDesign";
import Projects from "./Pages/Projects";
import DesignSystem from "./Pages/DesignSystem";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import SexyButton from "./Pages/SexyButton";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="dashboard__wrapper">
        <Header />
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/acerca-de" element={<About />} />
            <Route path="/prototipado" element={<UserInterfaceDesign />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/design-system" element={<DesignSystem />} />
            <Route path="/sexy-button" element={<SexyButton />} />
          </Routes>
        </Sidebar>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
