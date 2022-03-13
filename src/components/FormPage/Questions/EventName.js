import React from "react";

const EventName = (props) =>{

const eventNameChangeHandler = (event) =>{
    props.onSaveEventName(event.target.value)
};
return (
    <div className="contatiner">
        <div className="row my-5">
            <h1 className="col">What should we call this event on your calendar?</h1>
        </div>
        <div className="row">
            <input className="col-6 mx-auto" type="text" id="title" name="title" onChange={eventNameChangeHandler}/>
            </div>
    </div>
        )
};

export default EventName