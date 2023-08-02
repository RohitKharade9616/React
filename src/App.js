
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// to use react router
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
  <>


  <Router>
  <Navbar title="TextInfo"/>

    <Routes>

        <Route exact path="/about" element={<About/>} />
        <Route exact path="/" element={<Textform/>} />
        <Route exact path="/contact" element={<Contact/>} />

    </Routes>
</Router>
  </>
  );
}

export default App;
