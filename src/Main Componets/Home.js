import React from 'react'
import logo2 from '../images/logo2.webp'
import user from '../images/user.png'

import '../App.css'
function Home() {
  return (
    <div>
        <MenuBar/>
        <div className='Content-box'>
            <h2>Dynamic Web Services</h2>
                <p>
                    Get premium websites at a pocket friendly price with 
                    with great discounts on hosting plans.
                </p>
        
            <a href='#'>Learn More</a> 
        </div>
        <ImageBox />
    </div>
  )
}
const MenuBar = ()=>{
    return(
        <div className='Nav-bar'>
              <img className='logo' src={logo2} alt=''/>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Services</a></li>
                <li><a href='#'>About Me</a></li>
                <li><a href='#'>Contact</a></li>                  
            </ul>      
            
        </div>
    )
}
const ImageBox = () =>{
    return(
        <div className='image-box'>
            <img src={user} alt=''/>
        </div>
    )
}


export default Home
