import React, {useState} from 'react';
import { List } from 'immutable';

import PlannerCalendar from './PlannerComps/PlannerCalendar';
import PlannerIntro from './PlannerComps/PlannerIntro';
import { CSVLink } from 'react-csv';

function PlannerPage (props){

    const [eventData, setEventData] = useState([

    ]
    )

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
        checkedStatusSunday: false,
        checkedStatusMonday: true,
        checkedStatusTuesday: false,
        checkedStatusWednesday: true,
        checkedStatusThursday: false,
        checkedStatusFriday: true,
        checkedStatusSaturday: true
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
    linkForEvent: "https://www.bungie.net/",
    startDate: "2022-01-03"
}



//Get the how many hours are being spent everyday
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
        props.userDataProp.hoursRequired /  
        (
    sundayTime(props.userDataProp.timeFrame.endTimes.sundayEnd,props.userDataProp.timeFrame.startTimes.sundayStart)+
    mondayTime(props.userDataProp.timeFrame.endTimes.mondayEnd,props.userDataProp.timeFrame.startTimes.mondayStart)+
    tuesdayTime(props.userDataProp.timeFrame.endTimes.tuesdayEnd,props.userDataProp.timeFrame.startTimes.tuesdayStart)+
    wednesdayTime(props.userDataProp.timeFrame.endTimes.wednesdayEnd,props.userDataProp.timeFrame.startTimes.wednesdayStart)+
    thursdayTime(props.userDataProp.timeFrame.endTimes.thursdayEnd,props.userDataProp.timeFrame.startTimes.thursdayStart)+
    fridayTime(props.userDataProp.timeFrame.endTimes.fridayEnd,props.userDataProp.timeFrame.startTimes.fridayStart)+
    saturdayTime(props.userDataProp.timeFrame.endTimes.saturdayEnd,props.userDataProp.timeFrame.startTimes.saturdayStart)
   )
    )
}

//This function returns the amount of working days the user will need to put in to complete the task. It is still linked to the week function shown above
const daysRequired = () =>{
    const a = dupeArray([
    sundayTime(props.userDataProp.timeFrame.endTimes.sundayEnd,props.userDataProp.timeFrame.startTimes.sundayStart),
    mondayTime(props.userDataProp.timeFrame.endTimes.mondayEnd,props.userDataProp.timeFrame.startTimes.mondayStart),
    tuesdayTime(props.userDataProp.timeFrame.endTimes.tuesdayEnd,props.userDataProp.timeFrame.startTimes.tuesdayStart),
    wednesdayTime(props.userDataProp.timeFrame.endTimes.wednesdayEnd,props.userDataProp.timeFrame.startTimes.wednesdayStart),
    thursdayTime(props.userDataProp.timeFrame.endTimes.thursdayEnd,props.userDataProp.timeFrame.startTimes.thursdayStart),
    fridayTime(props.userDataProp.timeFrame.endTimes.fridayEnd,props.userDataProp.timeFrame.startTimes.fridayStart),
    saturdayTime(props.userDataProp.timeFrame.endTimes.saturdayEnd,props.userDataProp.timeFrame.startTimes.saturdayStart)
    ].filter(x=>x>0),Math.ceil(weeklyTimeCreation()));
    

    let j = 0
    let count = 0
    for(let i=0; i<=props.userDataProp.hoursRequired; j++) {
        i = i + a[j]
        count++
      }
    return count-1


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
    // let weeklyEventArray = weeklyEventArrayRaw.filter(function(x){
    //     return x !== null; 
    // });
    return weeklyEventArrayRaw
}

