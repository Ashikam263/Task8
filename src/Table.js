import { useState ,useEffect } from "react";
import { Link } from 'react-router-dom';
import Title from "./Title";

const Table = () => {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    const data = {name};
    fetch("http://localhost:8000/data", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => {
      console.log("new name added");
    });
  };

  const AddTitle = () => {
    if (data !== null) {
      if (data.length === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <div className="main">
      {AddTitle() && <Title title="No Students Added"></Title>}
      <form className="details" onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Enter Student Name"
          value=""
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button className="btn btn-light">Add</button>
      </form>
      <div className="tableHandle">
        <table>
          {data && (
            <tbody>
              {data.map((data, key) => (
                <tr key={key}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td className="viewmarks">
                    <Link to={`/ViewMarks/${data.id}`}>
                      <button>View marks</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default Table;
