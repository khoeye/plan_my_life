import React, {useState} from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import PlannerPage from './components/PlannerPage/PlannerPage';
import SplashPage from './components/Splash/SplashPage';
import FormPage from './components/FormPage/FormPage';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [globalUserState, setGloablUserState] = useState('')

  const appUserDataHandler = (enteredUserData) => {
    return (
      setGloablUserState(enteredUserData)
    );
};

//Delete with test button on this file
const consoleTest = () =>{
  console.log(globalUserState)
};

const testData = {
    "learnWhat": "",
    "eventName": "Test Name",
    "hoursRequired": "70",
    "whatDays": {
      "checkedStatusMonday": false,
      "checkedStatusTuesday": false,
      "checkedStatusWednesday": true,
      "checkedStatusThursday": true,
      "checkedStatusFriday": false,
      "checkedStatusSaturday": true,
      "checkedStatusSunday": false
    },
    "timeFrame": {
      "startTimes": {
        "sundayStart": "",
        "mondayStart": "",
        "tuesdayStart": "",
        "wednesdayStart": "13:00",
        "thursdayStart": "13:00",
        "fridayStart": "",
        "saturdayStart": "13:00"
      },
      "endTimes": {
        "sundayEnd": "",
        "mondayEnd": "",
        "tuesdayEnd": "",
        "wednesdayEnd": "15:00",
        "thursdayEnd": "16:00",
        "fridayEnd": "",
        "saturdayEnd": "18:00"
      }
    },
    "linkForEvent": "https://www.google.com/",
    "startDate": "2022-01-17"
  }


  return (
    <div>
      <Header/>
      <div>
      <button onClick={consoleTest}>Run app level test of state</button>
      </div>
      <Routes>
        <Route path="/" element={<SplashPage/>}/>
        <Route path="/Form" element={<FormPage onAppUserData={appUserDataHandler}/>}/>
        <Route path="/Planner" element={<PlannerPage userDataProp={globalUserState}/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
