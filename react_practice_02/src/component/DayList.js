import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import useFetch from "../hooks/useFetch";

export default function DayList (){
    // const [days, setDays] = useState([])
    const days = useFetch("http://localhost:3001/days")
    // useEffect(()=> {
    //     console.log("change")
    //     fetch("http://localhost:3001/days")
    //     .then(res=>{
    //         return res.json() // res 는 html 응답
    //     })
    //     .then(data => {
    //         setDays(data)
    //     }) 

    // }, []
    // )
    return  (
    <>
    <ul className="list_day">
            {days.map(day=>(
            <li key={day.id}>
            <Link to={`/day/${day.day}`}>  
            	Day {day.day}
             </Link> 
                {/* a tag로 랜더링 된다.  */}
            </li>))}
    </ul>

    </>
    );
}