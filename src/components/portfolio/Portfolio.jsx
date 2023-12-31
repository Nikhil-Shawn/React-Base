import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const portfolio__data = [
    {
        id: 1,
        image: IMG1,
        title: 'Crypto Currency',
        github: 'https://github.com',
        demo: 'https//dribble.com'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Figma',
        github: 'https://github.com',
        demo: 'https//dribble.com'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Charts templates',
        github: 'https://github.com',
        demo: 'https//dribble.com'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Crypto Currency',
        github: 'https://github.com',
        demo: 'https//dribble.com'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Finance',
        github: 'https://github.com',
        demo: 'https//dribble.com'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Ray tracing',
        github: 'https://github.com',
        demo: 'https//dribble.com'
    },
]
    



const Portfolio = () => {
    return (
        <section id="porfolo">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
            {
                    portfolio__data.map(({id, image, title, gitub, demo}) => {
                        return (
                            <article className='portfolio__item' key={id}>
                    <div className="portfolio__item-image">
                        <img src={image} alt="" />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio-item-cta">
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="https://dribbble.com/shots" className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                        )
                    })
                }
                
            </div>

        </section>
    )
}

export default Portfolio