import React, { useEffect, useState } from 'react'; 
import axios from 'axios';
import './portfolio.css'
import IMG1 from '../../assets/port1.png'
import IMG2 from '../../assets/port2.png'
import IMG3 from '../../assets/port3.png'
import IMG4 from '../../assets/port4.png'
import IMG5 from '../../assets/port5.png'
import IMG6 from '../../assets/port6.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Data Analysis Research Sample',
        github: 'https://github.com',
        demo: 'https://dribbble.com/Alien_pixels'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Website sample',
        github: 'https://github.com',
        demo: 'https://dribbble.com/Alien_pixels'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Figma dashboard UI kit for data design and web apps',
        github: 'https://github.com',
        demo: 'https://dribbble.com/Alien_pixels'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Maintaining tasks and tracking progress',
        github: 'https://github.com',
        demo: 'https://dribbble.com/Alien_pixels'
    },
    {
        id: 5,
        image: IMG5,
        title: 'School Management System',
        github: 'https://github.com',
        demo: 'https://dribbble.com/Alien_pixels'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Charts template & infographics in Figma ',
        github: 'https://github.com',
        demo: 'https://dribbble.com/Alien_pixels'
    },
]

const Portfolio = () => {

  const[data , setData] = useState([]);
  useEffect (()  => {
    axios.get("https://woche-liz.cyclic.app/api/portfolio").then(response => {
      const formattedData = response.data.data.map(item => ({
        id:item._id,
        image: item.image,
        title:item.github,
        demo:item.demo
    }));
    setData(formattedData)
    }).catch(error=> {
         console.log("Error fteching the portfolio data",error);

    } )
    
    
  },  []);
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {


                    data.map(({ id, image, title, github, demo }) => (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>GitHub</a>
                                    <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                                </div>
                            </article>
                        ))



               }
            </div>
        </section>
    )
}

export default Portfolio