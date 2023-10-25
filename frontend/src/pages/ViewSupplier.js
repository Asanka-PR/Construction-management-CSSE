
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import { styled } from "@mui/material/styles";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Link} from 'react-router-dom';



const drawerWidth = 240;

function ViewSupplier(){
    
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#080c39',
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
      function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];


    //   const [name, setSupplerName]= useState([]);
    //   const [supplierId, setSupplierID]= useState([]);
    //   const [email, setEmail]= useState([]);
    //   const [password, setPassword]= useState([]);
    //   const [phone, setPhoneNo]= useState([]);
    //   const [companyName, setCompanyName]= useState([]);
    //   const [address, setAddress]= useState([]);
    //   const [suppliedMaterialInfo, setProvidedMatetial]= useState([]);
    const [suppliers, setSupplers]= useState([]);


      const navigate = useNavigate();

      useEffect(() => {
        
        getSuppliers();
    }, [])

    const getSuppliers= async()=>{
        const result =await axios.get(`http://localhost:5000/api/suppliers/`);
        setSupplers(result.data);
        console.log(result.data);

    }

    
    const DeleteSupplier = async (id)=> {
        console.warn(id)
        let result =await fetch(`http://localhost:5000/api/suppliers/${id}`,{
            method:"Delete"
        });
        result =await result.json()
        if(result)
        {
            alert("Supplier Deleted")
            getSuppliers();
        }
    
    } 
    


    return(<>
    
    <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >
      
      
      
     {/* content of the page   */}
      
     <Link to ="/suppliermanagement"  >  <Button style={{padding: 5,width:"15%",marginLeft: 950,marginTop: 50, backgroundColor: '#080c39'}} variant="contained">Add Suppliers</Button></Link>

     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700, marginTop:5}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" >supplier ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Password</StyledTableCell>
            <StyledTableCell align="center">Phone No</StyledTableCell>
            <StyledTableCell align="center">Company Name</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">supplied Material</StyledTableCell>
            <StyledTableCell align="center" style={{width: 250}}></StyledTableCell>
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody> */}


<TableBody>
  {suppliers.length > 0 ? suppliers.map((item) => (
    <StyledTableRow key={item._id}>
      <StyledTableCell component="th" scope="row">{item.supplierId}</StyledTableCell>
      <StyledTableCell align="center">{item.name}</StyledTableCell>
      <StyledTableCell align="center">{item.email}</StyledTableCell>
      <StyledTableCell align="center">{item.password}</StyledTableCell>
      <StyledTableCell align="center">{item.phone}</StyledTableCell>
      <StyledTableCell align="center">{item.companyName}</StyledTableCell>
      <StyledTableCell align="center">{item.address}</StyledTableCell>
      <StyledTableCell align="center">{item.suppliedMaterialInfo}</StyledTableCell>
      <StyledTableCell >
      <Link to={"/updatesupplier/" + item._id}>
      <Button  style={{padding: 5,width:"25%",marginTop: 20,marginLeft:50, backgroundColor: '#080c39'}} variant="contained">Update</Button>
                  </Link>

      <Button onClick={() => DeleteSupplier(item._id)}  style={{padding: 5,width:"25%",marginTop: 20,marginLeft:10, backgroundColor: "#800000"}} variant="contained">Delete</Button>


      </StyledTableCell>
    

    </StyledTableRow>
  )) : null}
</TableBody>



    





      </Table>
    </TableContainer>








      
      
    </Box>
    
    
    
    
    </>);
}

export default ViewSupplier;