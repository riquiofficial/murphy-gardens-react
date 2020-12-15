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
import Thanks from "./pages/Thanks";
//router
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/gallery" exact>
            <Gallery />
          </Route>
          <Route path="/pricing" exact>
            <Pricing />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/thanks" exact>
            <Thanks />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
