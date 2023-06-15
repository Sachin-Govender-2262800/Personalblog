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
<div class="aboutpage">
    
  
    <p>All the drawings presented on this page were created using the open-source drawing software called Krita. 
      Among them are commissioned artworks for others, as well as personal tattoo ideas that I intend to have inked on my own body.</p>
  </div>
    <div class="card">
      <h2>No Fear No More</h2>
   
      <img className="ImgContent"src={fearno} alt="" />
      <p>This tattoo was designed for a friend who wanted the soundwaves to one of his favourite songs known as 'No Fear No More' by Madeon</p>
    </div>


    <div class="card">
      <h2>Finger Tattoo</h2>
     
      <img className="ImgContent"src={jojo} alt="" />
      <p>This was a tattoo where I was asked to design a finger tattoo for someone who wanted their star sign, an eye and a moon in the form of an arrow.</p>
    </div>

 <div class="card">
      <h2>Cat Tattoo</h2>
      
      <img className="ImgContent"src={bcup} alt="" />
      <p>This is a tattoo that I had designed for myself and is of my cat who passed away. It takes inspiration from Michelangelo's Creation of Adam painting.</p>
    </div>


    <div class="card">
      <h2>Video Game Tattoo</h2>
   
      <img className="ImgContent"src={sun} alt="" />
      <p>This is a tattoo that I had designed for myself and is inspired from the game known as Dark Souls.</p>
    </div>

    <div class="card">
      <h2>Tattoo Group</h2>
     
      <img className="ImgContent"src={Koi} alt="" />
      <p>These are 3 tattoo ideas that I would like to get for myself. The one on the far left is a sleeping Godzilla, the middle is a tattoo taking inspiration 
        from the video game Sekiro and the one on the right is the character known as Chowder from the cartoon known as Chowder.
      </p>
    </div>


  </div>
  
  
    
  
  
</div>

      
  
  )
}
