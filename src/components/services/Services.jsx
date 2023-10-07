import React from 'react'
import './services.css'
import { AiOutlineCheck } from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='services'>
          <div className="service__head">
            <h3>Game Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Creation of immersive and engaging game worlds that captivate players.</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Design and development of challenging gameplay mechanics and levels.</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Integration of cutting-edge graphics and visual effects for stunning game visuals.</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Multi-platform game development for a wider player reach.</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Implementation of in-game monetization strategies for revenue generation.</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Quality assurance and playtesting to ensure a seamless gaming experience.</p>
            </li>
          </ul>
        </article>


        {/*END NEW START */}

        <article className='services'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Responsive website design for optimal user experience on all devices.</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Front-end and back-end development using the latest web technologies.</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>E-commerce solutions to help you sell products and services online.</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Content management systems (CMS) for easy website maintenance.</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Search engine optimization (SEO) to improve your website's visibility.</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Secure web applications with robust cybersecurity measures.</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Custom web solutions tailored to your specific business goals.</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Timely project delivery and ongoing support for your web development needs.</p>
            </li>
          </ul>
        </article>


        { /*END NEW START */}

        <article className='services'>
          <div className="service__head">
            <h3>Application Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Customized application development tailored to your unique business needs.</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Expertise in building user-friendly and intuitive mobile and web applications.</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Integration of cutting-edge technologies for optimal app performance.</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Scalable solutions that grow with your business and adapt to changing requirements.</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Thorough testing and quality assurance to ensure a bug-free user experience.</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Timely delivery and ongoing support to keep your application up and running smoothly.</p>
            </li>

            <li>
              <AiOutlineCheck className='service__list-icon' />
              <p>Competitive pricing and transparent communication throughout the development process.</p>
            </li>
          </ul>
        </article>


      </div>
    </section>
  )
}

export default Services