//Creator functions to move th user's data into the object templat required for gmail events
const sundayObjectCreator = () =>{
    if (props.userDataProp.whatDays.checkedStatusSunday === false) {
        return null
    }else{
        let sundayObj={
            Subject: props.userDataProp.eventName, 
            StartDate: '', 
            StartTime: props.userDataProp.timeFrame.startTimes.sundayStart, 
            EndDate: '', 
            EndTime: props.userDataProp.timeFrame.endTimes.sundayEnd, 
            AllDayEvent: false, 
            Description:'', 
            Location: props.userDataProp.linkForEvent, 
            Private:'', };
            return (sundayObj)
    }
}

const mondayObjectCreator = () =>{
    if (props.userDataProp.whatDays.checkedStatusMonday === false) {
        return null
    }else{
        let mondayObj={
            Subject: props.userDataProp.eventName, 
            StartDate: '', 
            StartTime: props.userDataProp.timeFrame.startTimes.mondayStart, 
            EndDate: '', 
            EndTime: props.userDataProp.timeFrame.endTimes.mondayEnd, 
            AllDayEvent: false, 
            Description:'', 
            Location: props.userDataProp.linkForEvent, 
            Private:'', };
            return (mondayObj)
    }
}
const tuesdayObjectCreator = () =>{
    if (props.userDataProp.whatDays.checkedStatusTuesday === false) {
        return null
    }else{
        let tuesdayObj={
            Subject: props.userDataProp.eventName, 
            StartDate: '', 
            StartTime: props.userDataProp.timeFrame.startTimes.tuesdayStart, 
            EndDate: '', 
            EndTime: props.userDataProp.timeFrame.endTimes.tuesdayEnd, 
            AllDayEvent: false, 
            Description:'', 
            Location: props.userDataProp.linkForEvent, 
            Private:'', };
            return (tuesdayObj)
    }
}

const wednesdayObjectCreator = () =>{
    if (props.userDataProp.whatDays.checkedStatusWednesday === false) {
        return null
    }else{
        let wednesdayObj={
            Subject: props.userDataProp.eventName, 
            StartDate: '', 
            StartTime: props.userDataProp.timeFrame.startTimes.wednesdayStart, 
            EndDate: '', 
            EndTime: props.userDataProp.timeFrame.endTimes.wednesdayEnd, 
            AllDayEvent: false, 
            Description:'', 
            Location: props.userDataProp.linkForEvent, 
            Private:'', };
            return (wednesdayObj)
    }
}

const thursdayObjectCreator = () =>{
    if (props.userDataProp.whatDays.checkedStatusThursday === false) {
        return null
    }else{
        let thursdayObj={
            Subject: props.userDataProp.eventName, 
            StartDate: '', 
            StartTime: props.userDataProp.timeFrame.startTimes.thursdayStart, 
            EndDate: '', 
            EndTime: props.userDataProp.timeFrame.endTimes.thursdayEnd, 
            AllDayEvent: false, 
            Description:'', 
            Location: props.userDataProp.linkForEvent, 
            Private:'', };
            return (thursdayObj)
    }
}

const fridayObjectCreator = () =>{
    if (props.userDataProp.whatDays.checkedStatusFriday === false) {
        return null
    }else{
        let fridayObj={
            Subject: props.userDataProp.eventName, 
            StartDate: '', 
            StartTime: props.userDataProp.timeFrame.startTimes.fridayStart, 
            EndDate: '', 
            EndTime: props.userDataProp.timeFrame.endTimes.fridayEnd, 
            AllDayEvent: false, 
            Description:'', 
            Location: props.userDataProp.linkForEvent, 
            Private:'', };
            return (fridayObj)
    }
}

const saturdayObjectCreator = () =>{
    if (props.userDataProp.whatDays.checkedStatusSaturday === false) {
        return null
    }else{
        let saturdayObj={
            Subject: props.userDataProp.eventName, 
            StartDate: '', 
            StartTime: props.userDataProp.timeFrame.startTimes.saturdayStart, 
            EndDate: '', 
            EndTime: props.userDataProp.timeFrame.endTimes.saturdayEnd, 
            AllDayEvent: false, 
            Description:'', 
            Location: props.userDataProp.linkForEvent, 
            Private:'', };
            return (saturdayObj)
    }
}

