import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Card3(){
    return (

        <div className="card bg-light">
        <div className="card-body text-center">
          <h1 className="card-title">Go to the Gym</h1>
          <p className="card-text fs-5">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
            <Link to='/Form'>Check it out</Link> 
        </div>
      </div>
    )
}

export default Card3