import React, {useState, useEffect} from "react";

const WhatDays = (props) =>{

    //Set states of Checked item
    const [checkInput, setCheckInput] = useState({
        checkedStatusMonday: false,
        checkedStatusTuesday: false,
        checkedStatusWednesday: false,
        checkedStatusThursday: false,
        checkedStatusFriday: false,
        checkedStatusSaturday: false,
        checkedStatusSunday: false
    })

    //This monitors for state changes and returns the state values to the parent
    //KYLE CAREFUL!!!!! This guy likes to loop if an object/array is not included in the argument
    useEffect(() => {
        props.onSaveWhatDays(checkInput);
    }, [checkInput]
    );

    //Grab data for checkmarks and update check input state on change
    //Probably a better way to do this but don't know it 
    const mondayChangeHandler = (event) =>{
        setCheckInput((prevState)=>{
            return{
                ...prevState,
                checkedStatusMonday: event.target.checked,
            };    
        });
    };


    const tuesdayChangeHandler = (event) =>{
        setCheckInput((prevState)=>{
            return{
                ...prevState,
                checkedStatusTuesday: event.target.checked,
            };
        });
    };

    const wednesdayChangeHandler = (event) =>{
        setCheckInput((prevState)=>{
            return{
                ...prevState,
                checkedStatusWednesday: event.target.checked,
            };
        });

    };

    const thursdayChangeHandler = (event) =>{
        setCheckInput((prevState)=>{
            return{
                ...prevState,
                checkedStatusThursday: event.target.checked,
            };
        });

    };

    const fridayChangeHandler = (event) =>{
        setCheckInput((prevState)=>{
            return{
                ...prevState,
                checkedStatusFriday: event.target.checked,
            };
        });
    };

    const saturdayChangeHandler = (event) =>{
        setCheckInput((prevState)=>{
            return{
                ...prevState,
                checkedStatusSaturday: event.target.checked,
            };
        });

    };

    const sundayChangeHandler = (event) =>{
        setCheckInput((prevState)=>{
            return{
                ...prevState,
                checkedStatusSunday: event.target.checked,
            };
        });

    };


return (
<div>
<label>What days would you like to work on this?</label>
                <ul>
                    <li>
                        Monday <input type="checkbox" id="checkMonday" name="Monday" onChange={mondayChangeHandler}/>
                    </li>
                    <li>
                        Tuesday <input type="checkbox" id="checkTuesday" onChange={tuesdayChangeHandler}/>
                    </li>
                    <li>
                        Wednesday <input type="checkbox" id="checkWednesday" onChange={wednesdayChangeHandler}/>
                    </li>
                    <li>
                        Thursday <input type="checkbox" id="checkThursday" onChange={thursdayChangeHandler}/>
                    </li>
                    <li>
                        Friday <input type="checkbox" id="checkFriday" onChange={fridayChangeHandler}/>
                    </li>
                    <li>
                        Saturday <input type="checkbox" id="checkSaturday" onChange={saturdayChangeHandler}/>
                    </li>
                    <li>
                        Sunday <input type="checkbox" id="checkSunday" onChange={sundayChangeHandler}/>
                    </li>
                </ul>  
</div>
)
};

export default WhatDays