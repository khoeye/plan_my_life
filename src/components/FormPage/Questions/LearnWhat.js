import React from "react";

const LearnWhat = (props) =>{

    const learnWhatChangeHandler = (event) => {
        props.onSaveLearningType(event.target.value);
    }

return (
<div>
    <div className="container">
        <div className="row my-5">
    <h1 className="col">What are you learning?</h1>
    </div>
        <div className="row my-1">
                    <select className=" col form-select form-select-md mx-4" name="what" id="what" onChange={learnWhatChangeHandler}>
                        <option selected></option>
                        <option value="Online Course">Online Course</option>
                        <option value="New Language">New Language</option>
                        <option value="Play an Instrument">Play an Instrument</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
</div>
)
};

export default LearnWhat