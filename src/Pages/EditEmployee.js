import React, { useState, useEffect } from 'react';
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
import { useNavigate, useParams } from 'react-router-dom';
import { getEmployee, editEmployee } from './Service/api';


const EditEmployee = () => {
    const [employee, setEmployee] = useState({
        name:'',
        email:'',
        mobile:'',
        designation:''
    });
    // const { name,email,mobile,designation } = employee;

    const navigate = useNavigate();

  
    const { id } = useParams();


    const cancelClick = () => {
        navigate("/")
    }
    useEffect(() => {
        getEmployeeData();
    },[])


    const getEmployeeData = async () => {
        let response = await getEmployee(id);
        setEmployee(response.data);
    }

    const EditEmployeeDetails = async () => {
        await editEmployee(employee, id);
        alert("Data Edited Successfully");
        navigate("/AllEmployee");
    }
    const onValueChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <Navbar />
            <Container className='main-container'>

                <Typography variant="h4">Edit Employee</Typography>
                <FormControl className='form-control-main'>
                    <InputLabel>Name</InputLabel>
                    <Input className='input'
                        onChange={onValueChange}
                        name="name"
                        value={employee.name} />
                </FormControl >
                <FormControl className='form-control-main'>
                    <InputLabel>Email</InputLabel>
                    <Input className='input'
                        onChange={onValueChange}
                        name="email"
                        value={employee.email} />
                </FormControl>
                <FormControl className='form-control-main'>
                    <InputLabel>Contact No</InputLabel>
                    <Input className='input'
                        onChange={onValueChange}
                        name="mobile"
                        value={employee.mobile} />
                </FormControl>
                <FormControl className='form-control-main'>
                    <InputLabel>Designation</InputLabel>
                    <Input className='input'
                        onChange={onValueChange}
                        name="designation"
                        value={employee.designation} />
                </FormControl>
                <FormControl className='form-control-main'>
                    <Button variant="contained" className='add-button' onClick={EditEmployeeDetails}>Edit Employee</Button>
                </FormControl>
                <FormControl className='form-control-main'>
                    <Button variant="contained" className='add-button' onClick={cancelClick}>Cancel</Button>
                </FormControl>
            </Container>
        </div>
    )
}

export default EditEmployee;