import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {DiJavascript1} from 'react-icons/di'
import {SiBootstrap} from 'react-icons/si'
import {DiReact} from 'react-icons/di'
import {DiJava} from 'react-icons/di'
import {DiPhp} from 'react-icons/di'
import {DiMysql} from 'react-icons/di'
import {FaNodeJs} from 'react-icons/fa'
import {DiMongodb} from 'react-icons/di'

function Experience() {
  return (
<section id="experience">
  <h2> My Experience</h2>
  <p>What Skills I Have</p>
  <div className='container exprience__container'>
    <div className='exprience__frontend'>
      <h3>Frontend Development</h3>
      <div className='exprience__content'>
        <article className='exprience__details'>
          <AiFillHtml5 className='dennger'/>
           <div>
           <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
           </div>
        </article>
        <article className='exprience__details'>
          <DiCss3 className='dennger'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
        </article>
        <article className='exprience__details'>
          <DiJavascript1 className='dennger'/>
           <div>
           <h4>JAVASCRIPT</h4>
            <small className='text-light'>Experienced</small>
           </div>
        </article>
        <article className='exprience__details'>
          <SiBootstrap className='dennger'/>
            <div>
            <h4>BOOTSTERB</h4>
            <small className='text-light'>Experienced</small>
            </div>
        </article>
        <article className='exprience__details'>
          <DiReact className='dennger'/>
            <div>
            <h4>REACT</h4>
            <small className='text-light'>Experienced</small>
            </div>
        </article> 
      </div>
    </div>
   <div className='exprience__backend'>
   <h3>Backend Development</h3>
      <div className='exprience__content'>
        <article className='exprience__details'>
          <DiJava className='dennger'/>
            <div>
            <h4>Java</h4>
            <small className='text-light'>Experienced</small>
            </div>
        </article>
        <article className='exprience__details'>
          <DiPhp className='dennger'/>
           <div>
           <h4>PHP</h4>
            <small className='text-light'>Experienced</small>
           </div>
        </article>
        <article className='exprience__details'>
          <DiMysql className='dennger'/>
           <div>
           <h4>MySQL</h4>
            <small className='text-light'>Experienced</small>
           </div>
        </article>
        <article className='exprience__details'>
          <FaNodeJs className='dennger'/>
           <div>
           <h4>Node  Js</h4>
            <small className='text-light'>Experienced</small>
           </div>
        </article>
        <article className='exprience__details'>
          <DiMongodb className='dennger'/>
           <div>
           <h4>MongoDB</h4>
            <small className='text-light'>Experienced</small>
           </div>
        </article>
      </div>
   </div>
  </div>
  </section>
  )
}

export default Experience