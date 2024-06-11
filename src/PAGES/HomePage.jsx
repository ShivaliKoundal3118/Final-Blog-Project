import React from 'react'
import Headers from '../HeadFoot/Headers'
import Footer from '../HeadFoot/Footer'
import { useNavigate } from 'react-router';

function HomePage() {
  const navigate=useNavigate()
  const handleButton=()=>{
    // dispatch(addblog())
    navigate('/blogs')
  }
  return (
    <center>
      <Headers/>
        <div className='home-page'>
  
  <div className='header'>
    <div className='header-contents'>
      <h1>Traditional blog homepage</h1>
      <p>the pursuit of adventure</p>
      
      <button className="create-blog-btn" onClick={handleButton}>
            Create New Blog
          </button>
      
     
    </div>
  </div>
    
    </div>
    <div className='next-blog'>
    <div className='img-men'>
     <img src="	https://anywhereweroam.com/wp-content/uploads/2024/01/anywhereweroam-uai-1125x1125.webp" alt="" style={{width:'80%',margin:'40px'}} />
      </div>
      <div className='blog-content'>
        <h1>Welcome to Anywhere We Roam</h1>
        <p>Anywhere We Roam is a resource to help you travel better, featuring epic road trips, stunning hiking destinations, and our favourite cities.</p>
        <p>Paul & Mark.</p><br/>
        <div style={{display:'flex',gap:'60px'}}>
        <div>
        <h5 style={{textAlign:'left'}}>BLOGGER OF THE YEAR</h5>
        <p style={{textAlign:'left',fontSize:'12px'}}>British Guild of Travel Writers (2022)</p><br/>
        <h5 style={{textAlign:'left'}}>BLOGGER OF THE YEAR</h5>
        <p style={{textAlign:'left',fontSize:'12px'}}>Blogosphere Awards (2021)</p>
        </div>
        <div>
        <h5 style={{textAlign:'right'}}>BLOGGER OF THE YEAR</h5>
        <p style={{textAlign:'right',fontSize:'12px'}}>British Guild of Travel Writers (2022)</p><br/>
        <h5 style={{textAlign:'right'}}>BLOGGER OF THE YEAR</h5>
        <p style={{textAlign:'right',fontSize:'12px'}}>Blogosphere Awards (2021)</p>
        </div>
        </div>
      </div>
      </div>
      
        <div className='contents'>
        <p className='trip-word'>Find some inspiration for your next big<br/> getaway</p>
        <p><br/>  
        Embark on an adventure across the UK, find a soul-satisfying road trip,<br/> or visit a budget-friendly destination in 2024.
        </p>
        </div>
      <div className='container'>
        <div className='card-blog'>     
             <div className='card-1'>  
             <img src="https://anywhereweroam.com/wp-content/uploads/2020/09/wild-swimming-lake-district-1-uai-750x1000.jpg" alt="" style={{backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '500px',
  borderRadius:'20px' 
  }} /> 
  <p >1 June 2024</p>
  <h3 >14 Best Wild Swimming Locations In The Lake District</h3>
        </div><br/>
        
             
                
        <div className='card-2'>
        <img src="https://anywhereweroam.com/wp-content/uploads/2024/06/places-to-visit-andalucia--uai-750x1000.webp" alt="" style={{backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '500px',
  borderRadius:'20px' 
  }} /> 
    <p >1 June 2024</p>
  <h3 >14 Best Wild Swimming Locations In The Lake District</h3>
        </div>
        <div className='card-3'>
        <img src="https://anywhereweroam.com/wp-content/uploads/2023/05/italian-dolomites-guide-uai-750x1000.jpg" alt="" style={{backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '500px' ,
  borderRadius:'20px'
  }} /> 
    <p >31 May 2024</p>
  <h3 >14 Best Wild Swimming Locations In The Lake District</h3>
        </div>
        <div className='card-4' >
        <img src="https://anywhereweroam.com/wp-content/uploads/2024/05/places-to-visit-dolomites-uai-750x1000.webp" alt="" style={{backgroundSize: 'cover',
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
  )
}

export default HomePage
