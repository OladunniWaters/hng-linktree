
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import './App.css';
import {BrowserRouter as HashRouter, Routes, Route} from "react-router-dom"
function App() {
  return (
   <HashRouter>
        <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </HashRouter>
        
  );
}

export default App;
