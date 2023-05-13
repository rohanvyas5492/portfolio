import React from 'react'
import profile from '../assets/img/profile-img.jpg';
import {AiOutlineRight} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About</h2>
          <p>Website Developer with 2+ year of comprehensive expertise in UI, JavaScript /ES6 /ES2017, web-design, development, testing, and E- Commerce business applications.</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src={profile} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Web Developer.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><AiOutlineRight /> <strong>Birthday:</strong> <span>28 January 1995</span></li>
                  <li><AiOutlineRight /> <strong>Website:</strong> <span>www.example.com</span></li>
                  <li><AiOutlineRight /> <strong>Phone:</strong> <span>+91 8707409513</span></li>
                  <li><AiOutlineRight /> <strong>City:</strong> <span>Lucknow, Uttar Pradesh, India.</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><AiOutlineRight /> <strong>Age:</strong> <span>28</span></li>
                  <li><AiOutlineRight /> <strong>Degree:</strong> <span>Bachelors</span></li>
                  <li><AiOutlineRight /> <strong>Email:</strong> <span>rohanvyas007@gmail.com</span></li>
                  <li><AiOutlineRight /> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
