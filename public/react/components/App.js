
import React, { useState, useEffect } from 'react';
import NavBar  from './NavBar';
import { HomePage } from './HomePage';
import ShopAll from './ShopAll';
import { Route, Routes, useLocation } from 'react-router-dom';
import '../stylesheets/app.css';
import About from './About';
// import and prepend the api url to any fetch calls
import apiURL from '../api';
import Contact from './Contact';
import Footer from './Footer';
import Cart from './Cart';
import { ProductPage } from './ProductPage';

export const App = () => {
  const [items, setItems] = useState([]);

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();
      console.log(itemsData);
      setItems(itemsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);


	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<main className='appContainer'>	
			<NavBar />
			<div className='mainContainer'>
			<Routes>
				<Route path="/" element={<HomePage items={items}/>} />
				<Route path="/shopall" element={<ShopAll />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/product/:id" element={<ProductPage items={items}/>} />
			</Routes>
			</div>
			<Footer />
		</main>
	)
}
