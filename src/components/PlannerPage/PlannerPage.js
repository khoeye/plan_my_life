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
        checkedStatusTuesday: false,
        checkedStatusWednesday: true,
        checkedStatusThursday: false,
        checkedStatusFriday: true,
        checkedStatusSaturday: true,
        checkedStatusSunday: false
    },
    timeFrame: {        
        startTimes:{
            sundayStart: "",
            mondayStart: "16:00",
            tuesdayStart: "",
            wednesdayStart: "14:00",
            thursdayStart: "",
            fridayStart: "17:00",
            saturdayStart:"13:00"
        },
        endTimes:{
            sundayEnd: "",
            mondayEnd: "17:00",
            tuesdayEnd: "",
            wednesdayEnd: "15:00",
            thursdayEnd: "",
            fridayEnd: "18:00",           
            saturdayEnd:"15:00"
            }
    },
    linkForEvent: "https://www.bungie.net/"
}
const mondayTime = (et,st) =>{
    if (et==="" && st===""){
        return 0
    } else {
    return parseInt(et)-parseInt(st);
    } 
}

const tuesdayTime = (et,st) =>{
    if (et==="" && st===""){
        return 0
    } else {
    return parseInt(et)-parseInt(st); 
    }
}

const wednesdayTime = (et,st) =>{
    if (et==="" && st===""){
        return 0
    } else {
    return parseInt(et)-parseInt(st);
    } 
}

const thursdayTime = (et,st) =>{
    if (et==="" && st===""){
        return 0
    } else {
    return parseInt(et)-parseInt(st);
    } 
}

const fridayTime = (et,st) =>{
    if (et==="" && st===""){
        return 0
    } else {
    return parseInt(et)-parseInt(st);
    } 
}

const saturdayTime = (et,st) =>{
    if (et==="" && st===""){
        return 0
    } else {
    return parseInt(et)-parseInt(st); 
    }
}

const sundayTime = (et,st) =>{
    if (et==="" && st===""){
        return 0
    } else {
    return parseInt(et)-parseInt(st); 
    }
}

//Get the total hours spent in a week and divide by the hours required for completion. Output is how many weeks the project will take
const weeklyTimeCreation = () =>{
    return (
        testEventData.hoursRequired /  
        (
    sundayTime(testEventData.timeFrame.endTimes.sundayEnd,testEventData.timeFrame.startTimes.sundayStart)+
    mondayTime(testEventData.timeFrame.endTimes.mondayEnd,testEventData.timeFrame.startTimes.mondayStart)+
    tuesdayTime(testEventData.timeFrame.endTimes.tuesdayEnd,testEventData.timeFrame.startTimes.tuesdayStart)+
    wednesdayTime(testEventData.timeFrame.endTimes.wednesdayEnd,testEventData.timeFrame.startTimes.wednesdayStart)+
    thursdayTime(testEventData.timeFrame.endTimes.thursdayEnd,testEventData.timeFrame.startTimes.thursdayStart)+
    fridayTime(testEventData.timeFrame.endTimes.fridayEnd,testEventData.timeFrame.startTimes.fridayStart)+
    saturdayTime(testEventData.timeFrame.endTimes.saturdayEnd,testEventData.timeFrame.startTimes.saturdayStart)
   )
    )
}

//Templates for google calendar object to be passed in array 
let eventTemplateObject = {
    Subject: '', 
    StartDate: '', 
    StartTime:'', 
    EndDate:'', 
    EndTime:'', 
    AllDayEvent:'', 
    Description:'', 
    Location:'', 
    Private:'', };


//Generate an array with the events for a week that a user selects
const weeklyEventArrayCreator = () => {
    let weeklyEventArrayRaw = [
        sundayObjectCreator(),
        mondayObjectCreator(),
        tuesdayObjectCreator(),
        wednesdayObjectCreator(),
        thursdayObjectCreator(),
        fridayObjectCreator(),
        saturdayObjectCreator()
    ]
    let weeklyEventArray = weeklyEventArrayRaw.filter(function(x){
        return x !== null; 
    });
    return (weeklyEventArray)
}

//Creator functions to move th user's data into the object templat required for gmail events
const sundayObjectCreator = () =>{
    if (testEventData.whatDays.checkedStatusSunday === false) {
        return null
    }else{
        let sundayObj={
            Subject: testEventData.eventName, 
            StartDate: '', 
            StartTime: testEventData.timeFrame.startTimes.sundayStart, 
            EndDate: '', 
            EndTime: testEventData.timeFrame.endTimes.sundayEnd, 
            AllDayEvent: false, 
            Description:'', 
            Location: testEventData.linkForEvent, 
            Private:'', };
            return (sundayObj)
    }
}

