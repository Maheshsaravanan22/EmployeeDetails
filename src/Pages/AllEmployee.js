import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import "../assets/css/Employee.css";
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled,Box,TablePagination } from '@mui/material'
import { getEmployees,deleteEmployee } from "./Service/api";
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #606060;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;


const AllEmployee = () => {
    const [employee, setEmployee] = useState([]);
    const [pg, setpg] = useState(0);
    const [rpg, setrpg] = useState(5);

    function handleChangePage(event, newpage) {
        setpg(newpage);
    }

    function handleChangeRowsPerPage(event) {
        setrpg(parseInt(event.target.value, 10));
        setpg(0);
    }

    useEffect(() => {
        getAllEmployee();
    }, []);

    const deleteEmployeeData = async (id) => {
        await deleteEmployee(id);
        getAllEmployee();
    }

    const getAllEmployee = async () => {
        let response = await getEmployees();
        setEmployee(response.data);
    }

    return (
        <div>
            <Navbar/>
            <Box 
               sx={{
                mb:5
               }}
            >
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Contact No</TableCell>
                    <TableCell>Designation</TableCell>
                    <TableCell>Actions</TableCell>
                </THead>
            </TableHead>
            <TableBody>
      
                {employee.slice(pg * rpg,pg * rpg + rpg)?.map((employee) => (
                    <TRow key={employee.id}>
                        <TableCell>{employee.id}</TableCell>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.email}</TableCell>
                        <TableCell>{employee.mobile}</TableCell>
                        <TableCell>{employee.designation}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${employee.id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => deleteEmployeeData(employee.id)}>Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
         
        </StyledTable>
        <TablePagination
            className='Table-pagination'
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={employee.length}
                rowsPerPage={rpg}
                page={pg}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
        </div>
    )
}

export default AllEmployee;