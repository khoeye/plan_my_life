import React from "react";

const StartDate= (props) =>{

    const startDateHandler = (event) =>{
        props.onSaveStartDate(event.target.value)
    }

return (
    <div>
        <p>When would you like this event to start?</p>
        <label for="startDate">Start Date:</label>
        <input type="date" id="startDate" name="startDate" onChange={startDateHandler}></input>   
    </div>
)
}

export default StartDate