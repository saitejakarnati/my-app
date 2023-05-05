import './App.css';
import React, { useState, useEffect } from 'react';

function StudentsList() {

  const [name, setName] = useState("");
  const [rollno, setRollno] = useState("");
  const [city, setCity] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    console.log(allKeys)
    const allStudents = allKeys.map((key) => JSON.parse(localStorage.getItem(key)));
    setStudents(allStudents);
    console.log(allStudents);
  }, []);

  const handleSubmit = (e) => {
    let student = {
      name: name,
      rollno: rollno,
      city: city
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
          {
            students.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{item.name}</td>
                  <td>{item.rollno}</td>
                  <td>{item.city}</td>
                </tr>
              )
            })
          }

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
function NewStudent = () => {
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
