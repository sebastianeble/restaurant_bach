import React from 'react'
import iconFb from './img/iconFb.jpg'
import iconPhone from './img/icon-phone.png'
import iconLocation from './img/icon-location.png'


function Footer() {

    return (
        <div>
            <div className="footer">
                <div className="hr"></div>
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
                    <div className="text">
                        <p><Link exact to='/anfahrt' className="link-element-footer" activeClassName="active-link-footer">Finden Sie zu uns mit<br /> Google Maps.</Link></p>
                    </div>
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
                <div className="hr"></div>
            </div>

            <div className="footer-dark-background"> 
                <div className="footer-dark-background-content">
                    <div className="opening-hours">
                        <div className="fo-section-two heading">
                            <p>Öffnungszeiten</p>
                        </div>
                        <div className="opening-content" style={{borderTop: "none"}}>
                            <p style={{paddingBottom: 0}}>Montag bis Freitag</p>
                            <p style={{paddingBottom: 0}}>11:00 bis 14:00 Uhr</p>
                        </div>
                        <div className="opening-content" style={{borderTop: "none"}}>
                            <p>Mittagstisch</p>
                            <p>11:30 bis 13:30 Uhr</p>
                        </div>
                        <div className="opening-content">
                            <p>Montag bis Donnerstag</p>
                            <p>17:30 Uhr bis 23:00 Uhr geöffnet</p>
                        </div>
                        <div className="opening-content">
                            <p>Freitag und Samstag</p>
                            <p>17:30 Uhr bis 1:00 Uhr geöffnet</p>
                        </div>
                        <div className="opening-content">
                            <p>Warme Küche</p>
                            <p>17:30 bis 21:00 Uhr</p>
                        </div>
                        <div className="opening-content">
                            <p>Sonntag</p>
                            <p>Ruhetag</p>
                        </div>
                        <div className="oeffnungszeiten-content">
                        </div>
                    </div>

                    <div className="footer-distance-one"></div>

                    <div className="fo-section-two inhaber">
                        <div className="heading">
                            <p>Inhaber</p>
                        </div>
                        <div className="inhaber-content">
                            <p>Monika und Layana Schenk GbR</p>
                            <p>Mühlstrasse 10</p>
                            <p>88085 Langenargen</p>
                        </div>
                    </div>

                    <div className="footer-distance-two"></div>

                    <div className="fo-section-two weiteres">
                        <div className="heading">
                            <p>Weiteres</p>
                        </div>
                        <div className="weiteres-content">
                            <p><a href='https://www.facebook.com/BACH-RESTAURANT-BAR-TERRASSE-213873771995762/'rel="noreferrer noopener" target="_blank">FACEBOOK</a></p>
                            <p><Link exact to='/anfahrt' className="link-element-footer" activeClassName="active-link-footer">ANFAHRT</Link></p>
                            <p><Link exact to='/jobs' className="link-element-footer" activeClassName="active-link-footer">JOBS</Link></p>
                            <p><Link exact to='/impressum#impressum' className="link-element-footer" activeClassName="active-link-footer">IMPRESSUM</Link></p>
                            <p className="weiteres-last"><Link exact to='/datenschutz#datenschutz' className="link-element-footer" activeClassName="active-link-footer">DATENSCHUTZ</NavLink></p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
     
        
    )
}

export default Footer