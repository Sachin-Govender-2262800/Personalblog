import React from 'react'
import {Link} from "react-router-dom"
import "./topbar.css"
import SachDrawimg from '../../Assets/MyOwnArt/Sachin.png'

export default function TopBar() {
  return (
    <div className="top"> 
        <div className ="topLeft">
             <Link to="https://www.instagram.com/assachins_creed/">
        <i className="topIcon fa-brands fa-instagram"></i>
        </Link>

        <a href = "tel:0828066954">
        <i className="topIcon fa-solid fa-phone"></i>
        </a>
        < a href = "mailto: sachingovender5@gmail.com">
        <i className="topIcon fa-solid fa-envelope"></i>
        </a>
        <Link to="https://www.linkedin.com/in/sachin-govender-9a5b3b248/">
        <i className="topIcon fa-brands fa-linkedin"></i>
        </Link>
        </div>

        <div className ="topCenter">
            <ul className="topList">
                <li className = "topListItem">
                    <Link style={{textDecoration:"none",  color:"inherit"}} to ="/">HOME</Link>
                </li>





                <li className = "topListItem">
                <Link style={{textDecoration:"none",  color:"inherit"}} to ="/About">ABOUT</Link>
                </li>

                <li className = "topListItem">
                <Link style={{textDecoration:"none",  color:"inherit"}} to ="/Contact">CONTACT</Link>
                </li>

                

                
            </ul>
        </div>
        
        <div className ="topRight">
          
            <img className = "TopImage"
             src ={SachDrawimg} alt= ""/>
       

        
        </div>
        
        </div>
  )
}
