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
<div class="aboutpage">


      <p>These drawings were specially commissioned by friends, who entrusted me with their creation in exchange for financial compensation and exposure.
         They were created using the open-source drawing software known as Krita, employing digital techniques.
      </p>
    </div>
    
    <div class="card">
      <h2>Animal Skull</h2>
     
      <img className="ImgContent"src={Skull} alt="" />
      <p>This drawing is an animal skull that a Friend had asked me to draw for them in order to use in their University work for their assignment. </p>
    </div>


    <div class="card">
      <h2>Buisness Logo</h2>
    
      <img className="ImgContent"src={Jay} alt="" />
      <p>I was asked by a psychology student to create a logo for a potential business they wanted to start within the psychology field.  </p>
    </div>

 <div class="card">
      <h2>Load-shedding Drawing</h2>

      <img className="ImgContent"src={Owen} alt="" />
      <p>A friend in the UK had commissioned a piece that would be about Loadshedding in South Africa. The task was to show someone in a load-shedding environment 
        thinking about all the negatives of load-shedding such as the struggles of business and the economy, crime and traffic.
      </p>
    </div>

    <div class="card">
      <h2>Social Media Profile</h2>
 
      <img className="ImgContent"src={carjol} alt="" />
      <p>I was asked to create a profile photo for someone's Instagram and Tiktok accounts. They wanted an image of a girl wearing an F1 helmet who wore the Liverpool Uniform.
        Later the car and shoes were added and they liked it so much they decided to go with it.
      </p>
    </div>



  </div>
  
    
   
 
</div>

      
 
  )
}
