import React, { useState } from "react";
import ReactDOM from "react-dom";

function Home() {
  const [students, setStudents] = useState([]);

  const handleAdd = () => {
    const studentName = document.getElementById("studentName").value;
    if (studentName === "") {
      return;
    }

    setStudents([...students, {
      index: students.length + 1,
      name: studentName,
    }]);
  };

  return (
    <div>
      <h1>Students List</h1>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.index}</td>
              <td>{student.name}</td>
              <td>
                <button>View Marks</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <input
        type="text"
        id="studentName"
        placeholder="Enter student name"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}