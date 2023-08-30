import React, { useState } from "react";
import About from "./setcions/about/About"
import Navbar from "./setcions/navbar/Navbar"
import Portfolio from "./setcions/portfolio/Portfolio"
import Floatingnav from "./setcions/floating/Floatingnav"
import Header from "./setcions/header/Header"
import Services from "./setcions/services/Services"
import Experience from "./setcions/experience/Experience"
import Footer from "./setcions/footer/Footer"
import Contact from "./setcions/contact/Contact"
import FAQs from "./setcions/faqs/FAQs"
import data from "./setcions/about/data"

const allCategoies=['all', ...new Set(data.map((data)=>data.categroy))] 

const App=()=> {
  const [menuItems, setmenuItems] = useState(data);
  const [categoies, setCategoies] = useState(allCategoies);
  const filterItem = (categroy)=> {
    if(categroy == 'all'){
      setmenuItems(data)
      return;
    }
    const newItem = data.filter((data)=>data.categroy == categroy);
    setmenuItems(newItem);
  }
  return (
   <main>
     <Navbar/>
     <Header/>
     <About/>
     <Experience/>
     <Services />
     <Portfolio />
     <Contact />
     <Footer />
     
   </main>
  )
}

export default App