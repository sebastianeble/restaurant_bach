import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import iconFb from './img/icon-fb.png'
import iconPhone from './img/icon-phone.png'
import iconLocation from './img/icon-location.png'

import './style/footer.css'

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="hr-footer"></div>
                <div className="footer-section-one">                
                    <div className="icon">
                        <img className="icon" src={iconFb} alt="facebook-icon" />
                    </div>
                    <div className="footer-section-one-element-distance"></div>
                    <div className="text">
                        <p><a href='https://www.facebook.com/BACH-RESTAURANT-BAR-TERRASSE-213873771995762/' rel="noreferrer noopener" target="_blank" className="link-element-footer">Besuchen Sie uns auf<br /> Facebook.</a></p>   
                    </div>
                    <div className="footer-section-one-element-one"></div>
                    <div className="icon">
                        <img className="icon" src={iconLocation} alt="location icon" />
                    </div>
                    <div className="footer-section-one-element-distance"></div>
                    <Router>
                        <div className="text">
                            <p><Link className="link-element-footer" activeClassName="active-link-footer">Finden Sie zu uns mit<br /> Google Maps.</Link></p>
                        </div>
                    </Router>
                    <div className="footer-section-one-element-two"></div>
                    <div className="icon">
                        <img className="icon" src={iconPhone} alt="phone-icon" />
                    </div> 
                    <div className="footer-section-one-element-distance"></div>
                    <div className="text">
                        <p>Für Fragen und Reservierungen:<br /> 07543 499383</p>
                    </div>
                    <div className="footer-section-one-element"></div>
                </div>                 
                <div className="hr-footer"></div>
            </div>
        </div>
    )
}

export default Footer