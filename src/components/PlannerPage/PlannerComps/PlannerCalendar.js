import React from "react";
import "./PlannerCalendar.css"

const PlannerCalendar = () => {
    
   //Start of Calendar generation logic custom

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();


const monthsInYear = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];


//Get how many days are in a given month
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}


//create an array for a month with the days in it
function generateMonthArray(month, year) {
    let monthArr = [];
    for (let i = 1; i <= (daysInMonth(month, year)); i++) {
        monthArr.push(i);

    }
    return monthArr;
}


//create the calendar that populates into the DOM
function createCalendar(month, year) {
    let monthArr = generateMonthArray(month, year);

    //Shift first day to align with Sun-Saturday
    let date = new Date(year, month);
    let firstDay = date.getDay()
    for (let i = 1; i <= (firstDay); i++) {
        monthArr.unshift(`-`);
    }


    //Populate the array with the amount of days in that month
    let populate = ``;
    monthArr.forEach(function (ele) {
        populate += `<li>` + `${ele}` + `</li>`;
    });


    document.querySelector(`#days`).innerHTML = populate;
    document.querySelector(`.mainM`).textContent = `${monthsInYear[month]} ${year}`;
};


//Increment month and repopulate DOM with new data
function nextM() {
    if (currentMonth === 11) {
        currentYear = currentYear + 1;
    }


    if (currentMonth === 11) {
        currentMonth = 0;
    } else {
        currentMonth = currentMonth + 1;
    }

    createCalendar(currentMonth, currentYear);
}


//Reduce month and repopulate DOM with new data
function prevM() {

    if (currentMonth === 0) {
        currentYear = currentYear - 1;
    }


    if (currentMonth === 0) {
        currentMonth = 11;
    } else {
        currentMonth = currentMonth - 1;
    }

    createCalendar(currentMonth, currentYear);
}

//run fonction on opening
function start() {
createCalendar(currentMonth, currentYear)
};

//End of Calendar Creation function^ 


    return (
        <div>
               <div className="month">
      <ul>
        <li className="prevM" onClick={prevM}>&#10094;</li>
        <li className="nextM" onClick={nextM}>&#10095;</li>
      <li className="mainM">August 2021</li>
      </ul>
    </div>

    <ul className="weekdays">
      <li>Su</li>
      <li>Mo</li>
      <li>Tu</li>
      <li>We</li>
      <li>Th</li>
      <li>Fr</li>
      <li>Sa</li>
      
    </ul>
<ul id="days">
  <li>
  </li>
  </ul> 
        </div>
    )
}

export default PlannerCalendar