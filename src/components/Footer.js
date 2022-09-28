import React from 'react'
import {Button} from './Button'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the program newsletter!
            </p>

            <p className="footer-subscription-text">
                You can unsubscribe at an time.
            </p>

            <div className="input-area">
                <form>
                    <input type="email" name="email" placeholder="Your email" className="footer-input"/>
                    <Button buttonStyle='btn--outline'> Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'> How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Prices</Link>
                </div>
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'> How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Prices</Link>
                </div>
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/sign-up'> How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Prices</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' className='social-logo'>
                        Fitter <i className="fab fa-typo3"></i>
                    </Link>
                </div>
                <small className="website-rights">Fitter @2022</small>
                <div className="social-icon">
                    <Link to="/" 
                    target="_blank"
                    className="social-icon-link facebook"
                    aria-label='Facebook'
                    >
                        <i className="fab fa-facebook-f">
</i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  
    )
}

export default Footer