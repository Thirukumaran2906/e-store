import React from 'react'
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import './footer.css'

const Footer = () => {
  return (
    <footer>
    <RiTwitterXFill className='Media-icon'/>
    <FaFacebookSquare className='Media-icon'/>
    <FaInstagramSquare className='Media-icon'/>
    <FaYoutube className='Media-icon'/>
    <IoMdMail className='Media-icon'/>
  </footer>
  )
}

export default Footer
