import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Modal from './Modal';
import ViewMarks from './ViewMarks';

function App() {
  return (
    <div>
      <Home />
      <Modal />
      <ViewMarks />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
