import React, { useState } from 'react';

function Home() {
  const [students, setStudents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentName = e.target.elements.student.value;
    setStudents([...students, { id: students.length + 1, name: studentName }]);
    e.target.elements.student.value = '';
  };

  return (
    <div>
      <h2>Students</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="student">Enter student name</label>
        <input type="text" id="student" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {students.map((student) => {
          return (
            <li key={student.id}>
              {student.name} <button>View Marks</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
