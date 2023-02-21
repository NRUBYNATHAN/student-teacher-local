import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export function Edit() {
  const {id}=useParams()
  const[student,setStudent]=useState(null)
  useEffect(()=>{
    fetch(`https://63f1f447aab7d09125fea092.mockapi.io/students/${id}`)
    .then((data)=>data.json())
    .then((stns)=>setStudent(stns))
  },[id])
  console.log(student)
  return(
    <div>
      {student ?<EditForm student={student}/> :<h1>loading...</h1>}
    </div>
  );
function EditForm(){
const navigate=useNavigate();
const formvalidationSchema=yup.object({
  image:yup.string().required().url(),
  name:yup.string().required(),
  age:yup.number().required(),
  regno:yup.number().required(),
  email:yup.string().required().email(),
  phone:yup.number().required().min(10),
  deg:yup.string().required(),
})
  const {handleSubmit,handleBlur,handleChange,values,touched,errors} = useFormik({
    initialValues:{
      image:student.image,
      name:student.name,
      age:student.age,
      regno:student.regno,
      email:student.email,
      phone:student.phone,
      deg:student.deg,

    },
    validationSchema:formvalidationSchema,
    onSubmit:(updatetedstnd)=>{
   
    updateStudent(updatetedstnd)
  }
    
  })

  const updateStudent=async(updatetedstnd)=>{
 
await fetch(`https://63f1f447aab7d09125fea092.mockapi.io/students/${student.id}`,{
method:"PUT",
body:JSON.stringify(updatetedstnd),
headers:{"Content-Type": "application/json",},
})
    navigate("/StudentList");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="Add">
        <TextField
         name="image"
         onChange={handleChange}
         onBlur={handleBlur}
          value={values.image} 
          label="image url" 
          variant="outlined" 
          error={touched.image && errors.image }
          helperText= {touched.image && errors.image ?errors.image:null}/>
         
        <TextField
       name="name"
       onChange={handleChange}
       onBlur={handleBlur}
        value={values.name} 
          label="name" 
          variant="outlined"
          error={touched.name && errors.name }
          helperText= {touched.name && errors.name ?errors.name:null} />
          
        <TextField 
       name="age"
       onChange={handleChange}
       onBlur={handleBlur}
        value={values.age}  
        label="age" 
        variant="outlined"
        error={touched.age && errors.age }
          helperText= {touched.age && errors.age ?errors.age:null} />
        
        <TextField 
        name="regno"
        onChange={handleChange}
        onBlur={handleBlur}
         value={values.regno} 
          label="regno"
           variant="outlined" 
           error={touched.regno && errors.regno }
          helperText= {touched.regno && errors.regno ?errors.regno:null}/>
           
        <TextField 
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
         value={values.email} 
          label="email" 
          variant="outlined" 
          error={touched.email && errors.email }
          helperText= {touched.email && errors.email ?errors.email:null}/>
          
        <TextField
       name="phone"
       onChange={handleChange}
       onBlur={handleBlur}
        value={values.phone} 
           label="phone"
            variant="outlined"
            error={touched.phone && errors.phone }
          helperText= {touched.phone && errors.phone?errors.phone:null} />
            
        <TextField 
       name="deg"
       onChange={handleChange}
       onBlur={handleBlur}
        value={values.deg} 
          label="degree" 
          variant="outlined" 
          error={touched.deg && errors.deg}
          helperText=   {touched.deg && errors.deg ?errors.deg:null}/>
        


        <Button
          variant="contained"
         color="success"
         type="submit">
          SAVE
        </Button>
      </div>
    </form>
  );
}
}