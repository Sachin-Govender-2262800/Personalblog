import "./post.css"
import Carjol from '../../Assets/CommisionedWork/carjol.png'

export default function Post4() {
  return (
    <div className ="post">
        

        <img 
        className = "postImg"
        src ={Carjol}
        alt=""/>
        
        <div className = "postInfo">
            <div className="postCats">
                <span className="postCat">Commissioned</span>
                <span className="postCat">Art</span>
            </div>
            <span className="postTitle">Commissioned Work</span>
            <hr/>
            
        </div>
        <p className = "postDescription">
        This page showcases a selection of commissioned works that I have created.
             </p>
    </div>
  )
}
