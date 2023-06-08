import React from 'react'
import "./postcontent.css"


import fearno from '../../Assets/TattooDrawings/NoFear.png'
import jojo from '../../Assets/TattooDrawings/jo.png'
import bcup from '../../Assets/TattooDrawings/buttercup.png'
import sun from '../../Assets/TattooDrawings/sun.png'
import Koi from '../../Assets/TattooDrawings/TatKoi.png'


export default function Postcontent5() {
  return (
    <div className contentofPost>
      

      <div class="header">
  <h2>Tattoo Designs</h2>
</div>

<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Dec 7, 2017</h5>
      <img className="headerImg"src={fearno} alt="" />
      <p>Some text..</p>
    </div>


    <div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <img className="headerImg"src={jojo} alt="" />
      <p>Some text..</p>
    </div>

 <div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <img className="headerImg"src={bcup} alt="" />
      <p>Some text..</p>
    </div>

    <div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <img className="headerImg"src={sun} alt="" />
      <p>Some text..</p>
    </div>

    <div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <img className="headerImg"src={Koi} alt="" />
      <p>Some text..</p>
    </div>


  </div>
  <div class="rightcolumn">
    <div class="card">
      <h2>About Me</h2>
      <img className="headerImg"src={fearno} alt="" />
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    </div>
    <div class="card">
      <h3>Popular Post</h3>
      <img className="headerImg"src={jojo} alt="" />
      <img className="headerImg"src={bcup} alt="" />
      <img className="headerImg"src={sun} alt="" />
      <img className="headerImg"src={Koi} alt="" />
    </div>
  
  </div>
</div>

      
    </div>
  )
}
