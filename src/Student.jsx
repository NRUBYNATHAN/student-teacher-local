import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';


export function Student({ student,deletebutton,editbutton}) {
  const [show, setShow] = useState(true);
  const shows = {
    display: show ? "block" : "none"
  };
  return (

    <Card className="student">
      <img className="img" src={student.image} />
      <CardContent className="detail">
        <div className="name">
          <h2>NAME: {student.name}</h2>
          <IconButton onClick={() => setShow(!show)} color="primary">
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </div>
        <div style={shows}>
          <p>AGE: {student.age}</p>
          <p>REG_NO: {student.regno}</p>
          <p>EMAIL: {student.email}</p>
          <p>PH: {student.phone}</p>
          <p>DEG: {student.deg}</p>
        </div>
        {deletebutton}{editbutton}
      </CardContent>
    </Card>

  );
}
