import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className = "singlePost">
        <div className="singlePostWrapper">
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*-mGADAcbLmaQT-YK5N5LCQ.jpeg" alt="" className="singlePostImg" />

        <h1 className="singlePostTitle">
            Lorem ipsum dolor 

            <div className="singlePostEdit">

            <i className = "singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className = "singlePostIcon fa-solid fa-trash"></i>

            </div>
            </h1>
            <div className="singlePostInfo">
                <span className = "singlePostAuthor">Author: <b>Sachin</b> </span>
                <span className = "singlePostDate">1 hour ago </span>
            </div>
            <p className="singlePostDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur,
                 repudiandae, eum esse possimus dignissimos maiores doloremque ipsum voluptates
                  rerum perspiciatis dolorem quos ipsa deserunt! Nostrum vitae molestias impedit ipsa?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur,
                 repudiandae, eum esse possimus dignissimos maiores doloremque ipsum voluptates
                  rerum perspiciatis dolorem quos ipsa deserunt! Nostrum vitae molestias impedit ipsa?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur,
                 repudiandae, eum esse possimus dignissimos maiores doloremque ipsum voluptates
                  rerum perspiciatis dolorem quos ipsa deserunt! Nostrum vitae molestias impedit ipsa?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consequuntur,
                 repudiandae, eum esse possimus dignissimos maiores doloremque ipsum voluptates
                  rerum perspiciatis dolorem quos ipsa deserunt! Nostrum vitae molestias impedit ipsa?
                  </p>
        </div>
    </div>
  )
}

