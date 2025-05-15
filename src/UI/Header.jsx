import React, { useState, useEffect } from 'react';
import './header.css';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
   const [active, setActive] = useState(false);
   const location = useLocation(); 

   const handlenav = () => {
      setActive(!active);
   };


   useEffect(() => {
      setActive(false);
   }, [location.pathname]);

   return (
      <header>
         <div className="logo">
            <NavLink to='/'><h1>CV<span>Genie</span></h1></NavLink>
         </div>
         <nav className={active ? "show" : ""}>
            <ul>
               <NavLink to="/" className='navbar'>Home</NavLink>
               <NavLink to="/cvmaker" className='navbar'>Start Making</NavLink>
               <NavLink to="/about" className='navbar'>About us</NavLink>
            </ul>
         </nav>
         <div className="hamburger" onClick={handlenav}>
            <p className="hamitems"></p>
            <p className="hamitems"></p>
            <p className="hamitems"></p>
         </div>
      </header>
   );
};

export default Header;
