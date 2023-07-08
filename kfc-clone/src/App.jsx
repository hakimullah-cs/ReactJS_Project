import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Reorder from './components/Reorder';
import Categories from './components/Categories';
import {data} from './components/data/data';
import SellerProducts from './components/SellerProducts';
import Deals from './components/Deals';
import Footer from './components/Footer';




function App() {
  return (
    
    <div className='App'>
      <Navbar/>
      <Home/>
      <Reorder/>
      <Categories infos={data.categories}/>
      <SellerProducts seller={data.sellers}/>
      <Deals topdeals={data.deals}/>
      <Footer/>
   </div>
  );
}

export default App;
