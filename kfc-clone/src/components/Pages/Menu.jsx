import React from 'react';
import Navbar from '../Navbar';
import Categories from '../Categories';
import {data} from '../data/data';
import Everyday from '../Menu/Everyday';
import AlaCart from '../Menu/AlaCart';
import SignatureBoxes from '../Menu/SignatureBoxes';
import Sharing from '../Menu/Sharing';
import Snacks from '../Menu/Snacks';
import Midnight from '../Menu/Midnight';
import Footer from '../Footer';





export default function Menu() {
  return (
    <div className='text-white'>
        <Navbar/>
        <Categories infos={data.categories}/>
        <Everyday every={data.everyday}/>
        <AlaCart Ala={data.AlaCart}/>
        <SignatureBoxes sign={data.signatureBoxes}/>
        <Sharing share={data.sharing}/>
        <Snacks snack={data.snacks}/>
        <Midnight mid={data.mignight}/>
        <Footer/>
       
    </div>
  )
}
