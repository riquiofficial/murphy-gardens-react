//styles
import GlobalStyles from "./styles/GlobalStyles";
//components
import Header from "./components/Header";
import Footer from "./components/Footer";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
//router
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Switch location={window.location} key={window.location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
