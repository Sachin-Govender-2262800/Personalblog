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
        This is a page that is filled with all the Websites that I created while studying Interactive Media at Wits. 
             </p>
    </div>
  )
}
