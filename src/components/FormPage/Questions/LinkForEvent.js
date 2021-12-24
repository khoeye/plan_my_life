import React from "react";

const LinkForEvent= (props) =>{

    const linkChangeHandler = (event) =>{
        props.onSaveLinkForEvent(event.target.value)
    }

return (
    <div>
    <label>Is their a website we should direct you to on thecalendar?</label>
    <input type="url" id="url" name="url" onChange={linkChangeHandler}/>
    </div>
)
};

export default LinkForEvent