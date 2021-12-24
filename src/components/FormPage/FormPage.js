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

export default FormPage