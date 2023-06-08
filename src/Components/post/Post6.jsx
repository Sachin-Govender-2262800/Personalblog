import "./post.css"
import Azir from '../../Assets/MyOwnArt/Azir.png'

export default function Post5() {
  return (
    <div className ="post">
        

        <img 
        className = "postImg"
        src ={Azir} 
        alt=""/>
        
        <div className = "postInfo">
            <div className="postCats">
                <span className="postCat">Hobby</span>
                <span className="postCat">Art</span>
            </div>
            <span className="postTitle">My Own Art</span>
            <hr/>
            
        </div>
        <p className = "postDescription">
        This is a page that is filled with all the Art works I have made in my free time. 
        
             </p>
    </div>
  )
}
