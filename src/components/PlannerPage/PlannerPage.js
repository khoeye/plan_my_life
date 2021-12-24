import React from 'react';
import PlannerCalendar from './PlannerComps/PlannerCalendar';
import PlannerIntro from './PlannerComps/PlannerIntro';
import { CSVLink } from 'react-csv';

function PlannerPage (props){
//Required fields include
const csvData = [
    {
    Subject: 'Test Event 1 Name', 
    StartDate: '12/22/2021', 
    StartTime:'11:00 AM', 
    EndDate:'12/22/2021', 
    EndTime:'3:00 AM', 
    AllDayEvent:'false', 
    Description:'This is a test of the description', 
    Location:'https://www.google.com/', 
    Private:'False', }
        ];

const testEventData = {
    learnWhat: "New Language",
    eventName: "Test Event Name",
    hoursRequired: "100",
    whatDays: {
        checkedStatusMonday: true,
        checkedStatusTuesday: "",
        checkedStatusWednesday: true,
        checkedStatusThursday: "",
        checkedStatusFriday: true,
        checkedStatusSaturday: true,
        checkedStatusSunday: ""
    },
    timeFrame: {
        mondayStart: "18:00",
        mondayEnd: "20:00",
        tuesdayStart: "",
        tuesdayEnd: "",
        wednesdayStart: "20:00",
        wednesdayEnd: "22:00",
        thursdayStart: "",
        thursdayEnd: "",
        fridayStart: "20:00",
        fridayEnd: "22:00",
        saturdayStart: "18:00",
        saturdayEnd: "22:00",
        sundayStart: "",
        sundayEnd: ""
    },
    linkForEvent: "https://www.bungie.net/"
}
const mondayTime = (et,st) =>{
    return parseInt(et)-parseInt(st); 
}

const tuesdayTime = () =>{
    return testEventData.timeFrame.tuesdayEnd-testEventData.timeFrame.tuesdayStart; 
}

const wednesdayTime = () =>{
    return testEventData.timeFrame.wednesdayEnd-testEventData.timeFrame.wednesdayStart; 
}

const thursdayTime = () =>{
    return testEventData.timeFrame.wednesdayEnd-testEventData.timeFrame.wednesdayStart; 
}

const fridayTime = () =>{
    return testEventData.timeFrame.fridayEnd-testEventData.timeFrame.fridayStart; 
}

const saturdayTime = () =>{
    return testEventData.timeFrame.saturdayEnd-testEventData.timeFrame.saturdayStart; 
}

const sundayTime = () =>{
    return testEventData.timeFrame.sundayEnd-testEventData.timeFrame.sundayStart; 
}


const weeklyTimeCreation = () =>{

}

const consoleLog = () =>{
    console.log(mondayTime(testEventData.timeFrame.mondayEnd,testEventData.timeFrame.mondayStart))
}




    return (
        <div>
      <button onClick={consoleLog}>Run console log test</button>
      <CSVLink data={csvData}>Download CSV</CSVLink>
      <PlannerIntro/>
      <PlannerCalendar/>
      </div>
    )
}

export default PlannerPage