import './App.css';
import {Routes , Route} from 'react-router-dom';
import Banner from './components/Pages/Banner';
import Login from './components/Pages/Login';
import Menu from './components/Pages/Menu';
import Trackorder from './components/Pages/Trackorder';
import StoreLocations from './components/Pages/StoreLocations';
import Feedbac from './components/Pages/Feedbac';
import TermsAndConditions from './components/Pages/TermsAndConditions';
import Policy from './components/Pages/Policy';
import ContactUs from './components/Pages/ContactUs';







function App() {
  return (
    
    <div className='App'>
     
     <Routes>
      <Route path='/' element={<Banner/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/tractorder' element={<Trackorder/>}/>
      <Route path='/stotelocations' element={<StoreLocations/>}/>
      <Route path='/feedback' element={<Feedbac/>}/>
      <Route path='/termandconditions' element={<TermsAndConditions/>}/>
      <Route path='/policy' element={<Policy/>}/>
      <Route path='/contact' element={<ContactUs/>}/>

     </Routes>
   </div>
  );
}

export default App;
