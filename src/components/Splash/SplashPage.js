import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SplashIntro from "./SplashComp/SplashIntro";
import CardContainer from "./SplashComp/CardContainer";

function SplashPage(){
    return (
        <div>
        <SplashIntro></SplashIntro>
        <CardContainer></CardContainer>
        </div>
    )
}

export default SplashPage