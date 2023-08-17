import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Single from "./pages/Single";
import About from "./pages/About";
import './index.css';
import { Route,BrowserRouter as Router,Routes } from "react-router-dom";
const App=()=> {
  return (
    <Router >
     
     <Navbar/>
     <div className="cont">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/singleshow/:id" element={<Single/>}/>
      </Routes>
    
     </div>
     
    </Router>
  );
}

export default App;
