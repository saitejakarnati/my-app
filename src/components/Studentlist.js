import React from "react";
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

  export default Studentlist;