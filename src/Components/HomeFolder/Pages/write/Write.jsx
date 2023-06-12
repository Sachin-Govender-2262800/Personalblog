import "./write.css"


export default function write() {
  return (
    <div className = "write">
      <img className = "writeImg" src = "https://www.nausicaa.fr/content/uploads/2022/05/Grand-large-1280.jpg" alt = "" />

        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className = "writeIcon fa-solid fa-plus"></i>
            </label>
            <input type = "file" id="fileInput" style = {{display: "none"}}/>
            <input type = "text" placeholder ="Title" className ="writeInput" autoFocus ={true}/>
          </div>
          <div className="writeFormGroup">
            <textarea placeholder = "What project are you working on?" type = "text" className = "writeInput writeText">

            </textarea>

          </div>
          <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
