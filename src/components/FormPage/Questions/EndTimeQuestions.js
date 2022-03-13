import React, {useState, useEffect} from "react";

const EndTimeQuestions = (props) => {

    //Construct state for the selected endtimes
    const [endTime, setEndTime] = useState ({
        sundayEnd:"",
        mondayEnd:"",
        tuesdayEnd:"",
        wednesdayEnd:"",
        thursdayEnd:"", 
        fridayEnd:"",
        saturdayEnd:""
    })
    
    //Use effect passes the state to the parent via props
    useEffect(() => {
        props.onSaveEndTimeHandler(endTime);
    }, [endTime]
    ); 

        //Sunday Handler
        const sundayEndHandler = (event) =>{
            setEndTime((prevState)=>{
                return{
                    ...prevState,
                    sundayEnd: event.target.value,
                };    
            });
        };

        //Monday Handlers
        const mondayEndHandler = (event) =>{
            setEndTime((prevState)=>{
                return{
                    ...prevState,
                    mondayEnd: event.target.value,
                };    
            });
        };
    
        //Tuesday Handler
        const tuesdayEndHandler = (event) =>{
            setEndTime((prevState)=>{
                return{
                    ...prevState,
                    tuesdayEnd: event.target.value,
                };    
            });
        };
    
    
        //Wednesday Handler
        const wednesdayEndHandler = (event) =>{
            setEndTime((prevState)=>{
                return{
                    ...prevState,
                    wednesdayEnd: event.target.value,
                };    
            });
        };
    
            //Thursday Handler
            const thursdayEndHandler = (event) =>{
                setEndTime((prevState)=>{
                    return{
                        ...prevState,
                        thursdayEnd: event.target.value,
                    };    
                });
            };
    
            //Friday Handler
            const fridayEndHandler = (event) =>{
                setEndTime((prevState)=>{
                    return{
                        ...prevState,
                        fridayEnd: event.target.value,
                    };    
                });
            };
    
            //Saturday Handler
            const saturdayEndHandler = (event) =>{
                setEndTime((prevState)=>{
                    return{
                        ...prevState,
                        saturdayEnd: event.target.value,
                    };    
                });
            };
    
    

    return (
    <React.Fragment>
        <td>
            End<input type="time" id="endSunday" name="end time"onChange={sundayEndHandler}/>
        </td>
        <td>
            End<input type="time" id="endMonday" name="end time"onChange={mondayEndHandler}/>
        </td>
        <td>
            End<input type="time" id="endTuesday" name="end time"onChange={tuesdayEndHandler}/>
        </td>
        <td>
            End<input type="time" id="endWednesday" name="end time"onChange={wednesdayEndHandler}/>
        </td>
        <td>
            End<input type="time" id="endThursday" name="end time"onChange={thursdayEndHandler}/>
        </td>
        <td>
            End<input type="time" id="endFriday" name="end time"onChange={fridayEndHandler}/>
        </td>
        <td>
            End<input type="time" id="endSaturday" name="end time"onChange={saturdayEndHandler}/>
        </td>

    </React.Fragment>
    )
}

export default EndTimeQuestions