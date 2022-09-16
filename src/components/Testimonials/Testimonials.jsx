import React from 'react'
import "./testimonials.css"
import Carousel from 'react-bootstrap/Carousel';
import {FaQuoteLeft} from "react-icons/fa" 
import icon_plus from "../../assests/plus-image.png"
import testimonials1 from "../../assests/Testimonial1.jpg"
import testimonials2 from "../../assests/Testimonial2.jpg"
import testimonials3 from "../../assests/Testimonial3.jpg"
import testimonials4 from "../../assests/Testimonial4.jpg"
import testimonials5 from "../../assests/Testimonial5.jpg"
import testimonials6 from "../../assests/Testimonial6.jpg"
/* import On scroll animation */
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Testimonials = () => {

  return (
    <div className='testimonials'>
        <div className="testimonials__title">

        <AnimationOnScroll animateIn="animate__bounce">
        <h5>Testimonial</h5>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInLeft">
        <h1>See What Are The Patients <br /> Saying About us</h1>
        </AnimationOnScroll>

        <img src={icon_plus} alt="icon_plus" className='icon_plus' />
        </div>
      <div className="testimonials__content">

        <div className="testimonials__left">
            <div class="hexagon-wrapper">
              <div class="hexagon">
              </div>
            </div>

            <div className="testimonials__left__images">
                <img src={testimonials1} alt="testimonials1" className='testimonials1' />
                <img src={testimonials2} alt="testimonials2" className='testimonials2' />
                <img src={testimonials3} alt="testimonials3" className='testimonials3' />
                <img src={testimonials4} alt="testimonials4" className='testimonials4' />
                <img src={testimonials5} alt="testimonials5" className='testimonials5' />
                <img src={testimonials6} alt="testimonials6" className='testimonials6' />
            </div>
        </div>

        <div className="testimonials__right">
        <Carousel className='carousel'>
            <Carousel.Item className='slide_item'>
              <div className='item'>
              <div className="box-icon">
                <FaQuoteLeft className='icon' />
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Aperiam doloribus itaque dignissimos cum, esse, quam, porro maxime deserunt 
                    autem fugiat soluta ex distinctio recusandae! Ullam odio assumenda repellendus nisi. Ad!
                    doloribus itaque dignissimos cum dignissimos
              </p>
              </div>
              <Carousel.Caption>
                <h1>John Deo</h1>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='slide_item'>
              <div className='item'>
              <div className="box-icon">
                <FaQuoteLeft className='icon' />
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Aperiam doloribus itaque dignissimos cum, esse, quam, porro maxime deserunt 
                    autem fugiat soluta ex distinctio recusandae! Ullam odio assumenda repellendus nisi. Ad!
                    doloribus itaque dignissimos cum dignissimos
              </p>
              </div>
              <Carousel.Caption>
                <h1>John Deo</h1>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='slide_item'>
              <div className='item'>
              <div className="box-icon">
                <FaQuoteLeft className='icon' />
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Aperiam doloribus itaque dignissimos cum, esse, quam, porro maxime deserunt 
                    autem fugiat soluta ex distinctio recusandae! Ullam odio assumenda repellendus nisi. Ad!
                    doloribus itaque dignissimos cum dignissimos
              </p>
              </div>
              <Carousel.Caption>
                <h1>John Deo</h1>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='slide_item'>
              <div className='item'>
              <div className="box-icon">
                <FaQuoteLeft className='icon' />
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Aperiam doloribus itaque dignissimos cum, esse, quam, porro maxime deserunt 
                    autem fugiat soluta ex distinctio recusandae! Ullam odio assumenda repellendus nisi. Ad!
                    doloribus itaque dignissimos cum dignissimos
              </p>
              </div>
              <Carousel.Caption>
                <h1>John Deo</h1>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='slide_item'>
              <div className='item'>
              <div className="box-icon">
                <FaQuoteLeft className='icon' />
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Aperiam doloribus itaque dignissimos cum, esse, quam, porro maxime deserunt 
                    autem fugiat soluta ex distinctio recusandae! Ullam odio assumenda repellendus nisi. Ad!
                    doloribus itaque dignissimos cum dignissimos
              </p>
              </div>
              <Carousel.Caption>
                <h1>John Deo</h1>
              </Carousel.Caption>
            </Carousel.Item>

              <Carousel.Item className='slide_item'>
              <div className='item'>
              <div className="box-icon">
                <FaQuoteLeft className='icon' />
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Aperiam doloribus itaque dignissimos cum, esse, quam, porro maxime deserunt 
                    autem fugiat soluta ex distinctio recusandae! Ullam odio assumenda repellendus nisi. Ad!
                    doloribus itaque dignissimos cum dignissimos
              </p>
              </div>
              <Carousel.Caption>
                <h1>John Deo</h1>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </div>
      </div>
    </div>
  )
}



export default Testimonials