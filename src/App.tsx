import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Galerie from "./pages/Galerie";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DesignSystem from "./pages/designSystem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="/coffee" element={<Menu />} />
        <Route path="/coffee" element={<Menu />} />
        <Route path="/food" element={<Menu />} />
        <Route path="/beans" element={<Menu />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
