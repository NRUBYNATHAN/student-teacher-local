


import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export function EditTeacher() {
  const {id}=useParams()
  const[teacher,setTeacher]=useState(null)
  useEffect(()=>{
    fetch(`https://63f35a37de3a0b242b40475c.mockapi.io/teacher/${id}`)
    .then((data)=>data.json())
    .then((teacs)=>setTeacher(teacs))
  },[id])
  console.log(teacher)
  return(
    <div>
      {teacher ?<EditForm teacher={teacher}/> :<h1>loading...</h1>}
    </div>
  );
function EditForm(){
  const navigate=useNavigate()
 

  const formValidationSchema=yup.object({
    image:yup.string().required().url(),
    name:yup.string().required(),
    age:yup.number().required(),
    email:yup.string().required().email(),
    phone:yup.number().required().min(10),
    qualification:yup.string().required(),
    experiance:yup.string().required(),
  })
  const {handleBlur,handleChange,handleSubmit,values,touched,errors}=useFormik({
    initialValues:{
      image:teacher.image,
      name:teacher.name,
      age:teacher.age,
      email:teacher.email,
      phone:teacher.phone,
      qualification:teacher.qualification,
      experiance:teacher.experiance,
    },
    validationSchema:formValidationSchema,
    onSubmit:(updatetedstnd)=>{
      AddTeacher(updatetedstnd)
    }
  })
  const AddTeacher=async(updatetedstnd)=>{
await fetch(`https://63f35a37de3a0b242b40475c.mockapi.io/teacher/${teacher.id}`,{
  method:"PUT",
  body:JSON.stringify(updatetedstnd),
  headers:{"Content-Type": "application/json",},
})
navigate("/teacherlist")
  }
  
  return (
  
<form onSubmit={handleSubmit}>
  <div className="Add">
<TextField 
name='image'
onChange={handleChange} 
onBlur={handleBlur}
value={values.image} 
label="image url" 
variant="outlined" 
placeholder="image"
error={touched.image && errors.image}
helperText={touched.image && errors.image?errors.image:null}
/>
<TextField 
name='name'
onChange={handleChange} 
onBlur={handleBlur}
value={values.name} 
label="name" 
variant="outlined" 
placeholder="name"
error={touched.name && errors.name}
helperText={touched.name && errors.name?errors.name:null}

/>
<TextField 
name='age'
onChange={handleChange} 
onBlur={handleBlur}
value={values.age} 
label="age" 
variant="outlined" 
placeholder="age"
error={touched.age && errors.age}
helperText={touched.age && errors.age?errors.age:null}
/>
<TextField 
name='email'
onChange={handleChange} 
onBlur={handleBlur}
value={values.email} 
label="email" 
variant="outlined" 
placeholder="email"
error={touched.email && errors.email}
helperText={touched.email && errors.email?errors.email:null}
/>
<TextField 
name='phone'
onChange={handleChange} 
onBlur={handleBlur}
value={values.phone} 
label="phone" 
variant="outlined" 
placeholder="phone"
error={touched.phone && errors.phone}
helperText={touched.phone && errors.phone?errors.phone:null}
/>
<TextField 
name='qualification'
onChange={handleChange} 
onBlur={handleBlur}
value={values.qualification} 
label="qualification" 
variant="outlined" 
placeholder="qualification"
error={touched.qualification && errors.qualification}
helperText={touched.qualification && errors.qualification?errors.qualification:null}
/>
<TextField 
name='experiance'
onChange={handleChange} 
onBlur={handleBlur}
value={values.experiance} 
label="experiance" 
variant="outlined" 
placeholder="experiance"
error={touched.experiance && errors.experiance}
helperText={touched.experiance && errors.experiance?errors.experiance:null}
/>

<Button type ="submit" variant="contained" color="success">SAVE TEACHER</Button>

</div>
   </form>
  );
}
}