import React from 'react';
import Navbar from '../Navbar';
import Home from '../Home';
import Reorder from '../Reorder';
import Categories from '../Categories';
import {data} from '../data/data';
import SellerProducts from '../SellerProducts';
import Deals from '../Deals';
import Footer from '../Footer';

export default function() {
  return (
    <>
     <Navbar/>
      <Home/>
      <Reorder/>
      <Categories infos={data.categories}/>
      <SellerProducts seller={data.sellers}/>
      <Deals topdeals={data.deals}/>
      <Footer/>
    </>
  )
}
