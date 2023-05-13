import React from 'react'
import {GoSmiley} from 'react-icons/go'
import {AiFillProject} from 'react-icons/ai'
import {BiSupport} from 'react-icons/bi'

const Facts = () => {
  return (
    <section id="facts" className="facts">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Facts</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-6">
            <div className="count-box">
              <i><GoSmiley /></i>
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter">30</span>
              <p>Happy Clients</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i><AiFillProject /></i>
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter">60</span>
              <p>Projects</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i><BiSupport /></i>
              <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter">1000</span>
              <p>Hours Of Support</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Facts
