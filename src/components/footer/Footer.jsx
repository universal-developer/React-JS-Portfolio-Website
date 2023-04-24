import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Artush Aydinyan</h1>

        <ui className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#projcts" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ui>

        <div className="footer__social">
          <a href="" className="footer__social-link" target="_blank">
            <i class="bx bxl-instagram"></i>
          </a>

          <a href="" className="footer__social-link" target="_blank">
            <i class="bx bxl-twitter"></i>
          </a>

          <a href="" className="footer__social-link" target="_blank">
            <i class="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; 2A. All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer
