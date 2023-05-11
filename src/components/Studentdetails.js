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

  export default StudentDetails;