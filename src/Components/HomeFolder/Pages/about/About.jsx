import React from 'react'
import Header from "../../../header/Header"
import "./about.css"
import Me from '../../../../Assets/MyOwnArt/Me.jpg'

import {Link} from "react-router-dom"

export default function Contact() {
  return (
    
  
    <div className = "aboutMe">
    
      
    <img 
        className = "aboutcoverImg"
        src ="https://1.bp.blogspot.com/-iCnFX7eWVjs/XR9NQutHXcI/AAAAAAAAJ9k/ISWH3UXgJF8QJdsV6P9wh3agzOwOF_aYgCLcBGAs/s1600/cat-1285634_1920.png" 
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
        <br/>
        <p>I am a motivated and hardworking graduate from the University of Witwatersrand.
           My specialization is in Interactive Media and Animation, with an interest in Game Development, Web Design, Marketing
            and Quality Assurance.I have also obtained 3 Professional Certificates in Performance Testing and LoadRunner. I enjoy learning new skills and seek to improve my skillset where possible .</p>
        
        <button  class="aboutbutton" >Contact</button>
      </div>
    </div>
  </div>


</div>
  
</div>


 
  )
}
