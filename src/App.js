import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Card /> */}
      <WorkExperience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
