import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import MyModal from "./MyModal";
import Title from "./Title";

const ViewMarks = () => {
  const [mark, setMark] = useState(null);
  const { id } = useParams();
  var grandTotal = 0;
  var CGPA = 0;

  useEffect(() => {
    fetch("http://localhost:8000/mark/")
      .then((res) => {
        return res.json();
      })
      .then((mark) => {
        const newMark = mark.filter((mark) => mark.mark_id === id);
        setMark(newMark);
      });
  }, []);

  const toAddTitle = () => {
    if (mark !== null) {
      if (mark.length === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };

  const toAddData = () => {
    if (mark !== null) {
      if (mark.length === 0) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
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
      {toAddTitle() && <Title title="No Marks Added"/>}

      <form className="details">
        <MarkModal />
      </form>

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

// import { useState,useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Modal from "./MyModal"
// import Title from "./Title";

// const ViewMarks = () => {
//     const [mark,setMark] = useState(null);
//     const {id} = useParams();
//     var grandTotal =0; 
//     var CGPA =0;
    
//          const AddTitle= () =>{
//             if(mark !== null){
//                 if(mark.length===0) {
//                     return true;}
//                 else{ 
//                 return false;}
//             }
//             else{ 
//                 return true;
//             }
//         };

//         const toAddData= () =>{
//             if(mark !== null){
//                 if(mark.length===0) {
//                     return false;}
//                 else{ 
//                 return true;}
//             }
//             else{ 
//                 return false;
//             }
//         };
        
//         const cgpa = () => {
//             if (mark !== null) {
//               mark.map((mark, key) => {
//                 var first = mark.internal1;
//                 var second = mark.internal2;
//                 var ext = mark.external;
//                 var Total = (parseInt(mark.external) + parseInt(mark.internal1) + parseInt(mark.internal2)) / 100;
//                 grandTotal += Total;
//                 CGPA = grandTotal / mark.length;
//               });
//               return CGPA * 10;
//             }
//           };
          

//      useEffect(() => {
//       fetch("http://localhost:8000/mark")
//       .then(res =>{
//           return res.json();
//       })
//       .then(mark => {
//           const update = mark.filter((mark)=> mark.id === id)
//           setMark(update);
//       })  
//     },[]);
        

//     return (   
//         <div className="main">
//            {AddTitle() &&<Title title="No Marks Added"/>}
//             <form className="details"> 
//               <Modal />
//             </form>

//             {toAddData() && <div className="tableHandle">
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>No:</th>
//                             <th>Subject</th>
//                             <th>Internal 1</th>
//                             <th>Internal 2</th>
//                             <th>External </th>
//                             <th>Total</th>
//                         </tr>
//                     </thead>
//                     <tbody> 
              
//                      {mark.map((mark,key)=>(
//                         <tr key={key}>
//                             <td>{key+1}</td>
//                             <td>{mark.subject}</td>
//                             <td>{parseInt(mark.internal1)}</td>
//                             <td>{parseInt(mark.internal2)}</td>
//                             <td>{parseInt(mark.external)}</td>
//                             <td>{parseInt(mark.external)+parseInt(mark.internal1)+parseInt(mark.internal2)}</td>
//                          </tr>
//                         )
//                     )}
//                         <tr>
//                             <td>cgpa</td>
//                             <td></td> 
//                             <td></td>
//                             <td></td>
//                             <td></td>
//                             <td>{cgpa(mark)}</td>
//                         </tr>
//                     </tbody>  
//                 </table>    
//             </div>}
//         </div>
//      );
// }

// export default ViewMarks;
 