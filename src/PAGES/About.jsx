import React from 'react'
import Footer from '../HeadFoot/Footer'
import Headers from '../HeadFoot/Headers'


function About() {
  return (
    <>
    <center> <Headers/>
       <div className='about-blog'>
    </div>
    <div className='about-content'>
        <h1>I LEFT MY HEART IN THE MOUNTAINS</h1><br/>
        <p>I’m a self-professed mountain girl/mountain lover/ mountain climber. Except that here’s the thing: I don’t even live in the mountains – not even close!</p><br/><br/>
        <p>Years ago I traded in my mountain lifestyle for a new and exciting opportunity on the other side of the country – and I wouldn’t change that decision for the world! But I must confess what I can’t shake…the mountains stole my heart. Here’s why:</p>
    </div>
    <div className='about-blog1'>
    </div>
    <div className='about-content'>
        <h1>STORIES OF TRAVELS</h1><br/>
        <p>"In the heart of each journey, there lies a tale of self-discovery and endless wonder."</p><br/>
        <p>"Every sunset witnessed abroad becomes a timeless memory painted on the canvas of my soul."</p><br/>
        <p>"Traveling taught me that the world is vast, but our shared humanity is even vaster."</p><br/>
    </div>

    <div className='contents'>
        <p className='trip-word'>Find some inspiration for your next big<br/> getaway</p>
        <p><br/>  
        Embark on an adventure across the UK, find a soul-satisfying road trip,<br/> or visit a budget-friendly destination in 2024.
        </p>
        </div>
      <div className='container'>
       <div className='card-blog'>     
             <div className='card-11'>  
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9LVpbhLCISYwne6-cqUPAvQAZhzS9a_3U7g&s" alt="" style={{backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '500px',
  borderRadius:'20px' 
  }} /> 
  <p >1 June 2024</p>
  <h3 >14 Best Wild Swimming Locations In The Lake District</h3>
        </div><br/>
            
        <div className='card-22'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzMycIP3oLbm4__MH3USytTcnpl3xcWiU2v2V9_XV0Vy3OGo_qR79AM-2-abBN5h7OflE&usqp=CAU" alt="" style={{backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '500px',
  borderRadius:'20px' 
  }} /> 
    <p >1 June 2024</p>
  <h3 >14 Best Wild Swimming Locations In The Lake District</h3>
        </div>
        <div className='card-33'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNN9yYHHXVcHUXlW5_kujRaYb_nqUj6Wl82Q&s" alt="" style={{backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '500px' ,
  borderRadius:'20px'
  }} /> 
    <p >31 May 2024</p>
  <h3 >14 Best Wild Swimming Locations In The Lake District</h3>
        </div>
        <div className='card-44' >
        <img src="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/tawang-march.jpg" alt="" style={{backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '500px',
  borderRadius:'20px'
  }} /> 
    <p>17 May 2024</p>
  <h3 >14 Best Wild Swimming Locations In The Lake District</h3>
        </div>
        </div>

      </div><br/>
   <Footer/>
      </center>

    </>
  )
}

export default About
