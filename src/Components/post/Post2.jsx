import "./post.css"
import TwinShoot from '../../Assets/Games/twinshooter.PNG'

export default function Post2() {
  return (
    <div className ="post">
        

        <img 
        className = "postImg"
        src ={TwinShoot} 
        alt=""/>
        
        <div className = "postInfo">
            <div className="postCats">
                <span className="postCat">Games</span>
                <span className="postCat">Unity</span>
            </div>
            <span className="postTitle">Games  Made</span>
            <hr/>
           
        </div>
        <p className = "postDescription">
        This page encompasses a collection of the game projects I have developed during my academic pursuit of digital arts at Wits University.
             </p>
    </div>
  )
}
