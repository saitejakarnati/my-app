import React from "react";
import { useParams } from "react-router-dom";
function StudentDetails() {
  const  {id1}  = useParams()
  console.log(id1)
  const student=JSON.parse(localStorage.getItem(id1))
  console.log(student)
    return (
      <div className="studentdetails">
        <h2>Student Details</h2>
        <p>Student Name: {student.name}</p>
        <p>Roll Number: {student.rollno}</p>
        <p>City: {student.city}</p>
      </div>
    );
  }

  export default StudentDetails;