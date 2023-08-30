import React, { useState } from "react";
import logo from '../../assets/abdu.jpg';
import {FiMenu} from 'react-icons/fi';
import {IoMdClose} from 'react-icons/io';
import data from './data';
import './navbar.css';

const Navbar=()=> {
 
  const [click, setClick] = useState(false);
  return (
    <nav>
    <div className="container  nav__contianer">
      <a href="index.html" className="nav__logo" >
        <img src={logo} alt="logo" />
      </a>
      <ul className={`nav__menu ${click ? 'show__nav' : 'hidde__nav'}`} onClick={()=>setClick(false)} >
           {
             data.map(item =><li key={item.id}> 
             <a href={item.link}>{item.title}</a> </li>)
           }
      </ul>
      <button className="meun__icon" onClick={()=>setClick(!click)}>
        {
          click ?<IoMdClose/> :<FiMenu/>
        }
        </button>
    </div>
    </nav>
  )
}

export default Navbar