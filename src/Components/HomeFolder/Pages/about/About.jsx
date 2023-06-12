import React from 'react'
import Header from "../../../header/Header"
import "./about.css"
import Me from '../../../../Assets/MyOwnArt/Me.jpg'
import MeWall from '../../../../Assets/Websites/Me.jpg'

import {Link} from "react-router-dom"

export default function Contact() {
  return (
    
  
    <div className = "aboutMe">
    
      
    <img 
        className = "aboutcoverImg"
        src ={MeWall} 
        alt=""/>

<div className="aboutTitles">
    <h1>About Me</h1>
 
  </div>

  <div className="aboutrow">
  <div className="column">
    <div className="card">
      <img className = "aboutImg" src={Me} alt=""/>
      <div class="aboutcontainer">
        <h2>Sachin Govender</h2>
      
        <p class="title">WIT's Graduate with BA in Digital Arts with Honors</p>
        <p>I am a motivated and hardworking graduate from the University of Witwatersrand.
           My specialization is in Interactive Media and Animation, with an interest in Game Development, Web Design, Marketing
            and Quality Assurance.I have also obtained 3 Professional Certificates in Performance Testing and LoadRunner. 
            I enjoy learning new skills and seek to improve my skillset where possible .</p>
        
           
      </div>
    </div>
    <br/>
    <div className = "refrences">
    <h2>Website Refrences</h2>
  
    <p> <a href="https://fonts.google.com/specimen/Marcellus+SC?query=Arc"> Fonts acquired from </a></p>
        <p> <a href="https://fontawesome.com/account/personal-info?landing=kits"> Icons acquired from </a></p>
        <p> <a href="https://wallpaperaccess.com/johannesburg"> Joburg City Image acquired from</a></p>
        <p> <a href="https://4kwallpapers.com/black-dark/be-yourself-be-you-inspirational-quotes-dark-background-1486.html "> About Me Image acquired from</a></p>
        <p> <a href="https://www.wallpaperflare.com/person-s-right-hand-wallpaper-finger-search-magnifying-glass-wallpaper-zbyba"> Contact Image acquired from</a></p>
      
        </div>
  </div>


</div>
  
</div>


 
  )
}
