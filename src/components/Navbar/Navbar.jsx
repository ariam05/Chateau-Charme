import React, {useContext, useState} from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home")

  const {getTotalCartAmount} = useContext(StoreContext);


  return (
    <div className='navbar' id='navbar'>
    <Link to='/'><img src={assets.logo} alt="logo" className="logo" /></Link>
    <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu === "home"?"active":""}>HOME </Link>
        <a href='#explore-product' onClick={()=>setMenu("products")} className={menu === "products"?"active":""}>PRODUCTS</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>MOBILE APP</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu === "contact-us"?"active":""}>CONTACT US</a>
    </ul>
    <div className="navbar-right">
        <div className="navbar-search-icon">
        <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"basket-dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
    </div>
    
    </div>
    
  )
}

export default Navbar