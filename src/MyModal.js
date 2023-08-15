import React from 'react';
import Modal from 'react-modal';
import { useState } from "react";
import { useParams } from 'react-router-dom';
import Link from 'react-router-dom/Link';

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

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div>
      <Link to={`/Mark/${id}`}>
        <button onClick={handleClick}>View Marks</button>
      </Link>
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
