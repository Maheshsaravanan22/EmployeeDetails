import React,{useState} from 'react';
import "../assets/css/Employee.css";
import { 
    InputLabel,
    Container,
    Typography,
    FormControl,
    Input,
    Button,
} from '@mui/material';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from './Service/api';


const AddEmployee = () => {
  const[employee,setEmployee] = useState({});
  // const { name,email,mobile,designation } = employee;
  const[name,setName] = useState();
  const[email,setEmail] = useState();
  const[mobile,setMobile] = useState();
  const[designation,setDesignation] = useState();

 
  const navigate = useNavigate();

const onValueChange= (e) => {
  setEmployee({...employee,[e.target.name]:e.target.value});
}
const addEmployeeDetails = async() => {
 await addEmployee(employee);
 alert("Data Added Successfully");
  navigate("/AllEmployee");
}
 const cancelClick = () => {
  navigate("/")
 }

  return (
    <div>
    <Navbar/>
    <Container className='main-container' style={{marginBottom:"10px"}}>
   
        <Typography variant="h4">Add Employee</Typography>
        <FormControl className='form-control-main'>
          <InputLabel>Name</InputLabel>
          <Input className='input'
           onChange={onValueChange}
           name="name"
           value={name}/>
        </FormControl >
        <FormControl className='form-control-main'>
          <InputLabel>Email</InputLabel>
          <Input className='input' 
          onChange={onValueChange}
          name="email" 
          value={email}/>
        </FormControl>
        <FormControl className='form-control-main'>
          <InputLabel>Contact No</InputLabel>
          <Input className='input' 
          onChange={onValueChange}
          name="mobile"
          value={mobile}/>
        </FormControl>
        <FormControl className='form-control-main'>
          <InputLabel>Designation</InputLabel>
          <Input className='input' 
          onChange={onValueChange}
          name="designation"
          value={designation}/>
        </FormControl>
        <FormControl className='form-control-main'>
        <Button variant="contained" className='add-button' onClick={addEmployeeDetails}>Add Employee</Button>
        </FormControl>
        <FormControl className='form-control-main'>
        <Button variant="contained" className='add-button' onClick={cancelClick}>Cancel</Button>
        </FormControl>
    </Container>
    </div>
  )
}

export default AddEmployee