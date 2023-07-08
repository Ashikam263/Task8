// import React, { useState } from 'react';
// function ViewMarks() {
//   const [marksAdded, setMarksAdded] = useState(false);
//   const [subjectName, setSubjectName] = useState('');
//   const [firstInternalMark, setFirstInternalMark] = useState('');
//   const [secondInternalMark, setSecondInternalMark] = useState('');
//   const [externalMark, setExternalMark] = useState('');

//   const handleAddMarks = () => {
//     // Add code to add marks to the table.js file
//     setMarksAdded(true);
//   };

//   return (
//     <div>
//       <h2>View Marks</h2>
//       {!marksAdded && (
//         <div>
//           <p>No marks added</p>
//           <button onClick={() => setMarksAdded(true)}>Add Marks</button>
//         </div>
//       )}
//       {marksAdded && (
//         <div>
//           <form onSubmit={handleAddMarks}>
//             <label htmlFor="subject">Subject</label>
//             <input type="text" id="subject" value={subjectName} onChange={(e) => setSubjectName(e.target.value)} />
//             <label htmlFor="first-internal-mark">First Internal Mark</label>
//             <input
//               type="number"
//               id="first-internal-mark"
//               value={firstInternalMark}
//               onChange={(e) => setFirstInternalMark(e.target.value)}
//             />
//             <label htmlFor="second-internal-mark">Second Internal Mark</label>
//             <input
//               type="number"
//               id="second-internal-mark"
//               value={secondInternalMark}
//               onChange={(e) => setSecondInternalMark(e.target.value)}
//             />
//             <label htmlFor="external-mark">External Mark</label>
//             <input type="number" id="external-mark" value={externalMark} onChange={(e) => setExternalMark(e.target.value)} />
//             <button type="submit">Add</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }
// export default ViewMarks;


import { useState,useEffect } from "react";
import Modal from "./Modal";
import Text from "./Titile.js";


const ViewMarks = () => {
    const [mark,setMark] = useState(null);
    var grandTotal =0; 
    var CGPA =0;
    
    useEffect(() => {
        fetch("")
        .then(res =>{
            return res.json();
        })
        .then(mark => {
            const new_mark=mark.filter((mark)=> mark.id === id)
            setMark(new_mark);
        })  
    },[]);


         const AddTitle= () =>{
            if(mark !== null){
                if(mark.length===0) {
                    return true;}
                else{ 
                return false;}
            }
            else{ 
                return true;
            }
        };

        // const toAddData= () =>{
        //     if(mark !== null){
        //         if(mark.length===0) {
        //             return false;}
        //         else{ 
        //         return true;}
        //     }
        //     else{ 
        //         return false;
        //     }
        // };
        
        const cgpa= ()=>{
            if(mark !== null)
            {mark.map((mark,key)=>{
           // var Key =parseInt(mark.key);
            var fir =mark.internal1;
            var sec =mark.internal2;
            var exter =mark.external;
            var Total =(parseInt(mark.external)+parseInt(mark.internal1)+parseInt(mark.internal2))/100;
            grandTotal += Total;
            CGPA =grandTotal/(key+1);
            })
            return CGPA*10 ;
        }
     }
        

    return (   
        <div className="main">
           {AddTitle() &&<Title title="No Marks Added"/>}
            <form className="details"> 
              <Modal />
            </form>

            {toAddData() && <div className="tableHandle">
                <table className="table">
                    <thead>
                        <tr>
                            <th>No:</th>
                            <th>Subject</th>
                            <th>Internal 1</th>
                            <th>Internal 2</th>
                            <th>External </th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody> 
              
                     {mark.map((mark,key)=>(
                        <tr key={key}>
                            <td>{key+1}</td>
                            <td>{mark.subject}</td>
                            <td>{parseInt(mark.internal1)}</td>
                            <td>{parseInt(mark.internal2)}</td>
                            <td>{parseInt(mark.external)}</td>
                            <td>{parseInt(mark.external)+parseInt(mark.internal1)+parseInt(mark.internal2)}</td>
                         </tr>
                        )
                    )}
                        <tr>
                            <td>cgpa</td>
                            <td></td> 
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{cgpa(mark)}</td>
                        </tr>
                    </tbody>  
                </table>    
            </div>}
        </div>
     );
}

export default ViewMarks;
 