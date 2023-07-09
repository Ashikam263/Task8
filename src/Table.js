import { useState ,useEffect } from "react";
import { Link  } from 'react-router-dom';
import Title from "./Title.js";

const Table = () => {
    const [data,setData]  = useState(null);
    const [name,setName] =useState(" ")

    const handleSubmit = (e) => {
        const data ={name};
        fetch("",{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body : JSON.stringify(data)
        }).then(() =>{
            console.log("new name added");
        })
    };
    const AddTitle= () =>{
        if(data !== null){
            if(data.length===0) {
                return true;}
            else{ 
            return false;}
        }
        else{ 
            return true;
        }
    };
    useEffect(() =>{
        console.log("use effect ran");
        fetch("")
            .then(res =>{
                return res.json();
            })
            .then(data => {
                setData(data);
            })
    },[]);

    return ( 
        <div className="main">
             {AddTitle() && <Title title="No Students Added"></Title>}
            <form className="Details"onSubmit={handleSubmit}>
                <input type="text" required placeholder="Enter Student NAme" value={name}
                onChange={(e) => {
                setName(e.target.value)
                }}/>
                <button>Add</button> 
            </form>
            <div className="tableHandle">
                <table>
                    {data && <tbody>
                        {data.map((data, key) => (
                            <tr key={key}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td className="viewmarks">{<Link to={`/ViewMarks/${data.id}`}><button >View marks</button></Link>}</td>
                            </tr>
                        )
                        )}
                    </tbody>}
                </table> 
            </div>
        </div>
     );
}
 
export default Table;
