import React from 'react'
import {Link} from "react-router-dom"
import "./postcontent.css"

import First from '../../Assets/Websites/First.PNG'
import First2 from '../../Assets/Websites/First2.PNG'
import Second from '../../Assets/Websites/Website.PNG'
import Second2 from '../../Assets/Websites/2nd.PNG'
import Third from '../../Assets/Websites/3rdDraft.PNG'
import Third2 from '../../Assets/Websites/3rdDraft2.PNG'
import Third3 from '../../Assets/Websites/3rd.PNG'

export default function Postcontent3() {
  return (
    <div className contentofPost>
      

      <div class="header">
  <h2>Websites Designed</h2>
</div>

<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>Personal Blog on a fictional character</h2>
      <h5>Created on the 4th of July 2021</h5>
      <img className="headerImg"src={First} alt="" />
      <Link to="https://sachin-govender-2262800.github.io/WorkingAssignment1/" >https://sachin-govender-2262800.github.io/WorkingAssignment1/</Link>
      <p>This website was designed to be a personal blog about an Assassin who aimed to teach her readers about the Internet and Internet Safety. The main point of the website
        was to discuss certain topics set by the lecturers and to talk about these topics as if we were the character that we had created. </p>
    </div>




    <div class="card">
      <h2>Video Game Stat Website</h2>
      <h5>Created on the 6th of December 2021</h5>
      <img className="headerImg"src={Second} alt="" />
      <Link to="https://sachin-govender-2262800.github.io/WSOA3029A-2262800/" >https://sachin-govender-2262800.github.io/WSOA3029A-2262800/</Link>
      <p>We were tasked with creating a website that would make use of different APIs that would display different stats, using these stats we were then tasked with 
        creating different graphs. I decided to use information from different Video Game Esport Communities in order to create different graphs. Unfortunately due to 
        the APIs being changed or removed not all the graphs have remained working as they had once done. 
      </p>
    </div>



    <div class="card">
      <h2>Creating Art Through a Website</h2>
      <h5>First created on the 22nd of April 2022, Changed on the 27th of June 2022</h5>
      <img className="headerImg"src={Third} alt="" />
      <Link to="https://sachin-govender-2262800.github.io/Assignment1/#/" >https://sachin-govender-2262800.github.io/Assignment1/#/</Link>
      <img className="headerImg"src={Third2} alt="" />
      <Link to=" https://sachin-govender-2262800.github.io/WSOA3018A_2262800/" > https://sachin-govender-2262800.github.io/WSOA3018A_2262800/</Link>
      <p>This was the last website I created. We were tasked with creating art through the web and including it as either being a part of the entire website itself.
        The first iteration of this website was to be a gaming and Movie website that would provide information about them while creating 
        art through the web. I then scraped the website and decided to create a website dedicated to animals taking inspiration from artist JJSmooth44 and his series 
        where he takes images of animals and limits the number of pixels added to the image based on how many animals are still around. My website took this and tasked the 
        user with drawing an image based on the animal that the particular page was inspired about. Meaning some pages were almost impossible to use to show just how drastic 
        the situation was with that animal. The blogs were designed to talk about art through the internet. Unfortunately, however, this website was not finished and the end result 
        of the website could not be posted in time on Git Hub due to some error that could not be resolved in time and is yet to be resolved.
      </p>
    </div>

    
  </div>
  <div class="rightcolumn">
    <div class="card">
     
      <img className="headerImg"src={First2} alt="" />
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    </div>
    <div class="card">
      <h3>Popular Post</h3>
      <img className="headerImg"src={Second2} alt="" />
      <img className="headerImg"src={Third3} alt="" />
    
    </div>
    
  </div>
</div>

      
    </div>
  )
}
