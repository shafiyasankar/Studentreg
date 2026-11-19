
function StudentList({ students, deleteStudent }) {
  return (
    <div className="list-container">

      <h2>Registered Students</h2>

      {students.length === 0 ? (
        <p className="empty">No students registered yet.</p>
      ) : (

        <div className="student-grid">

          {students.map((student) => (

            <div className="student-card" key={student.id}>

              <h3>{student.name}</h3>

              <p><b>Register No:</b> {student.regno}</p>
              <p><b>Email:</b> {student.email}</p>
              <p><b>Phone:</b> {student.phone}</p>
              <p><b>Department:</b> {student.department}</p>
              <p><b>Year:</b> {student.year}</p>
              <p><b>Gender:</b> {student.gender}</p>

              <button
                className="delete-btn"
                onClick={() => deleteStudent(student.id)}
              >
                Delete
              </button>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default StudentList;
