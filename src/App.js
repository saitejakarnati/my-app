import './App.css';
import React, { useState } from 'react';

function StudentsList() {
  const [name, setName] = useState("");
  const [rollno, setRollno] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    let student = {
      name: name,
      rollno: rollno,
      cit: city
    }
    localStorage.setItem(rollno, JSON.stringify(student))
  }

  return (
    <div className="App">
        <h1>Students List</h1>
      <table style={{ width: "80%" }}>
        <tr>
          <th>Student Name</th>
          <th>Rollno</th>
          <th>City</th>
        </tr>
        <tbody>

        </tbody><br />
        <button type="button">Add Student</button>
      </table><br />

      <div>
        <form onSubmit={handleSubmit}>
          <h1>New Student</h1>
          <label>Student Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} /><br /><br />
          <label>Roll No:</label>
          <input type="text" onChange={(e) => setRollno(e.target.value)} value={rollno} /><br /><br />
          <label>City:</label>
          <input type="text" onChange={(e) => setCity(e.target.value)} value={city} /><br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
      

    </div>  
  );
}

/*
const newStudent = () => {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Student Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} /><br /><br />
          <label>Roll No:</label>
          <input type="text" onChange={(e) => setRollno(e.target.value)} value={rollno} /><br /><br />
          <label>City:</label>
          <input type="text" onChange={(e) => setCity(e.target.value)} value={city} /><br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
  */



export default StudentsList;
