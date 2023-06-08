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
        This is a page that is filled with all the Game works that I have created while studying digital arts at Wits. 
             </p>
    </div>
  )
}
