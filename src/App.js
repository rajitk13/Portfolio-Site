import Header from "./components/Header";
import "./index.css";

import Intro from "./components/Intro";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Certification from "./components/Certifications";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <section className="hero is-dark custom is-medium">
        <Header />
        <Intro />
      </section>
      <Skills />
      <Education />
      <Certification />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
