import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Home />
    </div>
  );
}

export default App;