const weeklyObjectCreator = (weeklyEventArray, weeks, days, startDate) =>{
    // Get the event based on what the user selected for the start date
    const firstWeekObject = (weeklyEventArray.slice(startDate.getDay())).filter(function(x){
        return x !== null; 
        });

    const cutWeeklyEventArray = weeklyEventArray.filter(function(x){
        return x !== null; 
        });
    const eventObject = (dupeArray(cutWeeklyEventArray, weeks))
    
    for(let i=0;i>firstWeekObject.length;i++){
        eventObject.unshift(firstWeekObject[i])
    }

    return eventObject 

}


//This function duplicates the weekly array to match closely with whats required to complete the task. I say closely because it may still be afew days off
const dupeArray = (arr, times) => [].concat(...Array.from({
    length: times
 }, () => arr));



//This function will be to contsruct the array that will hold the dates for each event

//First we give each week a counter
//Second we use the counter to find the days of difference between each date
//Third we find how many days to skip to go from the end of one week to the begining of the next
//Fourth we use these numbers to run a loop that generates events for the user based on what they inputed

//First
// This assigns a number (base 1) to a counter variable based on the users selection. This will be used to determin the range between the days entered.
let sundayCounter = ''
const sundayAssign = () => {
    if (props.userDataProp.whatDays.checkedStatusSunday === false) {
        return sundayCounter = 0 
    } else {
        return sundayCounter = 1
    }
}

let mondayCounter = ''
const mondayAssign = () => {
    if (props.userDataProp.whatDays.checkedStatusMonday === false) {
        return mondayCounter = 0 
    } else {
        return mondayCounter = 2
    }
}

let tuesdayCounter = ''
const tuesdayAssign = () => {
    if (props.userDataProp.whatDays.checkedStatusTuesday === false) {
        return tuesdayCounter = 0 
    } else {
        return tuesdayCounter = 3
    }
}

let wednesdayCounter = ''
const wednesdayAssign = () => {
    if (props.userDataProp.whatDays.checkedStatusWednesday === false) {
        return wednesdayCounter = 0 
    } else {
        return wednesdayCounter = 4
    }
}

let thursdayCounter = ''
const thursdayAssign = () => {
    if (props.userDataProp.whatDays.checkedStatusThursday === false) {
        return thursdayCounter = 0 
    } else {
        return thursdayCounter = 5
    }
}

let fridayCounter = ''
const fridayAssign = () => {
    if (props.userDataProp.whatDays.checkedStatusFriday === false) {
        return fridayCounter = 0 
    } else {
        return fridayCounter = 6
    }
}

let saturdayCounter = ''
const saturdayAssign = () => {
    if (props.userDataProp.whatDays.checkedStatusSaturday === false) {
        return saturdayCounter = 0 
    } else {
        return saturdayCounter = 7
    }
}

//Function to run all of them at once: returns undefined which should be FIXED
const getAllCounters = () => {
    sundayAssign()
    mondayAssign()
    tuesdayAssign()
    wednesdayAssign()
    thursdayAssign()
    fridayAssign()
    saturdayAssign()
}


//Second
const getDifSunday = () => {
    return 0
}

const getDifMonday = () => {
    if (mondayCounter===0) {
        return 0
    } else if (mondayCounter-sundayCounter === 1){
        return 1
    } else {
        return 0
    }
}

const getDifTuesday = () => {
    if (tuesdayCounter===0) {
        return 0
    } else if (tuesdayCounter-mondayCounter === 1){
        return 1
    } else if (tuesdayCounter-sundayCounter === 2){
        return 2
    } else {
        return 0
    }
}

const getDifWednesday = () => {
    if (wednesdayCounter ===0){
        return 0
    } else if (wednesdayCounter-tuesdayCounter===1){
        return 1
    } else if (wednesdayCounter-mondayCounter===2){
        return 2 
    } else if (wednesdayCounter-sundayCounter===3){
        return 3
    } else {
        return 0
    }
}

