
import HeaderImgse from '../../assets/abdu.jpg';
import data from './data'
import './header.css'

function Header() {
  return (
    <header id="Header">
      <div className="container  header__container">
        <div className="header__portfile">
          <img src={HeaderImgse} alt="Header Portait" />
        </div>
        <h3>Abdulghani Ibrahim</h3>
        <p>you are a click away from building your dream website or web app Send me the details of you project for
          a modern mobile responsive  highly prefoment website todsy!
        </p>
        <div className="header__cat">
          <a href="#contact" className="btn primary"> Let's Talk</a>
          <a href="#portfolio" className="btn light"> My Work</a>
        </div>
        <div className="header__socials">
        {
             data.map(item =><a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a> )
           }
        </div>
      </div>
    </header>
  )
}

export default Header;