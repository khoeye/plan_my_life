import * as React from "react";
import FormIntro from "./FormComps/FormIntro";
import QBank from "./FormComps/QBank";

function FormPage(props){


const submitUserDataHandler = (enteredUserData) => {
    return (
        props.onAppUserData(enteredUserData)
    );
};



    return (
    <div>
        <FormIntro/>
        <QBank onSubmitUserData={submitUserDataHandler}/>
    </div>
    )
}

//This formula allows me to invoke functions from the conosole directly despite it being nested in react. Make sure that this removed before pushing 
// function bradTest (){
//     console.log('brad is awesome')
// }
// window.bradTest=bradTest;

export default FormPage