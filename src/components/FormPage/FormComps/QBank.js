import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./QBank.css";
import Carousel from "react-bootstrap/Carousel";
import LearnWhat from "../Questions/LearnWhat";
import EventName from "../Questions/EventName";
import HoursRequired from "../Questions/HoursRequired";
import WhatDays from "../Questions/WhatDays";
import TimeFrame from "../Questions/TimeFrame";
import LinkForEvent from "../Questions/LinkForEvent";
import Submit from "../Questions/Submit";
import StartDate from "../Questions/StartDate";

function QBank(props) {

    //Consturct User data via State. Data is passed upand udpated from children via handlers below
    const [userData, setUserData] = useState({
            learnWhat: '',
            eventName:'',
            hoursRequired:'',
            whatDays:'',
            timeFrame:'',
            linkForEvent:''
    });
 

    // 
    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmitUserData(userData)
    };

    //Handler for retrieving data from LearnWhat
    const saveLearningTypeHandler = (enteredLearningType) =>{
        setUserData((prevState)=>{
            return {
                ...prevState,
                learnWhat: enteredLearningType
            };
        });
    };

    //Handler for retrieving data from EventName
    const saveEventNameHandler = (enteredEventName) =>{
            setUserData((prevState)=>{
            return {
                ...prevState,
                eventName: enteredEventName
            };
        });
    };

    //Handler for retrieving data from HoursRequired
    const saveHoursRequiredHandler = (enteredHoursRequired) =>{
        setUserData((prevState)=>{
        return {
            ...prevState,
            hoursRequired: enteredHoursRequired
        };
    });
};

    //Handler for retrieving data from WhatDays
    //This recieves as a state passed as an object from the child in WhatDays.js. This logic is built off of a useEffect hook that is reqwuired for this to work
    const saveWhatDaysHandler = (enteredWhatDays) => {
        setUserData((prevState)=>{
            return {
                ...prevState,
                whatDays: enteredWhatDays
            };
        });
    };

        //Handler for retrieving data from WhatDays
    //This recieves as a state passed as an object from the child in WhatDays.js. This logic is built off of a useEffect hook that is reqwuired for this to work
    const saveTimeFrameHandler = (enteredTimeFrame) => {
        setUserData((prevState)=>{
            return {
                ...prevState,
                timeFrame: enteredTimeFrame
            };
        });
    };
    
    //Handler for retrieving data from HoursRequired
    const saveLinkForEventHandler = (enteredLinkForEvent) =>{
        setUserData((prevState)=>{
        return {
            ...prevState,
            linkForEvent: enteredLinkForEvent
        };
    });
};

  const saveStartDateHandler = (enteredStartDate) =>{
    setUserData((prevState)=>{
    return {
        ...prevState,
        startDate: enteredStartDate
    };
  });
  };

//Delete with test button on this file
const consoleTest = () =>{
    console.log(props.userDataProp)
};

  return (
    <div>
      <form onSubmit={submitHandler}>
        <Carousel interval={null} className="formCarousel">
          <Carousel.Item className="formSlide">
            <LearnWhat onSaveLearningType={saveLearningTypeHandler}/>
          </Carousel.Item>
          <Carousel.Item className="formSlide">
            <EventName onSaveEventName={saveEventNameHandler}/>
          </Carousel.Item>
          <Carousel.Item className="formSlide">
            <HoursRequired onSaveHoursRequired={saveHoursRequiredHandler}/>
          </Carousel.Item>
          <Carousel.Item className="formSlide">
            <StartDate onSaveStartDate={saveStartDateHandler}/>
          </Carousel.Item>
          <Carousel.Item className="formSlide">
            <WhatDays onSaveWhatDays={saveWhatDaysHandler} />
          </Carousel.Item>
          <Carousel.Item className="formSlide">
            <TimeFrame onSaveTimeFrameHandler={saveTimeFrameHandler}/>
          </Carousel.Item>
          <Carousel.Item className="formSlide">
            <LinkForEvent onSaveLinkForEvent={saveLinkForEventHandler}/>
          </Carousel.Item>
          <Carousel.Item className="formSlide">
            <Submit />
          </Carousel.Item>
        </Carousel>
      </form>
    </div>
  );
}

export default QBank;
