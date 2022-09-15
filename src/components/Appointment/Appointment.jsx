import React from 'react'
import "./appointment.css"
import appointment from "../../assests/appointment.png"
import appointment_two from "../../assests/appointment-women.png"
import appointment_true from "../../assests/appointment-true.png"
import appointment_location from "../../assests/appointment-location.png"
import appointment_love from "../../assests/appointment-love.png"
import appointment_settings from "../../assests/appointment-settings.png"
import appointment_chart_image from "../../assests/chart-image.png"
import appointment_chart_image2 from "../../assests/chart-image2.png"
/* import On scroll animation */
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Appointment = () => {
  return (
    <div className='appointment'>
      <div className="appointment__content">
      <div className="appointment__content__left">
       <div className="border__form">
       <form className='form'>
         <h1>Book Appointment</h1>

      <AnimationOnScroll animateIn="animate__fadeInUp">
         <select className="select__one">
            <option value="Select Department">Select Department</option>
            <option value="Select Department">One</option>
            <option value="Select Department">Two</option>
            <option value="Select Department">Three</option>
         </select>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp">
         <select className="select__one">
            <option value="Select Department">Select Doctor</option>
            <option value="Select Department">One</option>
            <option value="Select Department">Two</option>
            <option value="Select Department">Three</option>
         </select>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp">
         <input type="text" placeholder='Your Name' className='select__one'/>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp">
         <input type="number" placeholder='Phone Numbers' className='select__one' />
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp">
         <input type="date" className='select__one' />
      </AnimationOnScroll>

         <button>Appointment Now</button>

       </form>
       </div>
      </div>
      <div className="appointment__content__right">
        <img src={appointment} alt="appointment_imaage" className='appointment__image' />
        <img src={appointment_two} alt="appointment_women_imaage" className='appointment__women__image' />
        <img src={appointment_true} alt="appointment_true_image" className='appointment__true' />
        <img src={appointment_location} alt="appointment_location_image" className='appointment__location' />
        <img src={appointment_love} alt="appointment_love_image" className='appointment__love' />
        <img src={appointment_settings} alt="appointment_settings_image" className='appointment__settings' />
        <img src={appointment_chart_image} alt="chart_image" className='appointment_chart_image' />
        <img src={appointment_chart_image2} alt="chart_image2" className='appointment_chart_image2' />

      </div>
      </div>
    </div>
  )
}

export default Appointment