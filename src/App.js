import Header from "./components/Header";
import "./index.css";


import Intro from "./components/Intro";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Certification from "./components/Certifications";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Education />
      <Certification />
      <Projects />
      <Footer />
   
    </div>
  );
}

export default App;
