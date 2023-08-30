import React, { useState } from "react";
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  { id: 1, image: IMG1,categroy:'App', title: 'Chat App', github: 'https://github.com', demo: 'https://github.com' },
  { id: 2, image: IMG2,categroy:'Frontend', title: 'Chat App', github: 'https://github.com', demo: 'https://github.com' },
  { id: 3, image: IMG3,categroy:'backend', title: 'Chat App', github: 'https://github.com', demo: 'https://github.com' },
  { id: 4, image: IMG4,categroy:'backend', title: 'Chat App', github: 'https://github.com', demo: 'https://github.com' },
  { id: 5, image: IMG5,categroy:'App', title: 'Chat App', github: 'https://github.com', demo: 'https://github.com' },
  { id: 6, image: IMG6,categroy:'App', title: 'Chat App', github: 'https://github.com', demo: 'https://github.com' }

]


  const Portfolio= ()=> {
    const [Item, setItem] = useState(data);
    const filterItem =(cateItem) => {
      const updateItem = data.filter((curElem)=>{
        return curElem.categroy === cateItem
      })
      setItem(updateItem)
    }
    
  return (
    <section id="portfolio">

      <h2>Portfolio</h2>
      <p>Working Me!</p>
      <div className="container links">
         <ul className="light">
           <li className="active" onClick={()=> setItem(data)}>All</li>
           <li onClick={()=>filterItem("Frontend")}>Frontend</li> 
           <li onClick={()=>filterItem("backend")}>backend</li> 
           <li onClick={()=>filterItem("App")}>Frontend</li> 

         </ul>

        </div>

      <div className="container  portfolio__container">
      {
           
           Item.map(({ id, image, title, github, demo }) => {
            return (
              <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn primary' target='_blank'>Github</a>
                  <a href={demo} className='btn light' target='_blank'>Live Demo</a>
                </div>
              </article >
            )
          })
        }

      </div>
    </section>
  )
}
export default Portfolio;