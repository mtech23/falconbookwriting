import  { useEffect } from "react";
import './App.css';
import Router from './router';
import AOS from "aos";
import "aos/dist/aos.css";

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
        <Router/>
    
    </div>
  );
}

export default App;
