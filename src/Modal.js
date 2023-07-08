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

import  React from 'react';
import { useState } from "react";
import Modal from '@mui/material/Modal';

const Modal = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    const mark_id=  id;
  
    const [subject,setSubject] =useState(" ");
    const [internal1,setinternal1] =useState(" ");
    const [internal2,setinternal2] =useState(" ");
    const [external,setexternal] =useState(" ");
   

    const handleSubmit = (e) => {
        const Mark ={subject,internal1,internal2,external,mark_id};
        
        fetch("",{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body : JSON.stringify(Mark)
        }).then(() =>{
             handleClose();
        })
    };    
    
    return ( 
        <div>
            <button type="button" onClick={handleOpen}>Add Marks</button>
            <Modal onClose={handleClose} open={open} >
                <div>
                    <div className="modal-header">
                        <h1 className="modal-title">Enter Marks</h1>
                    </div>
                    <div className="modal-body" >
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label >SUBJECT:</label>
                                <input type="text"
                                className="form-control"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required/>
                            </div>
                            <div className="form-group">
                                <label >First internal mark: </label>
                                <input  
                                className="form-control"
                                value={internal1}
                                onChange={(e) => setint1(e.target.value)}
                                required/>
                            </div>
                            <div className="form-group">
                                <label >Second internal mark:</label>
                                <input type="number" 
                                className="form-control"
                                value={internal2}
                                onChange={(e) => setint2(e.target.value)}
                                required/>
                            </div>
                            <div className="form-group">
                                <label >External mark: </label>
                                <input type="number" 
                                    className="form-control"
                                    value={external}
                                    onChange={(e) => setext(e.target.value)}
                                    required/>
                            </div>
                            <button>Submit</button>
                        </form>    
                    </div>
                </div>    

            </Modal>
        </div>

    );
}
    export default Modal;