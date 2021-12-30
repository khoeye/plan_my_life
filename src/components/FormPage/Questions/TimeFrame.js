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
                   <table>
                       <tr>
                           <th>Sunday</th>
                           <th>Monday</th>
                           <th>Tuesday</th>
                           <th>Wednesday</th>
                           <th>Thursday</th>
                           <th>Friday</th>
                           <th>Saturday</th>
                       </tr>
                       <tr>
                           <StartTimeQuestions onSaveStartTimeHandler={saveStartTimeHandler}/>
                       </tr>
                       <tr>
                           <EndTimeQuestions onSaveEndTimeHandler={saveEndTimeHandler}/>
                       </tr>
                   </table>
                    </div>
)
};

export default TimeFrame