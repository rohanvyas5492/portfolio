import React from 'react'
import p1 from '../assets/img/portfolio/portfolio-1.jpg'
import p2 from '../assets/img/portfolio/portfolio-2.jpg'
import p3 from '../assets/img/portfolio/portfolio-3.jpg'
import {GoPlus} from 'react-icons/go'
import {BiLink} from 'react-icons/bi'

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={p1} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>October Fest</h4>
                <p>Website</p>
                <div className="portfolio-links">
                  <a href={p1} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i><GoPlus /></i></a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i><BiLink /></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={p2} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>EdcaterConnect</h4>
                <p>Website</p>
                <div className="portfolio-links">
                  <a href={p2} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i><GoPlus /></i></a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i><BiLink /></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={p3} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Edcater</h4>
                <p>Landing Page</p>
                <div className="portfolio-links">
                  <a href={p3} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i><GoPlus /></i></a>
                  <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i><BiLink /></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Portfolio
