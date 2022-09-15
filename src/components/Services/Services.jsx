import React from 'react'
import "./services.css"
import image_slider_one from "../../assests/doctor2.jpg"
import image_slider_two from "../../assests/doctor1.jpg"
import image_slider_three from "../../assests/doctor3.jpg"
import image_slider_four from "../../assests/doctor4.jpg"
import image_icon_services1 from "../../assests/image-icon-services1.png"
import image_icon_services2 from "../../assests/image-icon-services2.png"

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
/* import On scroll animation */
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Services = () => {

// React alice carousel
const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={image_slider_one} onDragStart={handleDragStart} role="presentation"   className='image_slider' />,
  <img src={image_slider_two} onDragStart={handleDragStart} role="presentation"   className='image_slider' />,
  <img src={image_slider_three} onDragStart={handleDragStart} role="presentation" className='image_slider' />,
  <img src={image_slider_four} onDragStart={handleDragStart} role="presentation"  className='image_slider' />,

];
  
  return (
    <div className='services'>
       <div className="services__content">
       <div className="services__left">
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <h6>services</h6>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <h1>We Cover A Big Variety Of Medical Services</h1>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp">
        <p>We provide the special tips and advice’s of heath care treatment 
          and high level of best.</p>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp">
        <button className='btn__services__left'>All Services</button>
      </AnimationOnScroll>
       </div>

       <div className="services__right">
        <img src={image_icon_services1} alt="image icon services1" className='image_icon_services1'/>
        <img src={image_icon_services2} alt="image icon services2" className='image_icon_services2'/>
       <AliceCarousel mouseTracking items={items} className="slider" />
       </div>
       </div>
    </div>
  )
}

export default Services