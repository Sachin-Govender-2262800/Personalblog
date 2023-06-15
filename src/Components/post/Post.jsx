import "./post.css"
import WithYou from '../../Assets/Animations/wothyou2.PNG'

export default function Post() {
  return (
    <div className ="post">
        

        <img 
        className = "postImg"
        src ={WithYou} 
        alt=""/>
        
        <div className = "postInfo">
            <div className="postCats">
                <span className="postCat">Animation</span>
                <span className="postCat">Art</span>
            </div>
            <span className="postTitle">Animation Work</span>
            <hr/>
           
        </div>
        <p className = "postDescription">
        This page showcases a compilation of the animations I have crafted during my tenure as a student at Wits University.
             </p>
    </div>
  )
}
