import dummy from "../db/data.json"
import {Link} from "react-router-dom"

export default function DayList (){
    return  <ul className="list_day">
            {dummy.days.map(day=>(
            <li key={day.id}>
            <Link to={`/day/${day.day}`}>  
            	Day {day.day}
             </Link> 
                {/* a tag로 랜더링 된다.  */}
            </li>))}
    </ul>
}