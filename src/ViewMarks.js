import React, { useState, useEffect, useParams } from "react";
import Title from "./Title";

const ViewMarks = () => {
  const [mark, setMark] = useState(null);
  const { id } = useParams();
  var grandTotal = 0;
  var CGPA = 0;
  const [isStudentsAdded, setIsStudentsAdded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8000/mark/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((mark) => {
        setMark(mark);
        setIsStudentsAdded(mark !== null);
      });
  }, []);

  const toAddTitle = () => {
    return !isStudentsAdded;
  };

  const toAddData = () => {
    return isStudentsAdded;
  };

  const cgpa = () => {
    if (mark !== null) {
      mark.forEach((mark, key) => {
        var int1 = mark.internal1;
        var int2 = mark.internal2;
        var ext = mark.external;
        var Total = (parseInt(mark.external) + parseInt(mark.internal1) + parseInt(mark.internal2)) / 100;
        grandTotal += Total;
        CGPA = grandTotal / (key + 1);
      });
      return Math.floor(CGPA * 10);
    }
  };

  return (
    <div className="main">
      {toAddTitle() && (
        <Title title="No Students Added"/>
      )}

      {toAddData() && (
        <div className="tableHandle">
          <table className="list">
            <thead>
              <tr>
                <th>No:</th>
                <th>Subject</th>
                <th>Internal 1</th>
                <th>Internal 2</th>
                <th>External</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {mark.map((mark, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{mark.subject}</td>
                  <td>{parseInt(mark.internal1)}</td>
                  <td>{parseInt(mark.internal2)}</td>
                  <td>{parseInt(mark.external)}</td>
                  <td>{parseInt(mark.external) + parseInt(mark.internal1) + parseInt(mark.internal2)}</td>
                </tr>
              ))}
              <tr>
                <td>cgpa</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{cgpa()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewMarks;
