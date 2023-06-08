import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className ="sidebar">

<div className = "sidebarItem">




        <div className="sidebarItem">
        <span className = "sidebarTitle">ABOUT ME</span>
        <img src = "https://st2.depositphotos.com/3758943/6040/i/450/depositphotos_60400957-stock-photo-the-man-in-the-office.jpg" alt =""></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nesciunt explicabo quas eveniet, quisquam aliquam, 
          modi quo sit dolore accusamus accusantium perspiciatis? Rerum non aut ducimus dolores aperiam? Sapiente, exercitationem.</p>
        </div>
        </div>

        <div className = "sidebarItem">
        <span className = "sidebarTitle">CATEGORIES</span>
        <ul className="sidebarlist">

          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Tech</li>

        </ul>

        </div>
        <div className="sidebarItem">
        <span className = "sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-instagram"></i>
        <i className="sidebarIcon fa-solid fa-phone"></i>
        <i className="sidebarIcon fa-solid fa-envelope"></i>
        <i className="sidebarIcon fa-brands fa-linkedin"></i>
        </div>
        </div>

        

      


    </div>
  )
}
