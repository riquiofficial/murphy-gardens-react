//styles
import GlobalStyles from "./styles/GlobalStyles";
import { AnimatePresence } from "framer-motion";
//components
import Header from "./components/Header";
import Footer from "./components/Footer";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
//router
import { Routes, Route } from "react-router-dom";

function AnimatedRoutes() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
}

export default App;
