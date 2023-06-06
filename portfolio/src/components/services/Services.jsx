import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <div>
          <article className='services'><div className='service__head'>
            <h3>Graphic design</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Flyer</p>
            </li>
          </ul><ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Logo</p>
            </li>
          </ul><ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Content writing</p>
            </li>
          </ul>
          </article>
        </div>


        <div>
          <article className='services'><div className='service__head'>
            <h3>Beauty</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>Hair dressing</p>
            </li>
          </ul><ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>skin care</p>
            </li>
          </ul><ul className='services_list'>
          <li>
              <BiCheck className='services__list-icon'/>
              <p>Manicure and pedicure</p>
            </li>
          </ul>
          

          </article>
        </div>


      </div>
    </section>
  )
}


export default services