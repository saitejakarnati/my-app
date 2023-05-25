import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();
  return (
    <div className="newStudent">
      <form onSubmit={handleSubmit} method="get" action="/">
        <h2>New Student</h2>
        <label>Student Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} /><br /><br />
        <label>Roll No:</label>
        <input type="text" onChange={(e) => setRollno(e.target.value)} value={rollno} /><br /><br />
        <label>City:</label>
        <input type="text" onChange={(e) => setCity(e.target.value)} value={city} /><br /><br />
        <button type="submit" >Submit</button>
        <button onClick={() => navigate('/')}>Back</button>
      </form>
    </div>
  );
}

export default NewStudent;