import './App.css';
import {Routes , Route , Link} from 'react-router-dom';
import Banner from './components/Pages/Banner';
import Login from './components/Pages/Login';
import Menu from './components/Pages/Menu';






function App() {
  return (
    
    <div className='App'>
     
     <Routes>
      <Route path='/' element={<Banner/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/menu' element={<Menu/>}/>

     </Routes>
   </div>
  );
}

export default App;
