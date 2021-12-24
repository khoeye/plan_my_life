import React from "react"
import { Link } from "react-router-dom"

const Submit =() =>{
    return (
        <div>
        <input type="submit" value="Submit"></input>
        <Link to='/Planner'>To Planner</Link>
        </div>
    )
}

export default Submit