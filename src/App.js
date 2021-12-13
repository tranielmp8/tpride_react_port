import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./stylesheets/home.css";
import "./stylesheets/header-footer.css";
import "./stylesheets/carousel.css";
import "./stylesheets/projects.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Projects" exact element={<Projects />} />
          <Route path="/Contact" exact element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
