import React from 'react';
import logo from '../assets/logo.svg';
import './navbar.scss';
import { useState } from 'react';

function Navbar(props) {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <nav>
         <div className="nav-inner">
            <div className="logo">
               <img src={logo} alt="" />
            </div>

            <ul>
               <li>
                  <a href="#">Home</a>
               </li>
               <li>
                  <a href="#">About</a>
               </li>
               <li>
                  <a href="#">Contact</a>
               </li>
               <li>
                  <a href="#">Blog</a>
               </li>
               <li>
                  <a href="#">Careers</a>
               </li>
            </ul>

            <div
               className="icon-hamburger"
               onClick={() => setIsMenuOpen((prev) => !prev)}
            >
               {isMenuOpen ? (
                  <img src="/icon-close.svg" alt="" />
               ) : (
                  <img src="/icon-hamburger.svg" alt="" />
               )}
            </div>

            <div className={`dropdown-links ${isMenuOpen ? 'active' : ''}`}>
               <ul>
                  <li>
                     <a href="#">Home</a>
                  </li>
                  <li>
                     <a href="#">About</a>
                  </li>
                  <li>
                     <a href="#">Contact</a>
                  </li>
                  <li>
                     <a href="#">Blog</a>
                  </li>
                  <li>
                     <a href="#">Careers</a>
                  </li>
               </ul>
            </div>

            <button className="btn-invite">
               <span>Request Invite</span>
            </button>
         </div>
      </nav>
   );
}

export default Navbar;
