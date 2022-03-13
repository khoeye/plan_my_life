import React, {useState, useEffect} from "react";
import StartTimeQuestions from "./StartTimeQuestion";
import EndTimeQuestions from "./EndTimeQuestions";


const TimeFrame = (props) =>{

    
    const [timeInput, setTimeInput] = useState({
        startTimes:{},
        endTimes:{}
    })

    useEffect(() => {
        props.onSaveTimeFrameHandler(timeInput);
    }, [timeInput]
    );

    const saveStartTimeHandler = (enteredStartTime) => {
        setTimeInput((prevState)=>{
            return {
                ...prevState,
                startTimes: enteredStartTime
            };
        });
    };

    const saveEndTimeHandler = (enteredEndTime) => {
        setTimeInput((prevState)=>{
            return {
                ...prevState,
                endTimes: enteredEndTime
            };
        });
    };



return (
    <div>
  <label>What time frame would you like to work each day?</label>
                   <table className="table">
                       <thead>
                       <tr>
                           <th scope="col">Sunday</th>
                           <th scope="col">Monday</th>
                           <th scope="col">Tuesday</th>
                           <th scope="col">Wednesday</th>
                           <th scope="col">Thursday</th>
                           <th scope="col">Friday</th>
                           <th scope="col">Saturday</th>
                       </tr>
                       </thead>
                       <tbody>
                            <tr>
                                <StartTimeQuestions onSaveStartTimeHandler={saveStartTimeHandler}/>
                            </tr>
                            <tr>
                                <EndTimeQuestions onSaveEndTimeHandler={saveEndTimeHandler}/>
                            </tr>
                       </tbody>
                   </table>
                    </div>
)
};

export default TimeFrame