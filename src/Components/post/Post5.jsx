import "./post.css"
import Koi from '../../Assets/TattooDrawings/TatKoi.png'

export default function Post5() {
  return (
    <div className ="post">
        

        <img 
        className = "postImg"
        src ={Koi} 
        alt=""/>
        
        <div className = "postInfo">
            <div className="postCats">
                <span className="postCat">Tattoo</span>
                <span className="postCat">Art</span>
            </div>
            <span className="postTitle">Tattoo Drawings</span>
            <hr/>
        
        </div>
        <p className = "postDescription">
        This is a page that is filled with all the Tattoo designs I have made. 
             </p>
    </div>
  )
}
