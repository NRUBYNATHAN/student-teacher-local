import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export function AddStudent() {
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
      image:"",
      name:"",
      age:"",
      regno:"",
      email:"",
      phone:"",
      deg:"",

    },
    validationSchema:formvalidationSchema,
    onSubmit:(newStudent)=>{
   
    addStudent(newStudent)}
    
  })
  const addStudent=async(newStudent)=>{
 
await fetch("https://63f1f447aab7d09125fea092.mockapi.io/students",{
method:"POST",
body:JSON.stringify(newStudent),
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
         
         type="submit">
          ADD MOVIE
        </Button>
      </div>
    </form>
  );
}
