import 'bootswatch/dist/pulse/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AnimatedBackground from './components/AnimatedBackgrounds';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useWindowWidth from './hooks/useWindowWith';

function App() {
  const windowWidth = useWindowWidth();
  const isLargeScreen = windowWidth > 768;

  return (
    <div className="App" style={{ position: 'relative', minHeight: '100vh' }}>
      {isLargeScreen && <AnimatedBackground />}
      <BrowserRouter>
      <Navbar />
      <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </main>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
