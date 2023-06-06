import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pati 2.jpg'
import IMG2 from '../../assets/pati 2.jpg'

const Portfolio = () => {
  return (
    <section id= "portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='portfolio'/>
          </div>
          <h3>My Portfolio</h3>
          <div className='portfolio__item-cta'>
          <a href='https://github.com/Ntamopatricia/portfolio' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://647975b42d520a4fa9a2655a--poetic-pothos-1a61f8.netlify.app/' className='btn btn-primary'target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}


export default Portfolio