import React from "react";

const EventName = (props) =>{

const eventNameChangeHandler = (event) =>{
    props.onSaveEventName(event.target.value)
};
return (
    <div>
        <label>What should we call this event on your calendar?</label>
            <input type="text" id="title" name="title" onChange={eventNameChangeHandler}/>
    </div>
        )
};

export default EventName