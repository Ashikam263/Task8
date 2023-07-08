import React, { useState } from 'react';

function ViewMarks() {
  const [marksAdded, setMarksAdded] = useState(false);
  const [subjectName, setSubjectName] = useState('');
  const [firstInternalMark, setFirstInternalMark] = useState('');
  const [secondInternalMark, setSecondInternalMark] = useState('');
  const [externalMark, setExternalMark] = useState('');

  const handleAddMarks = () => {
    // Add code to add marks to the table.js file
    setMarksAdded(true);
  };

  return (
    <div>
      <h2>View Marks</h2>
      {!marksAdded && (
        <div>
          <p>No marks added</p>
          <button onClick={() => setMarksAdded(true)}>Add Marks</button>
        </div>
      )}
      {marksAdded && (
        <div>
          <form onSubmit={handleAddMarks}>
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
    </div>
  );
}

export default ViewMarks;
