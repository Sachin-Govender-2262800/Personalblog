import "./header.css"
import SA from '../../Assets/Websites/SA.PNG'

export default function Header() {
  return (
    <div className = "header">
        <div className="headerTitles">
          <span className="headerTitleSm">Sachin Govender</span>
          <span className="headerTitleLg">My Personal Website</span>
          

          </div>
          <img className="headerImg"src={SA} alt="" />
    </div>
  )
}
