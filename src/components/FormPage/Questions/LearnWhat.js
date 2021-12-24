import React from "react";

const LearnWhat = (props) =>{

    const learnWhatChangeHandler = (event) => {
        props.onSaveLearningType(event.target.value);
    }

return (
<div>
<label>What are you learning?</label>
            <select name="what" id="what" onChange={learnWhatChangeHandler}>
                <option value="Online Course">Online Course</option>
                <option value="New Language">New Language</option>
                <option value="Play an Instrument">Play an Instrument</option>
                <option value="Other">Other</option>
            </select>
</div>
)
};

export default LearnWhat