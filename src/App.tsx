import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Galerie from "./pages/Galerie";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DesignSystem from "./pages/designSystem";
import ScrollToTop from "./assets/function/scrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design-system" element={<DesignSystem />} />
        <Route path="/menu/coffee" element={<Menu />} />
        <Route path="/menu/food" element={<Menu />} />
        <Route path="/menu/beans" element={<Menu />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
