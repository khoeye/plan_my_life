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

const csvData = [
  {
  Subject: "Test Event 1 Name", 
  StartDate: "12/22/2021", 
  StartTime:"11:00 AM", 
  EndDate:"12/22/2021", 
  EndTime:"3:00 AM", 
  AllDayEvent:"false", 
  Description:"This is a test of the description", 
  Location:'https://www.google.com/', 
  Private:"False" }
    ];


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
