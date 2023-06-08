import React from 'react'
import Header from "../../../header/Header"
import SachDrawimg from '../../../../Assets/MyOwnArt/Sachin.png'

import "./contact.css"

export default function Contact() {

  

  return (
    
  
    <div className = "contact">
    
    <img 
        className = "contactcoverImg"
        src ="https://1.bp.blogspot.com/-iCnFX7eWVjs/XR9NQutHXcI/AAAAAAAAJ9k/ISWH3UXgJF8QJdsV6P9wh3agzOwOF_aYgCLcBGAs/s1600/cat-1285634_1920.png" 
        alt=""/>

<div className='contactTitles' >
    <h1>Contact Me</h1>
    <p>Here are the many ways I can be contacted.</p>
  </div>


<div class="contactcontainer">

  
  <div class="row">
    <div className="contactcolumn">

    <img 
    className="contactmeImg"
       src={SachDrawimg}
       alt = ""/>
    </div>

    <div className="contactcolumn">

    <table className = "contactDetails">
        
  <tr>
    <td>Email Address</td>
    <td>sachingovender5@gmail.com</td>
  </tr>
  <tr>
    <td>Phone Number</td>
    <td>0828066954</td>
  </tr>
  <tr>
    <td>Linkdin</td>
    <td>https://www.linkedin.com/in/sachin-govender-9a5b3b248/</td>
  </tr>
</table>


    </div>
  </div>
</div>
  
</div>
 
  )
}
