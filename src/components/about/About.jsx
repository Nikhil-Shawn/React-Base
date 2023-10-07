import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.webp'
import {FaAward} from 'react-icons/fa'
import {TbUsers} from 'react-icons/tb'
import {AiOutlineProject} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="aboutimage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ years working</small>
            </article>

            <article className='about__card'>
              <TbUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className='about__card'>
              <AiOutlineProject className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
            
          </div>

          <p>
          I'm Nikhil Chavan, a versatile full-stack developer on a mission to turn creative concepts into digital realities. With expertise in game development, website design, and application engineering, I specialize in bringing ideas to life in the digital realm. From crafting immersive gaming experiences to designing stunning websites and developing user-friendly applications, I'm here to transform your visions
           into tangible, interactive solutions. Let's collaborate and take your digital projects to the next level!
          </p>

          <a href="#contact" className='btn btn-primary'>Get in touch</a>
        </div>
      </div>



    </section>
  )
}

export default About