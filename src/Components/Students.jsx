import React from 'react'

const Students = (props) => {
   const {studentName, subject, country} = props
  return (
    <div>
      <h1>I am {studentName}</h1>
      <h2>I love {subject}</h2>
      <h2>Last week, I was at {country}</h2>
    </div>
  )
}

export default Students
