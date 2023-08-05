import React from 'react';
import Mockup from '../assets/image-mockups.png';
import './hero.scss';

function Hero(props) {
   return (
      <header>
         <div className="header-inner container">
            <div className="hero-desc">
               <div>
                  <h1>Next generation digital bangking</h1>
                  <p>
                     Take your financial life online. Your Easybank account will
                     be a one-stop-shop for spending. saving budgeting,
                     investing, and much more.
                  </p>
                  <button className="btn-invite">
                     <span>Request Invite</span>
                  </button>
               </div>
            </div>
            <div className="hero-image">
               {/* <img className="bg-hero" src={HeroImage} alt="background hero" /> */}
               <img className="mockup" src={Mockup} alt="mockup" />
            </div>
         </div>
      </header>
   );
}

export default Hero;