const mondayObjectCreator = () =>{
    if (testEventData.whatDays.checkedStatusMonday === false) {
        return null
    }else{
        let mondayObj={
            Subject: testEventData.eventName, 
            StartDate: '', 
            StartTime: testEventData.timeFrame.startTimes.mondayStart, 
            EndDate: '', 
            EndTime: testEventData.timeFrame.endTimes.mondayEnd, 
            AllDayEvent: false, 
            Description:'', 
            Location: testEventData.linkForEvent, 
            Private:'', };
            return (mondayObj)
    }
}
const tuesdayObjectCreator = () =>{
    if (testEventData.whatDays.checkedStatusTuesday === false) {
        return null
    }else{
        let tuesdayObj={
            Subject: testEventData.eventName, 
            StartDate: '', 
            StartTime: testEventData.timeFrame.startTimes.tuesdayStart, 
            EndDate: '', 
            EndTime: testEventData.timeFrame.endTimes.tuesdayEnd, 
            AllDayEvent: false, 
            Description:'', 
            Location: testEventData.linkForEvent, 
            Private:'', };
            return (tuesdayObj)
    }
}

const wednesdayObjectCreator = () =>{
    if (testEventData.whatDays.checkedStatusWednesday === false) {
        return null
    }else{
        let wednesdayObj={
            Subject: testEventData.eventName, 
            StartDate: '', 
            StartTime: testEventData.timeFrame.startTimes.wednesdayStart, 
            EndDate: '', 
            EndTime: testEventData.timeFrame.endTimes.wednesdayEnd, 
            AllDayEvent: false, 
            Description:'', 
            Location: testEventData.linkForEvent, 
            Private:'', };
            return (wednesdayObj)
    }
}

const thursdayObjectCreator = () =>{
    if (testEventData.whatDays.checkedStatusThursday === false) {
        return null
    }else{
        let thursdayObj={
            Subject: testEventData.eventName, 
            StartDate: '', 
            StartTime: testEventData.timeFrame.startTimes.thursdayStart, 
            EndDate: '', 
            EndTime: testEventData.timeFrame.endTimes.thursdayEnd, 
            AllDayEvent: false, 
            Description:'', 
            Location: testEventData.linkForEvent, 
            Private:'', };
            return (thursdayObj)
    }
}

const fridayObjectCreator = () =>{
    if (testEventData.whatDays.checkedStatusFriday === false) {
        return null
    }else{
        let fridayObj={
            Subject: testEventData.eventName, 
            StartDate: '', 
            StartTime: testEventData.timeFrame.startTimes.fridayStart, 
            EndDate: '', 
            EndTime: testEventData.timeFrame.endTimes.fridayEnd, 
            AllDayEvent: false, 
            Description:'', 
            Location: testEventData.linkForEvent, 
            Private:'', };
            return (fridayObj)
    }
}

const saturdayObjectCreator = () =>{
    if (testEventData.whatDays.checkedStatusSaturday === false) {
        return null
    }else{
        let saturdayObj={
            Subject: testEventData.eventName, 
            StartDate: '', 
            StartTime: testEventData.timeFrame.startTimes.saturdayStart, 
            EndDate: '', 
            EndTime: testEventData.timeFrame.endTimes.saturdayEnd, 
            AllDayEvent: false, 
            Description:'', 
            Location: testEventData.linkForEvent, 
            Private:'', };
            return (saturdayObj)
    }
}

//This function duplicates the weekly array to match closely with whats required to complete the task
const dupWeeklyArray = (arr, times) =>{
    Array(times)
        .fill([...arr])
        .reduce((a, b) => a.concat(b));
};

//


// const calendarGeneration = () =>{
//     let userInputArr = []
//     if(Number.isInteger(weeklyTimeCreation())){
//         for (let i = 1; i <= (weeklyTimeCreation()*daysSelected()); i++) {
//             userInputArr.push(eventTemplateObject)
//         }
//         return userInputArr
//     } else { 
//     }
// }

const consoleLog = () =>{
    console.log(mondayTime(testEventData.timeFrame.endTimes.mondayEnd,testEventData.timeFrame.startTimes.mondayStart))
    console.log(wednesdayTime(testEventData.timeFrame.endTimes.wednesdayEnd,testEventData.timeFrame.startTimes.wednesdayStart))
    console.log(weeklyTimeCreation())
    console.log(weeklyEventArrayCreator())
    console.log(dupWeeklyArray(weeklyEventArrayCreator(),weeklyTimeCreation()))


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