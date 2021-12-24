import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function SplashIntro(){
    return (
        <div>
  <div className="container primary my-3">
    <div className="row">
      <div className="col ">
        <p className="text-muted text-center fs-2 m-3">Plan my life provides an easy plug an play system to plan out some of the more
          important aspects of your life.</p>
        </div>
      </div>
          <div className="row">
            <div className="col">
          <p className=" text-center text-muted fs-2 my-3">Bellow is a list of tools to choose from each with its own special use.
        </p>
        </div>
      </div>
        <div className="row m-1">
          <div className="col m-1">
        <div className="text-dark text-center fs-1 my-3">
          Choose your tool
        </div>
      </div>
    </div>
</div>
  </div>
    )
}

export default SplashIntro