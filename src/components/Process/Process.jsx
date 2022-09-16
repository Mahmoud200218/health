import React from 'react'
import "./process.css"
import {AiOutlineRight} from "react-icons/ai"
import plus from "../../assests/plus-image.png"
import circle from "../../assests/circle__icon.png"
/* import On scroll animation */
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Process = () => {
  return (
    <div className='process'>
       <div className="process__title">
       <AnimationOnScroll animateIn="animate__bounce">
       <h6>Working Process</h6>
       </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__lightSpeedInLeft">
        <h1>How we works?</h1>
      </AnimationOnScroll>
       </div>
      <div className="process__content">
        <div className="process__box1">
            <h1>01</h1>
            <h4>Make Appointmnet</h4>
            <p>
             It is a long established fact that 
             a reader will be distracted by 
             the readable content of.
            </p>
            <button><a href="">View More  <span> <AiOutlineRight/> </span></a></button>
        </div>
        <div className="process__box1 process__bx2">
        <div className="proccess__bx2__title">
            <h1>02</h1>
            <h4>Make Appointmnet</h4>
        </div>
            <p>
             It is a long established fact that 
             a reader will be distracted by 
             the readable content of.
            </p>
            <button><a href="">View More  <span> <AiOutlineRight/> </span></a></button>
        </div>
        <div className="process__box1">
        <h1>03</h1>
            <h4>Registration</h4>
            <p>
             It is a long established fact that 
             a reader will be distracted by 
             the readable content of.
            </p>
            <button><a href="">View More  <span> <AiOutlineRight/> </span></a></button>
        </div>
        <img src={plus} alt="plus-image" className='plus__image' />
        <img src={circle} alt="plus-image" className='circle__image'/>
      </div>
    </div>
  )
}

export default Process