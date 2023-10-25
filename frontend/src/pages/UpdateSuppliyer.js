
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
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
import { makeStyles, styled } from "@mui/material/styles";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import Input from '@mui/material/Input'
// import makeStyles from '@mui/material/styles';
// import { api } from ".../config";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import {Link} from 'react-router-dom';
import { FormGroup } from '@mui/material';

const drawerWidth = 240;

function UpdateSuppliyer(){
    const [open, setOpen] = React.useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const emailRegex = /^\S+@\S+\.\S+$/;

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

      const StyledPaper = styled(Paper)`
      background-color: #A5FF96; `;


      const [age, setAge] = React.useState('');

      const handleChange = (event) => {
        setAge(event.target.value);
      };
    

      const [name, setSupplerName] = useState("");
      const [supplierId, setSupplierID] = useState("");
      const [email, setEmail] = useState(""); 
      const [password, setPassword] = useState(""); 
      const [phone, setPhoneNo] = useState("");
      const [companyName, setCompanyName] = useState("");
      const [address, setAddress] = useState("");
      const [suppliedMaterialInfo, setProvidedMatetial] = useState("");

      const navigate = useNavigate();
      const params = useParams();

      useEffect(() => {
        
        const getSupplierDetails = async() => {
            const result = await axios.get(`http://localhost:5000/api/suppliers/${params.id}`);
            const item = result.data
            console.log(item);         
            setSupplerName(item.name);
            setSupplierID(item.supplierId);
            setEmail(item.email);
            setPassword(item.password);
            setPhoneNo(item.phone);
            setCompanyName(item.companyName);
            setAddress(item.address);
            setProvidedMatetial(item.suppliedMaterialInfo);
      
        }
    
        getSupplierDetails();
    
        }, [])

      function sendData(e){
        e.preventDefault();
        //alert("Data inserted successfully");
     
        
        const isEmailValid = emailRegex.test(email);
        const errors = {};
      
        if (name.trim() === "") {
          errors.name = "Supplier name can't be empty";
        }
        if (supplierId.trim() === "") {
          errors.supplierId = "Supplier Id can't be empty";
        }
        if (!isEmailValid) {
          errors.email = "Enter a valid email address";
        }
        if (password.trim() === "") {
          errors.password = "Password can't be empty";
        }
        if (!/^\d+$/.test(phone) || phone.length !== 10) {
          errors.phone = "Enter a valid 10-digit phone number";
        }
        if (companyName.trim() === "") {
          errors.companyName = "Company name can't be empty";
        }
        if (address.trim() === "") {
          errors.address = "Address can't be empty";
        }
        if (suppliedMaterialInfo.trim() === "") {
          errors.suppliedMaterialInfo = "This Field can't be empty";
        }
      
        setSubmitted(errors);
      
        if (Object.keys(errors).length > 0) {
          return; // Don't proceed if there are validation errors
        }
        const newSupplier ={
            name,
            supplierId,
            email,
            password,
            phone,
            companyName,
            address,
            suppliedMaterialInfo

    
        }
        //console.log(newCategory);
    
        axios.put(`http://localhost:5000/api/suppliers/${params.id}`,newSupplier).then(()=>{
            alert("New Supplier Added Successfully");
            setSupplerName("");
            setSupplierID("");
            setEmail("");
            setPassword("");
            setPhoneNo("");
            setCompanyName("");
            setAddress("");
            setProvidedMatetial("");


            navigate('/viewsupplier')
    
        }, 1000);
      }
    



    return(<>
    
    <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >
      
      
      
     {/* content of the page   */}

<br></br>
<br></br>
    <div>
        {/* className={classes.formStyle} */}

        <Link to ="/viewsupplier"  >  <Button style={{padding: 5,width:"15%",marginLeft: 850,marginTop: 20, backgroundColor: '#080c39'}} variant="contained">View Suppliers</Button></Link>
<form onSubmit={sendData}>
        <FormGroup style={{ width: "50%" ,margin: "auto", padding: 20, marginTop: 50,  paddingTop: 20, boxShadow: "0px 0px 8px rgba(0,0,0,0.5)"}}  >
            <h2 style={{alignSelf: "center"}}>Add Supplier Details</h2>
            <FormControl style={{marginTop:10}}>
            <TextField label="Supplier ID" InputLabelProps={{style: {  fontWeight: 'bold', fontSize: '20px' }}}
                 style={{ padding: 5 }} 
                 value={supplierId}
                 onChange={(e) => {
                    setSupplierID(e.target.value);
                 }}/>
             {submitted && supplierId.trim() === "" ? (
             <label style={{color: "red", marginLeft: 10,fontWeight: 'bold'}}>Supplier Id can't be empty</label>
             ) : null}
            </FormControl>

            <FormControl style={{marginTop:10}}>
            <TextField label="Name" InputLabelProps={{style: {  fontWeight: 'bold', fontSize: '20px' }}}
                 style={{ padding: 5 }}
                 value={name}
                 onChange={(e) => {
                    setSupplerName(e.target.value);
                 }}/>
                    {submitted && name.trim() === "" ? (
          <label style={{color: "red", marginLeft: 10,fontWeight: 'bold'}}>Supplier name can't be empty</label>
        ) : null}
            </FormControl>

            <FormControl style={{marginTop:10}}>
            <TextField label="Email Address" InputLabelProps={{style: {  fontWeight: 'bold', fontSize: '20px' }}}
                 style={{ padding: 5 }}
                 value={email}
                 onChange={(e) => {
                    setEmail(e.target.value);
                 }}/>
         {submitted.email && email.trim() === "" || submitted.email && !emailRegex.test(email) ?(
              <label style={{color: "red", marginLeft: 10, fontWeight: "bold"}}>
          Enter a valid email address</label>) : null}
      
            </FormControl>

            <FormControl style={{marginTop:10}}>
            <TextField label="Password" InputLabelProps={{style: {  fontWeight: 'bold', fontSize: '20px' }}}
                 style={{ padding: 5 }}
                 value={password}
                 onChange={(e) => {
                    setPassword(e.target.value);
                 }}/>
                   {submitted && password.trim() === "" ? (
             <label style={{color: "red", marginLeft: 10,fontWeight: 'bold'}}>Password can't be empty</label>
             ) : null}
            </FormControl>

            <FormControl style={{marginTop:10}}>
            <TextField label="Phone Number" InputLabelProps={{style: {  fontWeight: 'bold', fontSize: '20px' }}}
                 style={{ padding: 5 }}
                 value={phone}
                 onChange={(e) => {
                    setPhoneNo(e.target.value);
                 }}/>
                    {submitted.phone && phone.trim() === "" || submitted.phone && !/^\d+$/.test(phone) || submitted.phone && phone.length !== 10 ?(
                  <label style={{ color: "red", marginLeft: 10, fontWeight: 'bold' }}>Phone Number must be 10 digits</label>
                ) : null}
              
            </FormControl>

            <FormControl style={{marginTop:10}}>
            <TextField label="Company Name" InputLabelProps={{style: {  fontWeight: 'bold', fontSize: '20px' }}}
                 style={{ padding: 5 }}
                 value={companyName}
                 onChange={(e) => {
                    setCompanyName(e.target.value);
                 }}/>
                   {submitted && companyName.trim() === "" ? (
             <label style={{color: "red", marginLeft: 10,fontWeight: 'bold'}}>Company name can't be empty</label>
             ) : null}
            </FormControl>

            <FormControl style={{marginTop:10}}>
            <TextField label="Address" InputLabelProps={{style: {  fontWeight: 'bold', fontSize: '20px' }}}
                 style={{ padding: 5 }}
                 value={address}
                 onChange={(e) => {
                    setAddress(e.target.value);
                 }}/>
                   {submitted && address.trim() === "" ? (
             <label style={{color: "red", marginLeft: 10,fontWeight: 'bold'}}>Address can't be empty</label>
             ) : null}
            </FormControl>

            <FormControl style={{marginTop:10}}>
            <TextField label="Type Of Material Provided" InputLabelProps={{style: {  fontWeight: 'bold', fontSize: '20px' }}}
                 style={{ padding: 5 }}
                 value={suppliedMaterialInfo}
                 onChange={(e) => {
                    setProvidedMatetial(e.target.value);
                 }}/>
                   {submitted && suppliedMaterialInfo.trim() === "" ? (
             <label style={{color: "red", marginLeft: 10,fontWeight: 'bold'}}>This Field can't be empty</label>
             ) : null}
            </FormControl>

           
            <Button  type="submit" style={{padding: 5,width:"30%",alignSelf: "center",marginTop: 20, backgroundColor: '#080c39'}} variant="contained">Save details</Button>

        </FormGroup>
        </form>
        
    </div>

    <br></br>


    {/* <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            variant="standard"
            margintop='12dp'
            />
         */}



      
      
    </Box>
    
    
    
    
    </>);
}

export default UpdateSuppliyer;