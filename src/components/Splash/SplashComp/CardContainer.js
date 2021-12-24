import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

function CardContainer(){
    return (
        <div className="container-fluid bg-light my-3">
        <div className="row justify-content-evenly">
          <div className="col-lg m-4">
            <Card1></Card1>
          </div>
          <div className="col-lg m-4">
            <Card2></Card2>
          </div>
          <div className="col-lg m-4">
            <Card3></Card3>
          </div>
        </div>
      </div>
    )
}

export default CardContainer