import React from 'react'
import "./about.css"
import expert1 from "../../assests/exper1.jpg"
import expert2 from "../../assests/exper2.jpg"
import expert3 from "../../assests/exper3.jpg"
import {FaAmbulance} from "react-icons/fa"
import {FaBed} from "react-icons/fa"
import {MdOutlineBloodtype} from "react-icons/md"
import {GiTripleNeedle} from "react-icons/gi"
/* import On scroll animation */
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const About = () => {

  return (
    <div className='about'>
       <div className="about__content">
        <div className="about__left">
          <img src={expert2} alt="exper+t2-image" className='exper1' />
          <img src={expert1} alt="expert1-image" className='exper2' />
          <img src={expert3} alt="expert3-image" className='exper3' />
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <div className="years">
          <div className="years-border">
            <h1>20</h1>
             <br />
            <p>Year Experience</p>
          </div>
          </div>
        </AnimationOnScroll>
        </div>

          
        <div className="about__right">
        <AnimationOnScroll animateIn="animate__bounce">
            <h6>About Us</h6>
        </AnimationOnScroll>
        
            <h1>The Great Place Of
             Medical Hospital Center</h1>
            <p>We provide the special tips 
              and advice’s of heath 
              care treatment and high 
              level of best technology 
              involve in the our hospital.</p>
              <div className="squares"> <div className="square-child"></div> </div> 
              <div className="boxes">
        <AnimationOnScroll animateIn="animate__bounceIn">
                <div className="box1"><FaAmbulance className='icon__box1' /> <p>Emergency Help</p></div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__bounceIn">
                <div className="box1 bx2"><FaBed className='icon__box1 bx2__color' /> <p>Emergency Help</p></div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__bounceIn">
                <div className="box1 bx3"><MdOutlineBloodtype className='icon__box1 bx3__color' /> <p>Emergency Help</p></div>
        </AnimationOnScroll>
        
        <AnimationOnScroll animateIn="animate__bounceIn">
                <div className="box1 bx4"><GiTripleNeedle className='icon__box1 bx4__color' /> <p>Emergency Help</p></div>
        </AnimationOnScroll>
              </div>
              <button>Read More</button>
        </div>
       </div>
    </div>
  )
}

export default About

