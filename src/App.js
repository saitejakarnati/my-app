import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import NewStudent from './components/NewStudent';
import Studentlist from './components/Studentlist';
import StudentDetails from './components/Studentdetails';

function App() {
  const [students, setStudents] = useState([]);
  const [selectedId, setSelectedId] = useState(0)
  //const [currentPage, setCurrentPage] = useState("list")

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
    //setCurrentPage("details")
  };
  function handleAdd() {
    //setCurrentPage("new")
  }
  function handleBack() {
   // setCurrentPage("list")
  }

  return (
    <div>
      <nav>
        <div>
          <Link to="/">Studentlist</Link>
          <Link to="/NewStudent">NewStudent</Link>
          <Link to="/Studentdetails">Studentdetails</Link>
        </div>
      </nav>
      <div>
        <Routes>
          <Route path="/NewStudent" element={<NewStudent handleData={handleData} handleBack={handleBack} />} />
          <Route path="/" element={<Studentlist students={students} handleClick={handleClick} handleAdd={handleAdd} />} />
          <Route path="/Studentdetails" element={<StudentDetails id={selectedId} />} />
        </Routes>
      </div>
      <div>
        <div>{/*
          {currentPage === "new" && <NewStudent handleData={handleData} handleBack={handleBack} />}
          {currentPage === "list" && <Studentlist students={students} handleClick={handleClick} handleAdd={handleAdd} />}
          {currentPage === "details" && selectedId !== 0 && <StudentDetails id={selectedId} />}
  */}
          </div>
      </div>
    </div>
  );
}
export default App;
