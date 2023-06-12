import React from 'react'
import "./postcontent.css"


import Azir from '../../Assets/MyOwnArt/Azir.png'
import rhi from '../../Assets/MyOwnArt/connor.png'
import Me from '../../Assets/MyOwnArt/Sachin.png'
import Dress from '../../Assets/MyOwnArt/dress.png'
import soul from '../../Assets/MyOwnArt/hate.png'
import game from '../../Assets/MyOwnArt/OlderBrother.png'
import asas from '../../Assets/MyOwnArt/sas.png'
import Night from '../../Assets/MyOwnArt/Nightwing.png'

export default function Postcontent6() {
  return (
    <div className contentofPost>
      

      <div class="header">
  <h2>Drawings For Fun</h2>
</div>

<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>Leauge of Legends Inspired Drawing</h2>   
      <img className="ImgContent"src={Azir} alt="" />
      <p>This was a wallpaper I had created based of the video game League of Legends.</p>
    </div>


    <div class="card">
      <h2>Rhino Drawing</h2>
      <img className="ImgContent"src={rhi} alt="" />
      <p>This was the first digital drawing I had created and was of a rhino in the Savanah.</p>
    </div>

<div class="card">
      <h2>A Drawing of Me</h2> 
      <img className="ImgContent"src={Me} alt="" />
      <p>This is a portrait I had created of myself and can be seen used within the Website already as well as being my profile picture on my Instagram.</p>
    </div>

    <div class="card">
      <h2>A Drawing of Nightwing</h2>
      <img className="ImgContent"src={Night} alt="" />
      <p>This is a portrait I had done of the DC Superhero known as Night Wing.</p>
    </div>

    <div class="card">
      <h2>A Dress</h2>
      <img className="ImgContent"src={Dress} alt="" />
      <p>This is a drawing of a dress my friend had asked me to draw.</p>
    </div>

    <div class="card">
      <h2>From Software Drawing</h2>
      <img className="ImgContent"src={soul} alt="" />
      <p>This is a drawing that takes inspiration from the developers known as From Software and takes a character from their games 
        Dark Souls 1, 2 and 3 as well as their new game is known as Elden Ring. These are silhouettesof the characters.
      </p>
    </div>

    <div class="card">
      <h2>Character Sprite</h2>
      <img className="ImgContent"src={game} alt="" />
      <p>This is a Character Sprite that I had created for a potential game idea.</p>
    </div>

    <div class="card">
      <h2>Assassins Creed Wallpaper</h2>
      <img className="ImgContent"src={asas} alt="" />
      <p>This was a wallpaper based of the game known as Assassins Creed.</p>
    </div>





  </div>
  <div class="rightcolumn">
    <div class="card">
 
      <img className="headerImg"src={Azir} alt="" />
      <p>All the drawings here were done with the intention of improving my art and here are just a few of the drawings that I could find, that weren't involved in a project.</p>
    </div>
    <div class="card">
      <h3>Popular Post</h3>
      <img className="headerImg"src={rhi} alt="" />
      <img className="headerImg"src={Me} alt="" />
      <img className="headerImg"src={Night} alt="" />
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
