import React, { useState } from 'react';

function Modal() {
  const [marksAdded, setMarksAdded] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [subjectName, setSubjectName] = useState('');
  const [firstInternalMark, setFirstInternalMark] = useState('');
  const [secondInternalMark, setSecondInternalMark] = useState('');
  const [externalMark, setExternalMark] = useState('');

  const handleAddMarks = () => {
    setShowModal(true);
  };

  const handleAddSubject = () => {
    const total = parseInt(firstInternalMark) + parseInt(secondInternalMark) + parseInt(externalMark);
    const cgpa = total / 100;
    setSubjects([
      ...subjects,
      {
        id: subjects.length + 1,
        name: subjectName,
        firstInternalMark,
        secondInternalMark,
        externalMark,
        total,
        cgpa,
      },
    ]);
    setShowModal(false);
    setSubjectName('');
    setFirstInternalMark('');
    setSecondInternalMark('');
    setExternalMark('');
    setMarksAdded(true);
  };

  return (
    <div>
      <h2>Student Marks</h2>
      {!marksAdded && (
        <div>
          <p>No marks added</p>
          <button onClick={() => setMarksAdded(true)}>Add Marks</button>
        </div>
      )}
      {marksAdded && (
        <div>
          <button onClick={handleAddMarks}>Add Subject</button>
          {showModal && (
            <div>
              <form onSubmit={handleAddSubject}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" value={subjectName} onChange={(e) => setSubjectName(e.target.value)} />
                <label htmlFor="first-internal-mark">First Internal Mark</label>
                <input
                  type="number"
                  id="first-internal-mark"
                  value={firstInternalMark}
                  onChange={(e) => setFirstInternalMark(e.target.value)}
                />
                <label htmlFor="second-internal-mark">Second Internal Mark</label>
                <input
                  type="number"
                  id="second-internal-mark"
                  value={secondInternalMark}
                  onChange={(e) => setSecondInternalMark(e.target.value)}
                />
                <label htmlFor="external-mark">External Mark</label>
                <input type="number" id="external-mark" value={externalMark} onChange={(e) => setExternalMark(e.target.value)} />
                <button type="submit">Add</button>
              </form>
            </div>
          )}
          {subjects.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>First Internal Mark</th>
                  <th>Second Internal Mark</th>
                  <th>External Mark</th>
                  <th>Total</th>
                  <th>CGPA</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject) => {
                  return (
                    <tr key={subject.id}>
                      <td>{subject.name}</td>
                      <td>{subject.firstInternalMark}</td>
                      <td>{subject.secondInternalMark}</td>
                      <td>{subject.externalMark}</td>
                      <td>{subject.total}</td>
                      <td>{subject.cgpa.toFixed(2)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

export default Modal;
