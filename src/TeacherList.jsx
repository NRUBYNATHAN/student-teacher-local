import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Teacher } from "./Teacher";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
export function TeacherList() {

const [teacherList, setTeacherList] = useState([])
  const getTeacher=()=>{
    fetch("https://63f35a37de3a0b242b40475c.mockapi.io/teacher")
    .then((data)=>data.json())
    .then((stns)=>setTeacherList(stns))
  }
  useEffect(()=>getTeacher(),[])

  const deleteTeacher=(id)=>{
    console.log("...deleting",id)
    fetch(`https://63f35a37de3a0b242b40475c.mockapi.io/teacher/${id}`,{
      method:"DELETE",
    }).then(()=>getTeacher())
  }
  const navigate=useNavigate();

return (
    <div className="teacherlist">
      {teacherList.map((te) => 
      (<Teacher 
      key={te.id} 
      teacher={te} 
      deleteteacher={<IconButton color="error" onClick={()=>deleteTeacher(te.id)}><DeleteIcon/></IconButton>} 
      editteacher={<IconButton color="primary" onClick={()=>navigate(`/teacher/edit/${te.id}`)}><EditIcon/></IconButton>}/>))}

    </div>
  );
}
