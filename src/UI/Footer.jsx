import React from 'react'
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="cell email">
        <div className="icon"><IoMail /> </div>
        <div className="text"><p>contact@cvgenie.com</p></div>
      </div>
      <div className="cell address">
        <div className="icon"><FaLocationDot /></div>
        <div className="text"><p>123 Genie Lane, Dream City, 12345</p></div>
      </div>
      <div className="cell contact">
        <div className="icon"><FaPhone /></div>
        <div className="text"><p>(123) 456-7890</p></div>
      </div>
    </footer>
  )
}

export default Footer;
