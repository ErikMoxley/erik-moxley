import Content from "./components/Content";
import Footer from "./components/Footer";
import "../src/styles/App.css";

function App() {
  return (
    <div className="container">
      <Content />
        <div className="footer">
      <Footer />
    </div></div>
  );
}

export default App;