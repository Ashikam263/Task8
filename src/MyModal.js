// import React, { useState } from 'react';

// function Modal() {
//   const [marksAdded, setMarksAdded] = useState(false);
//   const [subjects, setSubjects] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [subjectName, setSubjectName] = useState('');
//   const [firstInternalMark, setFirstInternalMark] = useState('');
//   const [secondInternalMark, setSecondInternalMark] = useState('');
//   const [externalMark, setExternalMark] = useState('');

//   const handleAddMarks = () => {
//     setShowModal(true);
//   };

//   const handleAddSubject = () => {
//     const total = parseInt(firstInternalMark) + parseInt(secondInternalMark) + parseInt(externalMark);
//     const cgpa = total / 100;
//     setSubjects([
//       ...subjects,
//       {
//         id: subjects.length + 1,
//         name: subjectName,
//         firstInternalMark,
//         secondInternalMark,
//         externalMark,
//         total,
//         cgpa,
//       },
//     ]);
//     setShowModal(false);
//     setSubjectName('');
//     setFirstInternalMark('');
//     setSecondInternalMark('');
//     setExternalMark('');
//     setMarksAdded(true);
//   };

//   return (
//     <div>
//       <h2>Student Marks</h2>
//       {!marksAdded && (
//         <div>
//           <p>No marks added</p>
//           <button onClick={() => setMarksAdded(true)}>Add Marks</button>
//         </div>
//       )}
//       {marksAdded && (
//         <div>
//           <button onClick={handleAddMarks}>Add Subject</button>
//           {showModal && (
//             <div>
//               <form onSubmit={handleAddSubject}>
//                 <label htmlFor="subject">Subject</label>
//                 <input type="text" id="subject" value={subjectName} onChange={(e) => setSubjectName(e.target.value)} />
//                 <label htmlFor="first-internal-mark">First Internal Mark</label>
//                 <input
//                   type="number"
//                   id="first-internal-mark"
//                   value={firstInternalMark}
//                   onChange={(e) => setFirstInternalMark(e.target.value)}
//                 />
//                 <label htmlFor="second-internal-mark">Second Internal Mark</label>
//                 <input
//                   type="number"
//                   id="second-internal-mark"
//                   value={secondInternalMark}
//                   onChange={(e) => setSecondInternalMark(e.target.value)}
//                 />
//                 <label htmlFor="external-mark">External Mark</label>
//                 <input type="number" id="external-mark" value={externalMark} onChange={(e) => setExternalMark(e.target.value)} />
//                 <button type="submit">Add</button>
//               </form>
//             </div>
//           )}
//           {subjects.length > 0 && (
//             <table>
//               <thead>
//                 <tr>
//                   <th>Subject</th>
//                   <th>First Internal Mark</th>
//                   <th>Second Internal Mark</th>
//                   <th>External Mark</th>
//                   <th>Total</th>
//                   <th>CGPA</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {subjects.map((subject) => {
//                   return (
//                     <tr key={subject.id}>
//                       <td>{subject.name}</td>
//                       <td>{subject.firstInternalMark}</td>
//                       <td>{subject.secondInternalMark}</td>
//                       <td>{subject.externalMark}</td>
//                       <td>{subject.total}</td>
//                       <td>{subject.cgpa.toFixed(2)}</td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Modal;

import React, { useState, useEffect } from "react";
import { Modal } from "react-modal/lib";
import { useParams } from "react-router-dom";

const MyModal = () => {
  const [open, setOpen] = useState(false);
  const [mark, setMark] = useState([]);
  const [markId, setMarkId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/mark/" + markId)
      .then((res) => res.json())
      .then((data) => {
        setMark(data);
      });
  }, [markId]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMark = {
      subject: e.target.elements.subject.value,
      internal1: e.target.elements.internal1.value,
      internal2: e.target.elements.internal2.value,
      external: e.target.elements.external.value,
    };
    fetch("http://localhost:8000/mark", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMark),
    }).then(() => {
      document.body.click();
    });
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>Add Marks</button>
      <Modal
        onClose={handleClose}
        open={open}
        aria-labelledby="modal-title"
        aria-describedby="modal-body"
      >
        <div>
          <div className="modal-header">
            <h2 id="modal-title">Enter Marks</h2>
            <button type="button" onClick={handleClose} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body" id="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label >SUBJECT:</label>
                <input type="text"
                  className="form-control"
                  value={mark.subject}
                  onChange={(e) => setMark({ ...mark, subject: e.target.value })}
                  required/>
              </div>
              <div className="form-group">
                <label >First internal mark: </label>
                <input type="number"
                  className="form-control"
                  value={mark.internal1}
                  onChange={(e) => setMark({ ...mark, internal1: e.target.value })}
                  required/>
              </div>
              <div className="form-group">
                <label >Second internal mark:</label>
                <input type="number"
                  className="form-control"
                  value={mark.internal2}
                  onChange={(e) => setMark({ ...mark, internal2: e.target.value })}
                  required/>
              </div>
              <div className="form-group">
                <label >External mark: </label>
                <input type="number"
                  className="form-control"
                  value={mark.external}
                  onChange={(e) => setMark({ ...mark, external: e.target.value })}
                  required/>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MyModal;