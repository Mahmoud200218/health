import React from 'react'
import "./header.css"
import { useState, useEffect } from "react"; // We'll be using the useState() and useEffect() hooks to allow us to develop the functionality easily and quickly.
import { FaAngleUp } from "react-icons/fa";

import home from "../../assests/home-img.png"
import plus from "../../assests/plus-image.png"
const Header = () => {

  // ============ Scroll To Top ============ //

  // useState ==> Returns a stateful value, and a function to update it.
  // setShowTopBtn ==> Set a button
  const [showTopBtn, setShowTopBtn] = useState(false); // must take value true or false
        
  useEffect(() => {
    window.addEventListener("scroll", ()=> {
      if(window.scrollY > 400) {
        setShowTopBtn(true);
      }else {
        setShowTopBtn(false);
      }
    });
  },[]);

    
  const goToTop = () =>{
    window.scrollTo({
      top : 0,
      behavior : 'smooth'
    });
  };


  return (
    <div className="header">
      <div className="header__content">
        <div className="header__left">
          <div className="circle"><div className="circle__child"></div></div>
          <h5>We Provide All Health Care Solution</h5>
          <h1>
            Protect Your Health And <br /> Take Care To Of Your <br />
            Health
          </h1>
          <button>Read More</button>
          <img src={plus} alt="plus-image" className='plus__image' />
        </div>
        <div className="header__right">
          <div className="square"> <div className="square-child"></div> </div>
          <img src={home} alt="home-image" />
        </div>
      </div>

      {/* // ============ Scroll To Top ============ // */}
      <div className="top-to-btm">     
        {showTopBtn && (
          <FaAngleUp
            className="icon-position icon-style"
            onClick={goToTop} // onClick button => run a goToTop Function
          />
        )}
      </div>
    </div>
  )
}

export default Header