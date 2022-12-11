import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className="gradeint_text"> Do you want to step in to the future before others </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>rechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt__footer-links_div">
          <h4>Links</h4>
          <h4>Overons</h4>
          <h4>Social Media</h4>
          <h4>Counters</h4>
          <h4>Contact</h4>
        </div>
        <div className="gpt__footer-links_div">
          <h4>Company</h4>
          <h4>Terms & Conditions</h4>
          <h4>Privacy Policy</h4>
          <h4>Contact</h4>
        </div>
        <div className="gpt__footer-links_div">
          <h4>Get in touch</h4>
          <h4>Crechterwoord K12 182 DK Alknjkcb</h4>
          <h4>085-132567</h4>
          <h4>info@payme.net</h4>
        </div>
      </div>
      <div className="gpt3__footer-copywrite">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer