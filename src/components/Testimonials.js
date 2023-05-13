import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import u1 from '../assets/img/testimonials/testimonials-1.jpg'
import u2 from '../assets/img/testimonials/testimonials-2.jpg'
import u3 from '../assets/img/testimonials/testimonials-3.jpg'
import{ImQuotesLeft,ImQuotesRight} from 'react-icons/im'


const Testimonials = () => {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Testimonials</h2>
        </div>

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">
          <Slider {...settings}>
            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={u1} className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <i className='quote-icon-left'><ImQuotesLeft /></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i  className='quote-icon-right'><ImQuotesRight /></i>
                </p>
              </div>
            </div> 

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={u2} className="testimonial-img" alt="" />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i  className='quote-icon-left'><ImQuotesLeft /></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i  className='quote-icon-right'><ImQuotesRight /></i>
                </p>
              </div>
            </div> 

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={u3} className="testimonial-img" alt="" />
                <h3>Sara Wilsson</h3>
                <h4>Designer</h4>
                <p>
                  <i  className='quote-icon-left'><ImQuotesLeft /></i>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i  className='quote-icon-right'><ImQuotesRight /></i>
                </p>
              </div>
            </div> 
            </Slider>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonials
