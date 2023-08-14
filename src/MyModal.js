import React from 'react';
import Modal from '@mui/material/Modal';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const MyModal = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const { id } = useParams();
  const mark_id = id;

  const [subject, setSubject] = useState('');
  const [internal1, setinternal1] = useState('');
  const [internal2, setinternal2] = useState('');
  const [external, setexternal] = useState('');

  const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    height: 400,
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mark = { subject, internal1, internal2, external, mark_id };

    fetch('http://localhost:8000/mark', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mark),
    })
      .then(() => {
        console.log('new marks added');
        console.log(mark);
      })
      .then(() => {
        handleClose();
      });
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>Add Marks</button>
      <Modal
        onClose={handleClose}
        open={open}
        sx={style}
      >
        <div>
          <div className="modal-header">
            <h1 className="modal-title">Enter Marks</h1>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>SUBJECT:</label>
                <input
                  type="text"
                  className="form-control"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>First internal mark(25): </label>
                <input
                  type="number"
                  className="form-control"
                  value={internal1}
                  onChange={(e) => setinternal1(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Second internal mark(25):</label>
                <input
                  type="number"
                  className="form-control"
                  value={internal2}
                  onChange={(e) => setinternal2(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>External mark(50): </label>
                <input
                  type="number"
                  className="form-control"
                  value={external}
                  onChange={(e) => setexternal(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MyModal;

// import React, { useState, useEffect } from "react";
// import { Modal } from "react-modal/lib";
// import { useParams } from "react-router-dom";

// const MyModal = () => {
//   const [open, setOpen] = useState(false);
//   const [mark, setMark] = useState([]);
//   const [markId, setMarkId] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:8000/mark/" + markId)
//       .then((res) => res.json())
//       .then((data) => {
//         setMark(data);
//       });
//   }, [markId]);

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newMark = {
//       subject: e.target.elements.subject.value,
//       internal1: e.target.elements.internal1.value,
//       internal2: e.target.elements.internal2.value,
//       external: e.target.elements.external.value,
//     };
//     fetch("http://localhost:8000/mark", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newMark),
//     }).then(() => {
//       document.body.click();
//     });
//   };

//   return (
//     <div>
//       <button type="button" onClick={handleOpen}>Add Marks</button>
//       <Modal
//         onClose={handleClose}
//         open={open}
//         aria-labelledby="modal-title"
//         aria-describedby="modal-body"
//       >
//         <div>
//           <div className="modal-header">
//             <h2 id="modal-title">Enter Marks</h2>
//             <button type="button" onClick={handleClose} aria-label="Close">
//               <span aria-hidden="true">&times;</span>
//             </button>
//           </div>
//           <div className="modal-body" id="modal-body">
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label >SUBJECT:</label>
//                 <input type="text"
//                   className="form-control"
//                   value={mark.subject}
//                   onChange={(e) => setMark({ ...mark, subject: e.target.value })}
//                   required/>
//               </div>
//               <div className="form-group">
//                 <label >First internal mark: </label>
//                 <input type="number"
//                   className="form-control"
//                   value={mark.internal1}
//                   onChange={(e) => setMark({ ...mark, internal1: e.target.value })}
//                   required/>
//               </div>
//               <div className="form-group">
//                 <label >Second internal mark:</label>
//                 <input type="number"
//                   className="form-control"
//                   value={mark.internal2}
//                   onChange={(e) => setMark({ ...mark, internal2: e.target.value })}
//                   required/>
//               </div>
//               <div className="form-group">
//                 <label >External mark: </label>
//                 <input type="number"
//                   className="form-control"
//                   value={mark.external}
//                   onChange={(e) => setMark({ ...mark, external: e.target.value })}
//                   required/>
//               </div>
//               <button>Submit</button>
//             </form>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default MyModal;