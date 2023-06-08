import React from 'react'
import "./postcontent.css"


import Azir from '../../Assets/MyOwnArt/Azir.png'
import rhi from '../../Assets/MyOwnArt/connor.png'
import Me from '../../Assets/MyOwnArt/Sachin.png'
import Dress from '../../Assets/MyOwnArt/dress.png'
import soul from '../../Assets/MyOwnArt/hate.png'
import game from '../../Assets/MyOwnArt/OlderBrother.png'
import asas from '../../Assets/MyOwnArt/sas.png'

export default function Postcontent6() {
  return (
    <div className contentofPost>
      

      <div class="header">
  <h2>Drawings For Fun</h2>
</div>

<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Dec 7, 2017</h5>
      <img className="headerImg"src={Azir} alt="" />
      <p>Some text..</p>
    </div>


    <div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <img className="headerImg"src={rhi} alt="" />
      <p>Some text..</p>
    </div>

<div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <img className="headerImg"src={Me} alt="" />
      <p>Some text..</p>
    </div>

    <div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <img className="headerImg"src={Dress} alt="" />
      <p>Some text..</p>
    </div>

    <div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <img className="headerImg"src={soul} alt="" />
      <p>Some text..</p>
    </div>

    <div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <img className="headerImg"src={game} alt="" />
      <p>Some text..</p>
    </div>

    <div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <img className="headerImg"src={asas} alt="" />
      <p>Some text..</p>
    </div>





  </div>
  <div class="rightcolumn">
    <div class="card">
      <h2>About Me</h2>
      <img className="headerImg"src={Azir} alt="" />
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    </div>
    <div class="card">
      <h3>Popular Post</h3>
      <img className="headerImg"src={rhi} alt="" />
      <img className="headerImg"src={Me} alt="" />
      <img className="headerImg"src={Dress} alt="" />
      <img className="headerImg"src={soul} alt="" />
      <img className="headerImg"src={game} alt="" />
      <img className="headerImg"src={asas} alt="" />
    </div>
   
  </div>
</div>

      
    </div>
  )
}
