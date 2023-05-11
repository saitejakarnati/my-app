import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [students, setStudents] = useState([]);
  const [selectedId, setSelectedId] = useState(0)
  const [currentPage, setCurrentPage] = useState("list")

  function handleData(student) {
    localStorage.setItem(student.rollno, JSON.stringify(student));
  }

  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    console.log(allKeys)
    const allStudents = allKeys.map((key) => JSON.parse(localStorage.getItem(key)));
    return () => {
      setStudents(allStudents);
      console.log(allStudents);
    }
  }, []);

  function handleClick(id) {
    console.log(id);
    setSelectedId(id)
    setCurrentPage("details")
  };
  function handleAdd() {
    setCurrentPage("new")
  }
  function handleBack() {
    setCurrentPage("list")
  }

  return (
    <div>
      {currentPage === "new" && <NewStudent handleData={handleData} handleBack={handleBack} />}
      {currentPage === "list" && <Studentlist students={students} handleClick={handleClick} handleAdd={handleAdd} />}
      {currentPage === "details" && selectedId !== 0 && <StudentDetails id={selectedId} />}
    </div>
  );
}

function StudentDetails(props) {
  const id1 = props.id
  return (
    <div className="studentdetails">
      <h2>Student Details</h2>
      <p>Student Name: {JSON.parse(localStorage.getItem(id1)).name}</p>
      <p>Roll Number: {JSON.parse(localStorage.getItem(id1)).rollno}</p>
      <p>City: {JSON.parse(localStorage.getItem(id1)).city}</p>
    </div>
  );
}

function NewStudent(props) {
  const [name, setName] = useState("");
  const [rollno, setRollno] = useState("");
  const [city, setCity] = useState("");

  function handleSubmit() {
    const student = {
      name: name,
      rollno: rollno,
      city: city
    };
    props.handleData(student);
  }
  return (
    <div className="newStudent">
      <form onSubmit={handleSubmit}>
        <h2>New Student</h2>
        <label>Student Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} /><br /><br />
        <label>Roll No:</label>
        <input type="text" onChange={(e) => setRollno(e.target.value)} value={rollno} /><br /><br />
        <label>City:</label>
        <input type="text" onChange={(e) => setCity(e.target.value)} value={city} /><br /><br />
        <button type="submit" >Submit</button>
        <button onClick={props.handleBack}>Back</button>
      </form>
    </div>
  );
}

function Studentlist(props) {
  return (
    <div className="studentlist">
      <h1>Students List</h1>
      <table className="Table">
        <tr>
          <th>Student Name</th>
          <th>Rollno</th>
          <th>City</th>
        </tr>
        <tbody>
          {
            props.students.map((item, key) => {
              return (
                <tr className='trow' key={key} onClick={() => props.handleClick(item.rollno)}>
                  <td>{item.name}</td>
                  <td>{item.rollno}</td>
                  <td>{item.city}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table><br />
      <button onClick={props.handleAdd}>Add Student</button>
    </div>
  );
}

export default App;
