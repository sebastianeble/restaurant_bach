import React from 'react';
import teaser from './img/teaser.jpg'



function Home() {

   const date = new Date()
   const day = date.getDay()

   const wochentag = {
      1 : 'Montag',
      2 : 'Dienstag',
      3 : 'Mittwoch',
      4 : 'Donnerstag',
      5 : 'Freitag',
      6 : 'Samstag',
      0 : 'Sonntag'
   }

   return (
    <div>
      <div className="teaser">
        <img id="teaser-img" src={teaser} alt="teaser"/>
        <h1 id="teaser-text">Food & Drinks in Chiller Mood</h1>
      </div>
      <div className="dark-background">
        <div className="dark-background-placeholder-leftright"></div>
        <div className="dark-background-left">
          <h2>Werfen Sie einen Blick auf unsere <a href="/wochenkarte">Wochenkarte</a> und genießen Sie unseren Mittagstisch im Restaurant oder To-Go</h2>
          <p>Ein gemütliches Essen in Ihrer wohlverdienten Mittagspause in Ihrem Bach Bar & Restaurant mit Sommer-Terrasse</p>
          <div id="ec">
            <img id="no_ec" src={no_ec} alt="no-ec-image"/>
            <p id="ec_text">Leider ist bei uns keine EC-Kartenzahlung möglich</p>
          </div>
          
        </div>
          
        <div className="dark-background-placeholder-middle"></div>
          
        <div className="dark-background-right">
          <div className="home-essen">
            <div className="home-essen-section">
              <p>Heute: </p>
              <p className="preis">{wochentag[day]}, {date.toLocaleDateString()}</p>
            </div>
          </div>
            
        
          
          <div className="home-link-div">
            <div className="home-link">
              <Link to='/wochenkarte' className="home-link-link">zur Wochenkarte<i id="arrow-right" className="fa fa-arrow-right"></i></Link>
            </div>
          </div>
             
        </div>
        <div className="dark-background-placeholder-leftright"></div>   
     </div>
    </div>
  )
}

export default Home;
