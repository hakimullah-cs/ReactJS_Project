import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Features from './components/Features/Features';
import "./App.css";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-LightText">
     <Navbar/>
   <div className='max-w-full-xl  mx-auto md:px-16 px-3'>
    <Banner/>
    <Features/>
    <Projects/>
   </div>
    </div>
  );
}

export default App;
