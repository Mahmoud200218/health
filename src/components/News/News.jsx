import React from 'react'
import "./news.css"
import {AiOutlineRight} from "react-icons/ai"
import {MdOutlineDateRange} from "react-icons/md"
import News1 from "../../assests/News1.jpg"
import News2 from "../../assests/News2.jpg"
import News3 from "../../assests/News3.jpg"
import Testimonials1 from "../../assests/Testimonial1.jpg"
import Testimonials2 from "../../assests/Testimonial2.jpg"
import Testimonials3 from "../../assests/Testimonial3.jpg"
/* import On scroll animation */
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll'; 

const News = () => {
  return (
    <div className='news'>
        <div className="news__title">
          <AnimationOnScroll animateIn="animate__bounce">
            <h5>Latest News</h5>
          </AnimationOnScroll>

            <h1>Our Latest News</h1>
        </div>
      <div className="news__content">
        <div className="content__box">
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <img src={News1} alt="News1" className='News-image' />
          </AnimationOnScroll>
            <div className="box__info">
              <div className="name">
                <img src={Testimonials1} alt="Testimonials1" className='image-prof' />
                <p>John deo</p>
              </div>
              <div className="date">
                <MdOutlineDateRange className='date-icon'/> <p>21 July 2021</p>
              </div>
            </div>
            <h1>Precious Tips To Help You Get Better.</h1>
            <button>Contact Us <AiOutlineRight/></button>
        </div>

        <div className="content__box">
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <img src={News2} alt="News1" className='News-image' />
          </AnimationOnScroll>
            <div className="box__info">
              <div className="name">
                <img src={Testimonials3} alt="Testimonials3" className='image-prof' />
                <p>John deo</p>
              </div>
              <div className="date">
                <MdOutlineDateRange className='date-icon'/> <p>21 July 2021</p>
              </div>
            </div>
            <h1>Precious Tips To Help You Get Better.</h1>
            <button>Contact Us <AiOutlineRight/></button>
        </div>

        <div className="content__box">
          <AnimationOnScroll animateIn="animate__fadeInUp">
            <img src={News3} alt="News1" className='News-image' />
          </AnimationOnScroll>
            <div className="box__info">
              <div className="name">
                <img src={Testimonials2} alt="Testimonials2" className='image-prof' />
                <p>John deo</p>
              </div>
              <div className="date">
                <MdOutlineDateRange className='date-icon'/> <p>21 July 2021</p>
              </div>
            </div>
            <h1>Precious Tips To Help You Get Better.</h1>
            <button>Contact Us <AiOutlineRight/></button>
        </div>
      </div>
    </div>
  )
}

export default News