const getDifThursday = () =>{
    if (thursdayCounter===0) {
        return 0
    } else if (thursdayCounter-wednesdayCounter===1){
        return 1
    } else if (thursdayCounter-tuesdayCounter===2){
        return 2
    } else if (thursdayCounter-mondayCounter===3){
        return 3
    } else if (thursdayCounter-sundayCounter===4){
        return 4
    } else {
        return 0
    }
}

const getDifFriday = () =>{
    if (fridayCounter===0){
        return 0
    } else if (fridayCounter-thursdayCounter===1){
        return 1
    } else if (fridayCounter-wednesdayCounter===2){
        return 2
    } else if (fridayCounter-tuesdayCounter===3){
        return 3
    } else if (fridayCounter-mondayCounter===4){
        return 4
    } else if (fridayCounter-sundayCounter===5){
        return 5
    } else {
        return 0
    }
}

const getDifSaturday = () =>{
    if (saturdayCounter===0){
        return 0
    } else if (saturdayCounter-fridayCounter===1){
        return 1
    }  else if (saturdayCounter-thursdayCounter===2){
        return 2
    } else if (saturdayCounter-wednesdayCounter===3){
        return 3
    } else if (saturdayCounter-tuesdayCounter===4){
        return 4
    } else if (saturdayCounter-mondayCounter===5){
        return 5
    } else if (saturdayCounter-sundayCounter===6){
        return 6
    } else {
        return 0
    }
}

const getFirstDay = () => {
    if (props.userDataProp.whatDays.checkedStatusSunday===true){
        return 8
    } else if (props.userDataProp.whatDays.checkedStatusMonday===true){
        return 9
    } else if (props.userDataProp.whatDays.checkedStatusTuesday===true){
        return 10
    } else if (props.userDataProp.whatDays.checkedStatusWednesday===true){
        return 11
    } else if (props.userDataProp.whatDays.checkedStatusThursday===true){
        return 12
    } else if (props.userDataProp.whatDays.checkedStatusFriday===true){
        return 13
    } else if (props.userDataProp.whatDays.checkedStatusSaturday===true){
        return 14
    }
}

const getLastDay = () => {
    if (props.userDataProp.whatDays.checkedStatusSaturday===true){
        return 7
    } else if (props.userDataProp.whatDays.checkedStatusFriday===true){
        return 6
    } else if (props.userDataProp.whatDays.checkedStatusThursday===true){
        return 5
    } else if (props.userDataProp.whatDays.checkedStatusWednesday===true){
        return 4
    } else if (props.userDataProp.whatDays.checkedStatusTuesday===true){
        return 3
    } else if (props.userDataProp.whatDays.checkedStatusMonday===true){
        return 2
    } else if (props.userDataProp.whatDays.checkedStatusSunday===true){
        return 1
    }
}

//Get difference between first day and last day. Used Aug 2021 as the month because day 1 is a sunday so it makes the math nicer
const getFisrtLastDif = (first, last) =>{  
    const date1 = new Date(`08/${last}/2021`);
    const date2 = new Date(`08/${first}/2021`);
    
    // To calculate the time difference of two dates
    const Difference_In_Time = date2.getTime() - date1.getTime();
    
    // To calculate the no. of days between two dates
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return Difference_In_Days
}


//Third
//This consturct an array of how many days to move forward from each date
const getDifForWeek = () =>{
    getAllCounters();
    let weekDifArr = [];
 
    return weekDifArr = [
        getDifSunday(),
        getDifMonday(),
        getDifTuesday(),
        getDifWednesday(),
        getDifThursday(),
        getDifFriday(),
        getDifSaturday(),
        (getFisrtLastDif(getFirstDay(),getLastDay()))
   
    ];
}

