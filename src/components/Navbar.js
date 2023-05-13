import React from 'react'
import{BiHome,BiUser} from 'react-icons/bi'
import{AiOutlineFile} from 'react-icons/ai'
import{FiBookOpen} from 'react-icons/fi'
import{MdOutlineHomeRepairService} from 'react-icons/md'
import{HiOutlineMail} from 'react-icons/hi'

const Navbar = () => {
 
  return (
    <>
  <header id="header" className="d-flex flex-column justify-content-center">

    <nav id="navbar" className="navbar nav-menu">
      <ul>
        <li><a href="#hero" className="nav-link scrollto active"><BiHome /> <span>Home</span></a></li>
        <li><a href="#about" className="nav-link scrollto"><BiUser /> <span>About</span></a></li>
        <li><a href="#resume" className="nav-link scrollto"><AiOutlineFile /> <span>Resume</span></a></li>
        <li><a href="#portfolio" className="nav-link scrollto"><FiBookOpen /> <span>Portfolio</span></a></li>
        <li><a href="#services" className="nav-link scrollto"><MdOutlineHomeRepairService /> <span>Services</span></a></li>
        <li><a href="#contact" className="nav-link scrollto"><HiOutlineMail /> <span>Contact</span></a></li>
      </ul>
    </nav>

  </header>
  </>
  )
}

export default Navbar
