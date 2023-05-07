import './App.css';
import React, { useState, useEffect } from 'react';

function StudentsList() {

  const [name, setName] = useState("");
  const [rollno, setRollno] = useState("");
  const [city, setCity] = useState("");
  const [students, setStudents] = useState([]);
  const [selectedId, setSelectedId] = useState(0)

  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    console.log(allKeys)
    const allStudents = allKeys.map((key) => JSON.parse(localStorage.getItem(key)));
    setStudents(allStudents);
    console.log(allStudents);
  }, []);

  const handleClick = (id) => {
    console.log(id);
    setSelectedId(id)
  };

  const handleSubmit = () => {
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
      <table className="Table">
        <tr>
          <th>Student Name</th>
          <th>Rollno</th>
          <th>City</th>
        </tr>
        <tbody>
          {
            students.map((item, key) => {
              return (
                <tr className='trow' key={key} onClick={() => handleClick(item.rollno)}>
                  <td>{item.name}</td>
                  <td>{item.rollno}</td>
                  <td>{item.city}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

      <div className="newStudent">
        <form onSubmit={handleSubmit}>
          <h2>New Student</h2>
          <label>Student Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} /><br /><br />
          <label>Roll No:</label>
          <input type="text" onChange={(e) => setRollno(e.target.value)} value={rollno} /><br /><br />
          <label>City:</label>
          <input type="text" onChange={(e) => setCity(e.target.value)} value={city} /><br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
      {selectedId !== 0 && <StudentDetails id={selectedId} />}
    </div>
  );
}


function StudentDetails(props) {
  const id1 = props.id
  return (
    <div className="studentdetails">
      <h2>Student Details</h2>
      <p>Student Name:{JSON.parse(localStorage.getItem(id1)).name}</p>
      <p>Roll Number:{JSON.parse(localStorage.getItem(id1)).rollno}</p>
      <p>City:{JSON.parse(localStorage.getItem(id1)).city}</p>
    </div>
  );
}

export default StudentsList;