//Four
//Convert users start date to someting useful in JS
const dayTransform = (date) =>{
    const x = Date.parse(date)
    const y = new Date(x)
    //Parsing is always one day off for some reason so added this to fix it
    const z = new Date(y.setDate(y.getDate()+1))
    return z
}

//StartDay we pass the transformed start date given by the user
//arr we pass the weekly dif array created so we now how many days to add
const generateFirstEventArr = (startDay,arr) =>{
    let eventArr = [dayTransform(props.userDataProp.startDate)];
    let firstArr = arr.filter(x=>x>0)
    // Add first week depending on when the user selects as the start date
    for (let i=0; i < firstArr.length; i++) 
       
    eventArr.push(new Date(startDay.setDate(startDay.getDate()+firstArr[i])))

        return eventArr
    
}

const generateEventArr = (days,week,startDate,startDif,fullDif) =>{
    let remainderDay = days-startDif.length
    let difFull = dupeArray(fullDif.filter(x=>x>0),week)

    for (let i=0; i < remainderDay; i++)
    startDif.push(new Date(startDate.setDate(startDate.getDate()+difFull[i])))
    return startDif
}

//Turn the JS Dates into the M/D/Y format required for the calnedar event
const filterEventArr = (arr) => {
    for (let i=0; i < arr.length; i++){
    let date = arr[i].getDate();
    let month = arr[i].getMonth() + 1;
    let year = arr[i].getFullYear();
    arr[i] = `${month}/${date}/${year}`;
    }
    const result = arr
    return result
}
//Last thing to do is to merge the Array of Objects and array of Dates 

const objectArrayCombine = (dateArray,eventObject) =>{
    const result = [];
    for(let i=0; i < dateArray.length; i++){ 
        result.push({
            Subject: props.userDataProp.eventName, 
            StartDate: dateArray[i], 
            StartTime: eventObject[i].StartTime, 
            EndDate: dateArray[i], 
            EndTime:eventObject[i].EndTime, 
            AllDayEvent: false, 
            Description:'', 
            Location: props.userDataProp.linkForEvent, 
            Private:'', })
        }
    
    setEventData(result)
}



const difForFirstWeek = generateFirstEventArr(dayTransform(props.userDataProp.startDate),getDifForWeek().slice(dayTransform(props.userDataProp.startDate).getDay()))
const generateAllDateEvents = filterEventArr(generateEventArr(daysRequired(),Math.ceil(weeklyTimeCreation())-1,generateFirstEventArr(dayTransform(props.userDataProp.startDate),getDifForWeek().slice(dayTransform(props.userDataProp.startDate).getDay())).reverse()[0],difForFirstWeek,(getDifForWeek())))
const generateAllObjectEvents = weeklyObjectCreator(weeklyEventArrayCreator(),Math.ceil(weeklyTimeCreation()),daysRequired(),dayTransform(props.userDataProp.startDate))

const consoleLog = () =>{
console.log(getDifForWeek())
console.log(generateAllObjectEvents)
console.log(setEventData(objectArrayCombine(generateAllDateEvents,generateAllObjectEvents)))
console.log(generateFirstEventArr(dayTransform(props.userDataProp.startDate),getDifForWeek().slice(dayTransform(props.userDataProp.startDate).getDay())))
console.log(generateEventArr(daysRequired(),Math.ceil(weeklyTimeCreation())-1,generateFirstEventArr(dayTransform(props.userDataProp.startDate),getDifForWeek().slice(dayTransform(props.userDataProp.startDate).getDay())).reverse()[0],difForFirstWeek,(getDifForWeek())))
console.log(objectArrayCombine(generateAllDateEvents, generateAllObjectEvents))
}




    return (
        <div>
      <button onClick={consoleLog}>Run console log test</button>
      <CSVLink data={eventData}>Download CSV</CSVLink>
      <PlannerIntro/>
      <PlannerCalendar/>
      </div>
    )
}

export default PlannerPage