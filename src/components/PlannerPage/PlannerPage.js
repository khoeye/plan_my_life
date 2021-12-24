import React from 'react';
import PlannerCalendar from './PlannerComps/PlannerCalendar';
import PlannerIntro from './PlannerComps/PlannerIntro';
// import { CSVLink } from 'react-csv';

function PlannerPage (props){
// Required fields include
    // const csvData = [
    //     {
    //     Subject: 'Test Event 1 Name', 
    //     StartDate: '12/22/2021', 
    //     StartTime:'11:00 AM', 
    //     EndDate:'12/22/2021', 
    //     EndTime:'3:00 AM', 
    //     AllDayEvent:'false', 
    //     Description:'This is a test of the description', 
    //     Location:'https://www.google.com/', 
    //     Private:'False', }
    //       ];

    //       const data = [
    //         ["firstname", "lastname", "email"],
    //         ["Ahmed", "Tomi", "ah@smthing.co.com"],
    //         ["Raed", "Labes", "rl@smthing.co.com"],
    //         ["Yezzi", "Min l3b", "ymin@cocococo.com"]
    //       ];
const checkForProp = () =>{
    console.log(props.userDataProp)
}




    return (
        <div>
      <button onClick={checkForProp}>Run planner prop test</button>
      {/* <CSVLink data={data}>Download CSV</CSVLink> */}
      <PlannerIntro/>
      <PlannerCalendar/>
      </div>
    )
}

export default PlannerPage