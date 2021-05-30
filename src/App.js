import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Imagen from "./components/Navbar/Imagen";
import Presentation from "./components/Navbar/Presentation";
import Aboutme from "./components/Section/Aboutme";
import Skills from "./components/Section/Skills";
import Footer from "./components/Section/Footer";
import Projects from "./components/Section/Projects";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Presentation />
      <Imagen />
      <Aboutme />
      <Skills />
      <Projects/>
      <Footer />
    </div>
  );
}

export default App;
