

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Student } from "./Student";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

export function StudentList() {
  const [studentlist, setStudentlist] = useState([])
  const getstudents=()=>{
    fetch("https://63f1f447aab7d09125fea092.mockapi.io/students")
    .then((data)=>data.json())
    .then((stns)=>setStudentlist(stns))
  }
  useEffect(()=>getstudents(),[])

  const deletestudent=(id)=>{
    console.log("...deleting",id)
    fetch(`https://63f1f447aab7d09125fea092.mockapi.io/students/${id}`,{
      method:"DELETE",
    }).then(()=>getstudents())
  }
  const navigate=useNavigate();

return (

  <div>
     <div className="studentlist">
        {studentlist.map((list) => 
        (<Student 
          key={list.id}
        id={list.id} 
        student={list} 
        deletebutton={<IconButton  color="error" onClick={()=>deletestudent(list.id)}><DeleteIcon/></IconButton>}
        editbutton={<IconButton color="primary" onClick={()=>navigate(`/student/edit/${list.id}`)}><EditIcon/></IconButton>}
        />))}
      </div>
   </div>
  );
}

