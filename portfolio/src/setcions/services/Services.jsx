import data from "./data"
import './services.css'

function Services() {
  return (
    <section id="services">
      <h2> My Services</h2>
      <p>I give you the best in all the services below</p>
      <div className="container services__container">
      {
              data.map(item => (<card key={item.id} className="services light">
                <div className="services__icon"> {item.icon}</div>
                <div className="services__details">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                </div>
          
              </card>))
            }
      </div>
      </section>
  )
}

export default Services