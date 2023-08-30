import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

function Footer() {
  return (
    <footer>
      
      {/* <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul> */}
      {/* <div className='footer__socials'> 
      <a href="https://facebook.com"><FaFacebookF/></a>
      <a href="https://twitter.com"><AiOutlineTwitter/></a>
      <a href="https://instgram.com"><AiOutlineInstagram/></a>
      </div> */}
      <div className='footer__copyright'>
        <small>&copy; Code Man All right </small>
      </div>
    </footer>
  )
}

export default Footer