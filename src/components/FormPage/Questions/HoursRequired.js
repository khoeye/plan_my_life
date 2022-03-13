import React from "react";

const HoursRequired = (props) =>{

    const hoursRequiredChangeHandler = (event) =>{
        props.onSaveHoursRequired(event.target.value)
    }

return (
<div className="container">
    <div className="row">
        <h1 className="col my-5">How many hours will it take to complete this?</h1>
    </div>
    <div className="row">
            <input className="col-1 mx-auto" type="number" id="totalTime" name="totalTime" onChange={hoursRequiredChangeHandler}/>
    </div>
</div>
)
};

export default HoursRequired