import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import About from "./components/about-components/About";
import Home from "./components/home-components/Home";
import Projects from "./components/projects-components/Projects";
import { useLocation } from "react-router-dom";

import "./index.css";
import Contact from "./components/contact-components/Contact";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home path={location.pathname} />} />
        <Route path="about" element={<About path={location.pathname} />} />
        <Route
          path="projects"
          element={<Projects path={location.pathname} />}
        />
        <Route path="contact" element={<Contact path={location.pathname} />} />
      </Routes>
    </div>
  );
}

export default App;

// GlobalStyle
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: var(--bg-color);
    color: var(--text-color);
    cursor: default;
  }
  img {
    box-shadow: var(--box-shadow-thick);
  }
`;
