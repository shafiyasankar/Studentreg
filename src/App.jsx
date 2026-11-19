
import React, { useState } from "react";
import "./App.css";

function App() {

  const [name, setName] = useState("");
  const [regno, setRegno] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [students, setStudents] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      name: name,
      regno: regno,
      email: email,
      department: department
    };

    setStudents([...students, newStudent]);

    setName("");
    setRegno("");
    setEmail("");
    setDepartment("");
  }

  function deleteStudent(id) {
    setStudents(
      students.filter(student => student.id !== id)
    );
  }

  return (
    <div className="container">

      <h1>Student Registration System</h1>

      <div className="form-box">

        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Register Number"
            value={regno}
            onChange={e => setRegno(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <select
            value={department}
            onChange={e => setDepartment(e.target.value)}
            required
          >
            <option value="">Select Department</option>
            <option value="AI & DS">AI & DS</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
          </select>

          <button type="submit">
            Register Student
          </button>

        </form>

      </div>

      <div className="student-section">

        <h2>Registered Students ({students.length})</h2>

        {students.length === 0 ? (
          <p>No students registered yet.</p>
        ) : (

          students.map(student => (

            <div className="student-card" key={student.id}>

              <h3>{student.name}</h3>

              <p>Register Number: {student.regno}</p>
              <p>Email: {student.email}</p>
              <p>Department: {student.department}</p>

              <button
                className="delete-btn"
                onClick={() => deleteStudent(student.id)}
              >
                Delete
              </button>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default App;
