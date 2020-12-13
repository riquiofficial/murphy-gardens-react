import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
