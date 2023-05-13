import React from 'react'
import{FaFacebook,FaInstagram,FaSkype,FaLinkedin,FaGithub,FaHeart} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id="footer">
    <div  className="container">
      <h3>Rohan Vyas</h3>
      <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
      <div  className="social-links">
        <a href="#"  className="twitter"><i><FaGithub /></i></a>
        <a href="#"  className="facebook"><i><FaFacebook /></i></a>
        <a href="#"  className="instagram"><FaInstagram /><i></i></a>
        <a href="#"  className="google-plus"><i><FaSkype /></i></a>
        <a href="#"  className="linkedin"><i><FaLinkedin /></i></a>
      </div>
      <div  className="copyright">
        &copy; Copyright <strong><span>Rohan Vyas</span></strong>. All Rights Reserved
      </div>
      <div  className="credits">
        Made with <FaHeart color='red'/> by Rohan Vyas
      </div>
    </div>
  </footer>
  )
}

export default Footer
