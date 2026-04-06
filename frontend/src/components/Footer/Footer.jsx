import { assets } from '../../assets/frontend_assets/assets'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='logo' src={assets.logo} alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos nihil porro laboriosam ratione alias blanditiis totam animi quaerat asperiores omnis?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li><a href="tel:+994516676067">+994 51 667 60 67</a></li>
                <li><a href="mailto:ravan.mammadli@outlook.com">contact@foodhub.com</a></li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright © 2026 FoodHub.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer
