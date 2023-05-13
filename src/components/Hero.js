import React from 'react'
import{FaFacebook,FaInstagram,FaSkype,FaLinkedin,FaGithub} from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
    <div className="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Rohan Vyas</h1>
      <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer"></span></p>
      <div className="social-links">
        <a href="#" className="twitter"><FaGithub /></a>
        <a href="#" className="facebook"><FaFacebook /></a>
        <a href="#" className="instagram"><FaInstagram /></a>
        <a href="#" className="google-plus"><FaSkype /></a>
        <a href="#" className="linkedin"><FaLinkedin /></a>
      </div>
    </div>
    </section>
  )
}

export default Hero
