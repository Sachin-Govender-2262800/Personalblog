import "./post.css"
import Web from '../../Assets/Websites/Website.PNG'

export default function Post3() {
  return (
    <div className ="post">
        

        <img 
        className = "postImg"
        src ={Web} 
        alt=""/>
        
        <div className = "postInfo">
            <div className="postCats">
                <span className="postCat">Interactive Media</span>
                <span className="postCat">Web Design</span>
            </div>
            <span className="postTitle">Websites Made</span>
            <hr/>
        
        </div>
        <p className = "postDescription">
        This page presents an array of websites that I have crafted during my tenure as a student at Wits University.
             </p>
    </div>
  )
}
