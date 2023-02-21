import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
export function Teacher({teacher,deleteteacher,editteacher}) {

  const[show,setShow]=useState(true)
  const styles={
    display:show ? "block" : "none"
  }
  return (
    <Card className="student">

      <img className="img" src={teacher.image} />

      <CardContent className="detail">
        <div className="name">
          <h1>NAME : <span className='col'>{teacher.name}</span></h1>
          <IconButton color="primary" onClick={()=>setShow(!show)}>{show ?<ExpandMoreIcon/>:<ExpandLessIcon/> }</IconButton>
          </div>
          <div style={styles}>
        <p className='age'>AGE :  <span className='col'>{teacher.age}</span></p>
        <p className='age'>EMAIL : <span className='col'>{teacher.email}</span> </p>
        <p className='age'>PHONE :  <span className='col'>{teacher.phone}</span></p>
        <p className='age'>QUALIFICATION : <span className='col'>{teacher.qualification}</span> </p>
        <p className='age'>EXPERIANCE :  <span className='col'>{teacher.experiance}</span></p>
        </div>{deleteteacher}{editteacher}
        </CardContent>
    </Card>
  );
}
