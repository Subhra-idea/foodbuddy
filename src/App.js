import "./App.css";
// import Card from "./components/Card";
// import Footer from "./components/Footer";
import Hero from "./components/Hero";
// import Navabr from "./components/Navabr";
// import Slider from "./components/Slider";
import { BrowserRouter, Route,Routes, Path } from "react-router-dom";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";


function App() {
  return (
    
   
        <div className="App">
        <BrowserRouter>
        
        <Routes>
          {/* <Route exact path="/" element={ <Navabr />} /> */}
          <Route exact path="/" element={ <Hero />} />
          <Route exact path="/createuser" element={ <SignUp/>} />
          <Route exact path="/login" element={  <Login />} />
        
        </Routes>
        </BrowserRouter>
         
      </div>
       
  );
}

export default App;
