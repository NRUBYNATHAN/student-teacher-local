import "./App.css";
import { StudentList } from "./StudentList";
import { Routes, Route,useNavigate } from "react-router-dom";
import { AddStudent } from "./AddStudent";
import { Home } from "./Home";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Edit } from "./Edit";
import { TeacherList } from "./TeacherList";
import { AddTeacher } from "./AddTeacher";
import { EditTeacher } from "./EditTeacher";





export default function App(){

 
  const navigate=useNavigate()
  return(
    <div>
      <AppBar position="static">
        <Toolbar>
           <Button onClick={()=>navigate("/")} color="inherit">HOME</Button>
           <Button onClick={()=>navigate("/studentlist")} color="inherit">STUDENT</Button>
           <Button onClick={()=>navigate("/addstudent")} color="inherit">ADD STUDENT</Button>
           <Button onClick={()=>navigate("/teacherlist")} color="inherit">TEACHER</Button>
           <Button onClick={()=>navigate("/addteacher")} color="inherit">ADD TEACHER</Button>
        </Toolbar>
      </AppBar>
    
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studentlist" element={<StudentList />} />
        <Route path="/addstudent" element={<AddStudent/>}/>
        <Route path="/student/edit/:id" element={<Edit />} />
        <Route path="/teacherlist" element={ <TeacherList />} />
        <Route path="/addteacher" element={ <AddTeacher />} />
        <Route path="/teacher/edit/:id" element={<EditTeacher />} />
      </Routes>
     
      
    </div>
  )
}

