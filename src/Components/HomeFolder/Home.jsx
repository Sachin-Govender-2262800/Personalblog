import Header from "../../Components/header/Header"

import Posts from "../../Components/Posts/Posts"
import Posts2 from "../../Components/Posts/Posts2"
import Posts3 from "../../Components/Posts/Posts3"
import Posts4 from "../../Components/Posts/Posts4"
import Posts5 from "../../Components/Posts/Posts5"
import Posts6 from "../../Components/Posts/Posts6"
import {Link} from "react-router-dom"



import "./home.css"

export default function Home() {
  return (
    <>
    <Header/>
    <div className = "home">
       
                <div className="bloglinks">
                <Link style={{textDecoration:"none",  color:"inherit"}} to ="/Postcontent1">      <Posts/></Link>
                <Link style={{textDecoration:"none",  color:"inherit"}} to ="/Postcontent2">      <Posts2/></Link>
                <Link style={{textDecoration:"none",  color:"inherit"}} to ="/Postcontent3">      <Posts3/></Link>
                </div>
<br></br>
<br></br>
<br></br>
<br></br>
                <div className="bloglinks2">
                <Link style={{textDecoration:"none",  color:"inherit"}} to ="/Postcontent4">      <Posts4/></Link>
                <Link style={{textDecoration:"none",  color:"inherit"}} to ="/Postcontent5">      <Posts5/></Link>
                <Link style={{textDecoration:"none",  color:"inherit"}} to ="/Postcontent6">      <Posts6/></Link>
                </div>
               
               
        
       
    </div>
    <div className="refrences">
      
    </div>
    
    </>
  )
}
