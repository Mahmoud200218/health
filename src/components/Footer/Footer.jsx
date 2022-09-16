import React from 'react'
import "./footer.css"
import logo from "../../assests/logo.png"
import facebook from "../../assests/facebook.png"
import twitter from "../../assests/twitter.png"
import instagram from "../../assests/instagram.png"
import linkedin from "../../assests/linkedin.png"

import { BsTelephoneFill } from "react-icons/bs"
/* import On scroll animation */
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll'; 

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__content">
                <div className="footer__list__one">
                    <h1><img src={logo} alt="logo footer" /></h1>
                    <p>
                        Lorem ipsum is dolor sit amet,
                        csectetur adipiscing elit,
                        dolore smod tempor
                        incididunt ut labore et.
                    </p>
                    <div className="list__one__contact">
                        <div className="contact__icon__box">
                            <BsTelephoneFill />
                        </div>
                        <h6>Contact Us</h6>
                        <h5>+01 123 456 7890</h5>
                    </div>
                </div>

                <div className="footer__list__two">
                <AnimationOnScroll animateIn="animate__rollIn">
                    <h3>Quick Links</h3>
                </AnimationOnScroll>
                    <span></span>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Booking</a></li>
                        <li><a href="">Faq's</a></li>
                        <li><a href="">Blogs</a></li>
                        <li><a href="">Out Team</a></li>
                    </ul>
                </div>


                <div className="footer__list__two">
                <AnimationOnScroll animateIn="animate__rollIn">
                    <h3>Our Service</h3>
                </AnimationOnScroll>
                    <span></span>
                    <ul>
                        <li><a href="">Dental Care</a></li>
                        <li><a href="">Cardiac Clinic</a></li>
                        <li><a href="">Massege Therapy</a></li>
                        <li><a href="">Cardiology</a></li>
                        <li><a href="">Precise Diagnosis</a></li>
                        <li><a href="">Abmbulance Services</a></li>
                    </ul>
                </div>


                <div className="footer__list__two media__query">
                <AnimationOnScroll animateIn="animate__rollIn">
                    <h3 className='media__title'>Subcribe</h3>
                </AnimationOnScroll>
                    <span></span>
                    <ul>
                       <input type="email" className='email' placeholder='Email Address' />
                       <button>Subcribe Now</button>
                    </ul>
                    <div className="footer__icons">
                      <ul>
                        <li><a href=""><img src={facebook} alt="facebook" /></a></li>
                        <li><a href=""><img src={twitter} alt="twitter" /></a></li>
                        <li><a href=""><img src={instagram} alt="instagram" /></a></li>
                        <li><a href=""><img src={linkedin} alt="linkedin" /></a></li>
                      </ul>
                    </div>
                </div>
                
                <div className="footer__copyright">
                    <span className="footer__copyright__line"></span>
                    <p>Copyright © 2022 Design & Developed by <a href="">Mahmoud Azzam</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer