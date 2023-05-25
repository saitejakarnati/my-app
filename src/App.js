import './App.css';
import React, { useState, useEffect } from 'react';
import NewStudent from './components/NewStudent';
import Studentlist from './components/Studentlist';
import StudentDetails from './components/Studentdetails';
import { Route, Routes } from 'react-router-dom';
function App() {
  const [students, setStudents] = useState([]);
  //const [selectedId, setSelectedId] = useState(0)
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

  return (

    <div>
      <div>{/*
        {currentPage === "new" && <NewStudent handleData={handleData} handleBack={handleBack} />}
        {currentPage === "list" && <Studentlist students={students} handleClick={handleClick} handleAdd={handleAdd} />}
        {currentPage === "details" &&  <StudentDetails  />}
  */}
      </div>

      <Routes>
        <Route path="/" element={<Studentlist students={students}  />} />
        <Route path="/Studentdetails/:id1" element={<StudentDetails />} />
        <Route path="/NewStudent" element={<NewStudent handleData={handleData} />} />
      </Routes>

    </div>
  );
}
export default App;
