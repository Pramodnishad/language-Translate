import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function ShowCalendar() {
  const [date ,setDate] = useState();
  const onChange = () =>{
    setDate(date);
    console.log("date",date)
  }
 
  return (
    <div className='calendar'>
      <Calendar onChange={onChange} value={date}/>
    </div>
  )

}
export default ShowCalendar
