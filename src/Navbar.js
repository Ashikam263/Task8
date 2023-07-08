import React from 'react';

function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <form className="nav-form">
          <label htmlFor="student">Enter student name</label>
          <input type="text" id="student" />
          <button type="submit">Add</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
