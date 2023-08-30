import AboutImage from '../../assets/abdu.jpg';
import { HiDownload } from 'react-icons/hi';
import CV from '../../assets/cv.pdf';
import data from './data';
import Card from '../../components/Card';
import './about.css';

function About() {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (<Card key={item.id} className="about__card">
                <span className="about__card-icon"> {item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>))
            }
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugiat sunt at eaque optio quibusdam expedita aperiam maxime impedit voluptates sequi porro, ducimus doloribus dolor voluptatum odit soluta explicabo accusamus!</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quidem porro quos assumenda tenetur, excepturi dolor, nemo reprehenderit, dolorum facilis obcaecati ipsa exercitationem officiis in unde.ipsa exercitationem officiis in unde. Qui illum tempora reprehenderit!</p>
          <a href={CV} download className="btn primary"> Download CV <HiDownload /></a>
        </div>
      </div>
    </section>
  )
}

export default About