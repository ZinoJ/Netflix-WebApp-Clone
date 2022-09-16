import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <h4>Questions? Contact us.</h4>
      <div className="footer__container">
         <div className='footer__column'>
            <span>FAQ</span>
            <span>Investor Relations</span>
            <span>Privacy</span>
            <span>Speed Test</span>
         </div>
         <div className='footer__column'>
            <span>Help Center</span>
            <span>Jobs</span>
            <span>Cookie preferences</span>
            <span>Legal Notices</span>
         </div>
         <div className='footer__column'>
            <span>Account</span>
            <span>Ways to Watch</span>
            <span>Corporate Information</span>
            <span>Only on Netflix</span>
         </div>
         <div className='footer__column'>
            <span>Media Center</span>
            <span>Terms of Use</span>
            <span>Contact Us</span>
         </div>
      </div>
      <h4>Netflix Nigeria</h4>

    </div>
  )
}

export default Footer