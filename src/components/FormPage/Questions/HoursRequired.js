import React from "react";

const HoursRequired = (props) =>{

    const hoursRequiredChangeHandler = (event) =>{
        props.onSaveHoursRequired(event.target.value)
    }

return (
<div>
<label>How many hours will it take to complete this?</label>
    <input type="number" id="totalTime" name="totalTime" onChange={hoursRequiredChangeHandler}/>
</div>
)
};

export default HoursRequired