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

      
     

     
      
      <p>Some text..</p>
    </div>




    <div class="card">
      <h2>Video Game Stat Website</h2>
      <h5>Created on the 6th of December 2021</h5>
      <img className="headerImg"src={Second} alt="" />
      <Link to="https://sachin-govender-2262800.github.io/WSOA3029A-2262800/" >https://sachin-govender-2262800.github.io/WSOA3029A-2262800/</Link>
      <p>Some text..</p>
    </div>



    <div class="card">
      <h2>Creating Art Through a Website</h2>
      <h5>First created on the 22nd of April 2022, Changed on the 27th of June 2022</h5>
      <img className="headerImg"src={Third} alt="" />
      <Link to="https://sachin-govender-2262800.github.io/Assignment1/#/" >https://sachin-govender-2262800.github.io/Assignment1/#/</Link>
      <img className="headerImg"src={Third2} alt="" />
      <Link to=" https://sachin-govender-2262800.github.io/WSOA3018A_2262800/" > https://sachin-govender-2262800.github.io/WSOA3018A_2262800/</Link>
      <p>Some text..</p>
    </div>

    
  </div>
  <div class="rightcolumn">
    <div class="card">
      <h2>About Me</h2>
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
