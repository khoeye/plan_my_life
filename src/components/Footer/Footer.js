import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer(){

    return(
    <div className="navbar bottom acLight bg-light">
      <p>
        <a className="btn fs-5 text-dark" data-bs-toggle="collapse" href="#collapse" role="button" aria-expanded="false"
          aria-controls="collapse">
          Contact Me
        </a>
      </p>
      <div className="collapse" id="collapse">
        <div className="card card-body">
          <p>
            Hi! I'm Kyle 👋 Do you have questions about this tool, suggestions for new items, or any other requests.
            Feel free to contact me via email at <a href="mailto:kyle.hoeye@gmail.com">kyle.hoeye@gmail.com.</a></p>
        </div>
      </div>
    </div>
    )
    
}

export default Footer