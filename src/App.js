import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
