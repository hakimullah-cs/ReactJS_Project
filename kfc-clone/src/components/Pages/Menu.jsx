import React from 'react'
import Navbar from '../Navbar'
import Categories from '../Categories'
import Products from '../Menu/Products'
import Footer from '../Footer'
import {data} from '../data/data'

export default function Menu() {
  return (
    <div>
        <Navbar/>
        <Categories infos={data.categories}/>
        {/* <Products prod={data.everyday} head={"EveryDay Value"}/>
        <Products prod={data.AlaCart} head={"Ala-Carte-&-Combos"}/>
        <Products prod={data.signatureBoxes} head={"Signature-Boxes"}/>
        <Products prod={data.sharing} head={"Sharing"}/>
        <Products prod={data.snacks} head={"Snacks-&-Beverages"}/>
        <Products prod={data.mignight} head={"Midnight (Start at 12 am)"}/> */}
        <Footer/>
    </div>
  )
}
