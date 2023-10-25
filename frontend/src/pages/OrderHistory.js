
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';
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
import { styled } from "@mui/material/styles";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../config";
import { toast } from "react-hot-toast";



const drawerWidth = 240;

function OrderHistory(){

    const [orders, setOrders] = useState([]);
    const [on, setOn] = React.useState(false);
    const [deleteId, seteDeleteId] = useState("");
 



    const [open, setOpen] = React.useState(false);

 

 




     
    useEffect(() => {
        // setMaterialname("");
        // setPrice("");
        // setQuantity("");
        // setSupplierName("");
        // setMaterialtype("");
    
        getorder();
       
      }, []);



      const getorder = async () => {
        const result = await axios.get(`${api}/orders/`);
        setOrders(result.data);
        console.log(result.data);
      };
   
    
  

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24),
        createData('Ice cream sandwich', 237, 9.0, 37),
        createData('Eclair', 262, 16.0, 24),
        createData('Cupcake', 305, 3.7, 6 ),
        createData('Gingerbread', 356, 16.0, 49 ),
      ];

      const StyledPaper = styled(Paper)`
      background-color: #A5FF96; `;


      const [age, setAge] = React.useState('');

      const handleChange = (event) => {
        setAge(event.target.value);
      };


      const DeleteClickOpen = (_id) => {
       
        seteDeleteId(_id);
        setOn(true);
      };

  



      const DeleteClose = () => {
        setOn(false);
      };

     

      const handleDeleteProduct = async () => {
        await axios.delete(`${api}/orders/${deleteId}`).then((res) => {
          console.log(res);
          setOn(false);
    
          getorder();
          toast.success("Successfully Deleted!");
        });
      };
    
    

    return(<>
    
    <Box
        component="main"
        sx={{ flexGrow: 1, backgroundColor:"#EDF0F7", p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Toolbar>
        <Typography variant="h6" noWrap component="div" color="black"  sx={{fontWeight: 'bold',color:"black"} }>
     
          </Typography>
         
        </Toolbar>
          
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead sx={{direction:"none",backgroundColor:"#080C39",color:"white"}}>
          <TableRow>

            <TableCell sx={{color:"white",fontWeight:"bold"}} align="center">Order No</TableCell>
            <TableCell sx={{color:"white",fontWeight:"bold"}} align="center">Site Name</TableCell>
            <TableCell sx={{color:"white",fontWeight:"bold"}} align="center">Order Material</TableCell>
            
     
            <TableCell sx={{color:"white",fontWeight:"bold"}} align="center">Total Price(Rs)</TableCell>

            <TableCell sx={{color:"white",fontWeight:"bold"}} align="center">Supplier Name</TableCell>
            <TableCell sx={{color:"white",fontWeight:"bold"}} align="center">Order Status</TableCell>
            <TableCell sx={{color:"white",fontWeight:"bold"}} align="center">Acton</TableCell>



          </TableRow>
        </TableHead>
        <TableBody sx={{backgroundColor:"#ffffff",borderRadius:"100px"}}>
          {orders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{color:"black",fontWeight:"bold"}} component="th" scope="row">
                {row.orderNo}
              </TableCell>
              <TableCell sx={{color:"black",fontWeight:"bold"}} align="center">{row.site}</TableCell>
              <TableCell sx={{color:"black",fontWeight:"bold"}} align="center">{row.material}</TableCell>
              <TableCell sx={{color:"black",fontWeight:"bold"}} align="center">{row.totalPrice}</TableCell>
              <TableCell sx={{color:"black",fontWeight:"bold"}} align="center">{row.siteManagerName}</TableCell>
              <TableCell sx={{color:"black",fontWeight:"bold"}} align="center">{row.approvalStates}</TableCell>

               
              

              <TableCell align="center"> 
              
              
              <IconButton color="error" aria-label="delete">
                      <DeleteIcon onClick={() => DeleteClickOpen(row._id)} />
                    </IconButton>
      <br/>
     
              
              
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



    <Dialog
          open={on}
          onClose={DeleteClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure you want delete form order history?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={DeleteClose}>cancle</Button>
            <Button onClick={handleDeleteProduct} autoFocus>
              delete
            </Button>
          </DialogActions>
        </Dialog>




     


   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   

       
      </Box>
    
    
    
    
    </>);
}

export default OrderHistory;