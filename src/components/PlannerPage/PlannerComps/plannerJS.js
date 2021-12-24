//JS for Planner.html
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
    let populate = ``
    monthArr.forEach(function (ele) {
        populate += `<li>` + `${ele}` + `</li>`;
    });


    document.querySelector(`#days`).innerHTML = populate;
    document.querySelector(`.mainM`).textContent = `${monthsInYear[month]} ${year}`;
};


//Set Next and Prev button with listeners

let next = document.querySelector(".nextM");
next.addEventListener("click", nextM);

let prev = document.querySelector(".prevM");
prev.addEventListener("click", prevM);

console.log(`form`)


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


createCalendar(currentMonth, currentYear);
