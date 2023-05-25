import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Studentlist(props) {
  const navigate = useNavigate()
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
                <tr className='trow' key={key} onClick={() => navigate(`/Studentdetails/${item.rollno}`)}>
                  <td><Link to={`/Studentdetails/${item.rollno}`}>{item.name}</Link></td>
                  <td>{item.rollno}</td>
                  <td>{item.city}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table><br />
      <button onClick={() => navigate('/NewStudent')}>Add Student</button>
    </div>
  );
}

export default Studentlist;