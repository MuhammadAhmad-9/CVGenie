import React from 'react'
import image from '../assets/bannerImg.jpg'
import './home.css'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      <section>
        <h2>CV Genie — Craft a Magical First Impression</h2>
        <p>At CV Genie, we turn your career story into a stunning resume — fast. Choose from modern templates, customize with ease, and make a lasting first impression. No hassle, just a few clicks to your dream job. </p>
       <NavLink to='/cvmaker'> <button>Start Making</button></NavLink>
      
      </section>
      <div className="img"><img src={image}alt="cv-image" /></div>
    
    </div>
  )
}

export default Home