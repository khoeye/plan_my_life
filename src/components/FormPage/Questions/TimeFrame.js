import React, {useState, useEffect} from "react";


const TimeFrame = (props) =>{

    const [timeInput, setTimeInput] = useState({
    })

    useEffect(() => {
        props.onSaveTimeFrameHandler(timeInput);
    }, [timeInput]
    );

    //Monday Handlers
    const mondayStartHandler = (event) =>{
        setTimeInput((prevState)=>{
            return{
                ...prevState,
                mondayStart: event.target.value,
            };    
        });
    };
    const mondayEndHandler = (event) =>{
        setTimeInput((prevState)=>{
            return{
                ...prevState,
                mondayEnd: event.target.value,
            };    
        });
    };

    //Tuesday Handler
    const tuesdayStartHandler = (event) =>{
        setTimeInput((prevState)=>{
            return{
                ...prevState,
                tuesdayStart: event.target.value,
            };    
        });
    };
    const tuesdayEndHandler = (event) =>{
        setTimeInput((prevState)=>{
            return{
                ...prevState,
                tuesdayEnd: event.target.value,
            };    
        });
    };


    //Wednesday Handler
    const wednesdayStartHandler = (event) =>{
        setTimeInput((prevState)=>{
            return{
                ...prevState,
                wednesdayStart: event.target.value,
            };    
        });
    };
    const wednesdayEndHandler = (event) =>{
        setTimeInput((prevState)=>{
            return{
                ...prevState,
                wednesdayEnd: event.target.value,
            };    
        });
    };

        //Thursday Handler
        const thursdayStartHandler = (event) =>{
            setTimeInput((prevState)=>{
                return{
                    ...prevState,
                    thursdayStart: event.target.value,
                };    
            });
        };
        const thursdayEndHandler = (event) =>{
            setTimeInput((prevState)=>{
                return{
                    ...prevState,
                    thursdayEnd: event.target.value,
                };    
            });
        };

        //Friday Handler
        const fridayStartHandler = (event) =>{
            setTimeInput((prevState)=>{
                return{
                    ...prevState,
                    fridayStart: event.target.value,
                };    
            });
        };
        const fridayEndHandler = (event) =>{
            setTimeInput((prevState)=>{
                return{
                    ...prevState,
                    fridayEnd: event.target.value,
                };    
            });
        };

        //Saturday Handler
        const saturdayStartHandler = (event) =>{
            setTimeInput((prevState)=>{
                return{
                    ...prevState,
                    saturdayStart: event.target.value,
                };    
            });
        };
        const saturdayEndHandler = (event) =>{
            setTimeInput((prevState)=>{
                return{
                    ...prevState,
                    saturdayEnd: event.target.value,
                };    
            });
        };

        //Sunday Handler
        const sundayStartHandler = (event) =>{
            setTimeInput((prevState)=>{
                return{
                    ...prevState,
                    sundayStart: event.target.value,
                };    
            });
        };
        const sundayEndHandler = (event) =>{
            setTimeInput((prevState)=>{
                return{
                    ...prevState,
                    sundayEnd: event.target.value,
                };    
            });
        };

return (
    <div>
  <label>What time frame would you like to work each day?</label>
                    <ul>
                        <li>
                            Monday
                        </li>
                        <ul>
                            <li>
                                Start <input type="time" id="startMonday" name="start time" onChange={mondayStartHandler}/>
                            </li>
                            <li>
                                End <input type="time" id="endMonday" name="end time"onChange={mondayEndHandler}/>
                            </li>
                        </ul>
                        <li>
                            Tuesday
                        </li>
                        <ul>
                            <li>
                                Start <input type="time" id="startTuesday" name="start time"onChange={tuesdayStartHandler}/>
                            </li>
                            <li>
                                End <input type="time" id="endTuesday" name="end time"onChange={tuesdayEndHandler}/>
                            </li>
                        </ul>
                        <li>
                            Wednesday
                        </li>
                        <ul>
                            <li>
                                Start <input type="time" id="startWednesday" name="start time"onChange={wednesdayStartHandler}/>
                            </li>
                            <li>
                                End <input type="time" id="endWednesday" name="end time"onChange={wednesdayEndHandler}/>
                            </li>
                        </ul>
                        <li>
                            Thursday
                        </li>
                        <ul>
                            <li>
                                Start <input type="time" id="startThursday" name="start time"onChange={thursdayStartHandler}/>
                            </li>
                            <li>
                                End <input type="time" id="endThursday" name="end time"onChange={thursdayEndHandler}/>
                            </li>
                        </ul>
                        <li>
                            Friday
                        </li>
                        <ul>
                            <li>
                                Start <input type="time" id="startFriday" name="start time"onChange={fridayStartHandler}/>
                            </li>
                            <li>
                                End <input type="time" id="endFriday" name="end time"onChange={fridayEndHandler}/>
                            </li>
                        </ul>
                        <li>
                            Saturday
                        </li>
                        <ul>
                            <li>
                                Start <input type="time" id="startSaturday" name="start time"onChange={saturdayStartHandler}/>
                            </li>
                            <li>
                                End <input type="time" id="endSaturday" name="end time"onChange={saturdayEndHandler}/>
                            </li>
                        </ul>
                        <li>
                            Sunday
                        </li>
                        <ul>
                            <li>
                                Start <input type="time" id="startSunday" name="start time"onChange={sundayStartHandler}/>
                            </li>
                            <li>
                                End <input type="time" id="endSunday" name="end time"onChange={sundayEndHandler}/>
                            </li>
                        </ul>
                    </ul>
                    </div>
)
};

export default TimeFrame