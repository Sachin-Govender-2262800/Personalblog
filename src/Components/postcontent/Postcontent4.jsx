import React from 'react'
import "./postcontent.css"

import carjol from '../../Assets/CommisionedWork/carjol.png'
import Skull from '../../Assets/CommisionedWork/DatGroupwork.png.png'
import Jay from '../../Assets/CommisionedWork/jayz.png'
import Owen from '../../Assets/CommisionedWork/owen2.png'



export default function Postcontent4() {
  return (
    <div className contentofPost>
      

      <div class="header">
  <h2>Commisioned Work</h2>
</div>

<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Dec 7, 2017</h5>
      <img className="headerImg"src={Skull} alt="" />
      <p>Some text..</p>
    </div>


    <div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <img className="headerImg"src={Jay} alt="" />
      <p>Some text..</p>
    </div>

 <div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <img className="headerImg"src={Owen} alt="" />
      <p>Some text..</p>
    </div>

    <div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <img className="headerImg"src={carjol} alt="" />
      <p>Some text..</p>
    </div>



  </div>
  <div class="rightcolumn">
    <div class="card">
      <h2>About Me</h2>
      <img className="headerImg"src={Skull} alt="" />
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    </div>
    <div class="card">
      <h3>Popular Post</h3>
      <img className="headerImg"src={Jay} alt="" />
      <img className="headerImg"src={Owen} alt="" />
      <img className="headerImg"src={carjol} alt="" />
    </div>
   
  </div>
</div>

      
    </div>
  )
}
