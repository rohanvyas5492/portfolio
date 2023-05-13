import React from 'react'

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Resume</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Rohan Vyas</h4>
              <p><em>Website Developer with 2+ year of comprehensive expertise in UI, JavaScript /ES6 /ES2017, web-design, development, testing, and E- Commerce business applications.</em></p>
              <ul>
                <li>Lucknow, Uttar Pradesh, India</li>
                <li>(91) 8707409513</li>
                <li>rohanvyas007@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Advanced Program in Digital Media and Design</h4>
              <h5>2017 - 2019</h5>
              <p><em>Maya Academy of Advanced Cinematics (MAAC)</em></p>
            </div>
            <div className="resume-item">
              <h4>O Level</h4>
              <h5>2017 - 2018</h5>
              <p><em>UPTEC Computer Consultancy Limited</em></p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Arts</h4>
              <h5>2014 - 2017</h5>
              <p><em>UTTAR PRADESH STATE UNIVERSITY</em></p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Front End Web Developer</h4>
              <h5>05/2021 - 08/2022</h5>
              <p><em>NicoleInfoSoft, Gurugram</em></p>
              <ul>
                <li>Developed user friendly, responsive, cross-browser
compatible Front-End templates for both Ecommerce and
Informative websites using modern web technologies such
as HTML5, CSS3, JavaScript, and JQuery</li>
                <li>Developed High-End Front-end templates for Admin
Dashboards, Seller Dashboards and Customer Relationship
Management (CRM) Applications</li>
                <li>Coordinated with clients and onsite team to get the
requirements, take assigned tasks from onsite, and close the
issues in time.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Front End Web Developer</h4>
              <h5>10/2019 - 03/2021</h5>
              <p><em>Magento Guru Pvt. Ltd, New Delhi</em></p>
              <ul>
                <li>Developed user friendly, responsive, cross-browser
compatible Front-End designs using modern web
technologies such as HTML5, CSS3, JavaScript, JQuery, SaaS, and React Js. </li>
                <li>Managed the development of applications on web sites
including the development of functional specifications,
interface design, coding, and testing. </li>
                <li>Worked with a few content management systems such as
WordPress, Open Cart and Magento.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Resume
