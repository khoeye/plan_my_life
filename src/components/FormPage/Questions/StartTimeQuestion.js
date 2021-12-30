import React, {useState, useEffect} from "react";

const StartTimeQuestions = (props) => {

        
    const [startTime, setStartTime] = useState ({
        sundayStart: "",
        mondayStart: "",
        tuesdayStart: "", 
        wednesdayStart: "",
        thursdayStart: "", 
        fridayStart:"", 
        saturdayStart:""
    })


    useEffect(() => {
        props.onSaveStartTimeHandler(startTime);
    }, [startTime]
    ); 

        //Monday Handlers
        const mondayStartHandler = (event) =>{
            setStartTime((prevState)=>{
                return{
                    ...prevState,
                    mondayStart: event.target.value,
                };    
            });
        };

    
        //Tuesday Handler
        const tuesdayStartHandler = (event) =>{
            setStartTime((prevState)=>{
                return{
                    ...prevState,
                    tuesdayStart: event.target.value,
                };    
            });
        };
    
    
        //Wednesday Handler
        const wednesdayStartHandler = (event) =>{
            setStartTime((prevState)=>{
                return{
                    ...prevState,
                    wednesdayStart: event.target.value,
                };    
            });
        };

    
            //Thursday Handler
            const thursdayStartHandler = (event) =>{
                setStartTime((prevState)=>{
                    return{
                        ...prevState,
                        thursdayStart: event.target.value,
                    };    
                });
            };

    
            //Friday Handler
            const fridayStartHandler = (event) =>{
                setStartTime((prevState)=>{
                    return{
                        ...prevState,
                        fridayStart: event.target.value,
                    };    
                });
            };

    
            //Saturday Handler
            const saturdayStartHandler = (event) =>{
                setStartTime((prevState)=>{
                    return{
                        ...prevState,
                        saturdayStart: event.target.value,
                    };    
                });
            };

            //Sunday Handler
            const sundayStartHandler = (event) =>{
                setStartTime((prevState)=>{
                    return{
                        ...prevState,
                        sundayStart: event.target.value,
                    };    
                });
            };


    return (
    <div>
        <td>
            Start<input type="time" id="startSunday" name="start time"onChange={sundayStartHandler}/>
        </td>
        <td>
            Start<input type="time" id="startMonday" name="start time"onChange={mondayStartHandler}/>
        </td>
        <td>
            Start<input type="time" id="startTuesday" name="start time"onChange={tuesdayStartHandler}/>
        </td>
        <td>
            Start<input type="time" id="startWednesday" name="start time"onChange={wednesdayStartHandler}/>
        </td>
        <td>
            Start<input type="time" id="startThursday" name="start time"onChange={thursdayStartHandler}/>
        </td>
        <td>
            Start<input type="time" id="startFriday" name="start time"onChange={fridayStartHandler}/>
        </td>
        <td>
            Start<input type="time" id="startSaturday" name="start time"onChange={saturdayStartHandler}/>
        </td>

    </div>
    )
}

export default StartTimeQuestions