import React from 'react'
import '../Footer/Footer.css'
import TelePhone from '../../assets/Images/telephone.png'
import Email from '../../assets/Images/email.png'
import Logo from '../../assets/Images/Logo.png'
import Social from '../../assets/Images/social.png'
import Map from '../../assets/Images/map.png'
function Footer() {
  return (
    <div className='Footer'>
        <div className="box">
            <h4>CONNECT WITH US</h4>
            <div className="phone">
                <img src={TelePhone} alt="TelePhone" />
                <p>+91 9567843340</p>
            </div>
            <div className="phone">
                <img src={Email} alt="TelePhone" />
                <p>info@deepnetsoft.com</p>
            </div>
        </div>
        <div className="box">
            <img className='logopic' src={Logo} alt="Logo" />
            <h2>
                DEEP
                <span className='net'>NET</span>
                <span className='soft'>SOFT</span>
            </h2>
            <img className='social' src={Social} alt="Social" />
        </div>
        <div className="box">
            <h4>FIND US</h4>
            <div className="map">
                <img src={Map} alt="Map" />
                <p>First floor, Geo infopark, <br /> Infopark EXPY, Kakkanad</p>
            </div>
        </div>
    </div>
  )
}

export default Footer