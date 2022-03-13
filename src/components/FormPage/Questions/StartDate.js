import React from "react";

const StartDate= (props) =>{

    const startDateHandler = (event) =>{
        props.onSaveStartDate(event.target.value)
    }

return (
    <div className="container">
        <div className="row">
                    <h1 className="col my-5">When would you like this event to start?</h1>
        </div>
        <div className="row">
        <input className="col-3 mx-auto" type="date" id="startDate" name="startDate" onChange={startDateHandler}></input>   

        </div>
    </div>
)
}

export default StartDate