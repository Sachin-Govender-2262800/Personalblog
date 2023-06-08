import "./settings.css"
import Sidebar from "../../../sidebar/Sidebar"

export default function Settings() {
  return (
    <div className = "settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label >Profile Picture</label>
                <div className="settingsProfilePicture">
                    <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYdkkOqEL8hCS81GnZaNkRCD5opvOO5u2tzaT0NPAWFqS2gRHsOx4nY5McNsQyirVKwc&usqp=CAU" 
                    alt = ""/>
                    <label htmlFor="fieInput">
                    <i className = "settingsPPIcon fa-solid fa-user"></i>
                    </label>
                    <input type="file" id ="fileInput"/>
                </div>
                <label>Username</label>
                <input type="text" placeholder = "Sachin" />

                <label>Email</label>
                <input type="text" placeholder = "sachingovender5@gmail.com" />

                <label>Password</label>
                <input type="text" />
                <button className="settingsSubmit">Update</button>
            </form>

        </div>
        <Sidebar/>
    </div>
  )
}
