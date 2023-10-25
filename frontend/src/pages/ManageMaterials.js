import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import axios from "axios";
import { api } from "../config";
import { toast } from "react-hot-toast";



const drawerWidth = 240;

function ManageMaterials() {

    const [open, setOpen] = React.useState(false);

    const [openone, setopenone] = React.useState(false);

    const [validPrice, setValidPrice] = useState(true);


    const [validQuantity, setValidQuantity] = useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setMaterialname("");
        setPrice("");
        setQuantity("");
        setSupplierName("");
        setMaterialtype("");
    };

    const handleClickOpenone = () => {
        setopenone(true);
    };

    const handleCloseone = () => {
        setopenone(false);
        setMaterialname("");
        setPrice("");
        setQuantity("");
        setSupplierName("");
        setMaterialtype("");
    };




    const [materialName, setMaterialname] = useState("");
    const [Price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [materialType, setMaterialtype] = useState("");
    const [supplierName, setSupplierName] = useState("");

    const [material, setMaterial] = useState([]);

    const [supplierList, setSupplierList] = useState([]);

    const [deleteId, seteDeleteId] = useState("");
    const [updateId, setupdateId] = useState("");

    const [on, setOn] = React.useState(false);


    const handlePriceChange = (event) => {
      const price = event.target.value;
      setPrice(price);

      // Real-time validation for Price
      const isPositiveNumber = !isNaN(price) && parseFloat(price) > 0;
      setValidPrice(isPositiveNumber);
  };

  const handleQuantityChange = (event) => {
      const quantity = event.target.value;
      setQuantity(quantity);

      // Real-time validation for Quantity
      const isPositiveNumber = !isNaN(quantity) && parseFloat(quantity) > 0;
      setValidQuantity(isPositiveNumber);
  };




    const DeleteClickOpen = (_id) => {
        seteDeleteId(_id);

        setOn(true);
    };






    const UpdateClickOpen = (_id) => {
        setupdateId(_id);

        axios
            .get(`${api}/materials/${_id}`)
            .then((response) => {
                const item = response.data; // Access the data from the response

                // Now you can use the item data
                console.log(item);

                setMaterialname(item.materialName);
                setQuantity(item.quantity);
                setMaterialtype(item.materialType);
                setSupplierName(item.supplierName);
                setPrice(item.Price);
            })
            .catch((error) => {
                // Handle any errors here
                console.error("Error fetching material:", error);
            });

        setopenone(true);
    };





    const DeleteClose = () => {
        setOn(false);
    };





    useEffect(() => {
        // setMaterialname("");
        // setPrice("");
        // setQuantity("");
        // setSupplierName("");
        // setMaterialtype("");

        getproduct();
        getSuppliers();
    }, []);

    const getproduct = async () => {
        const result = await axios.get(`${api}/materials/`);
        setMaterial(result.data);
        console.log(result.data);
    };

    const getSuppliers = async () => {
        const result = await axios.get(`${api}/suppliers/`);
        setSupplierList(result.data);
    };

    const StyledPaper = styled(Paper)`
      background-color: "white; `;

    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleSearch = async (event) => {
        let key = event.target.value;
        if (key) {
            const result = await axios.get(`${api}/materials/search/${key}`);
            setMaterial(result.data);
        } else {
            getproduct();
        }
    };

    const handleDeleteProduct = async () => {
        await axios.delete(`${api}/materials/${deleteId}`).then((res) => {
            console.log(res);
            setOn(false);

            getproduct();
            toast.success("Successfully Deleted!");
        });
    };

    function updateMaterial(e) {
        e.preventDefault();


        if (!materialName || !Price || !quantity || !supplierName || !materialType) {
          toast.error("Please fill in all fields.");
          return;
         }

        const material = {
            materialName,
            Price,
            supplierName,
            materialType,
            quantity,
        };
        axios
            .put(`${api}/materials/${updateId}`, material)
            .then(() => {
                setMaterialname("");
                setPrice("");
                setQuantity("");
                setSupplierName("");
                setMaterialtype("");

                toast.success("material is successfully Updated..!!");

                setTimeout(() => {
                    getproduct();
                    setopenone(false);
                }, 1000);
            })
            .catch((err) => {
                toast.error("This material cant be updated");
                console.log(err);
            });
    }

    function sendMaterial(e) {
        e.preventDefault();

        if (!materialName || !Price || !quantity || !supplierName || !materialType) {
          toast.error("Please fill in all fields.");
          return;
      }

        const materialId = generateRandomNumber();

        const material = {
            materialId,
            materialName,
            Price,
            supplierName,
            materialType,
            quantity,
        };

        axios
            .post(`${api}/materials/`, material)
            .then(() => {
                setMaterialname("");
                setPrice("");
                setQuantity("");
                setSupplierName("");
                setMaterialtype("");

                toast.success("Product is successfully Added!!");
                setTimeout(() => {
                    setOpen(false);
                    getproduct();
                }, 1000);
            })
            .catch((err) => {
                toast.error("This Product cant be Added");
                console.log(err);
            });
    }

    function generateRandomNumber() {
        // Generate a random number between 0 and 999
        const randomNumber = Math.floor(Math.random() * 1000);

        // Convert the random number to a string and pad it with zeros if necessary
        const formattedNumber = randomNumber.toString().padStart(3, "0");

        // Combine the formatted number with the "M00" prefix
        return `M00${formattedNumber}`;
    }

    return (
        <>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    backgroundColor: "#EDF0F7",
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />

                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        color="black"
                        sx={{ fontWeight: "bold", color: "black" }}
                    >


                        <TextField
                            placeholder="Search Material"
                            type="search"
                            sx={{ backgroundColor: "white" }}
                            variant="outlined"
                            fullWidth
                            size="small"
                            onChange={handleSearch}

                        />
                        {/* <input
              type="search"
              class="form-control rounded"
              onChange={handleSearch}
              placeholder="Search Product"
              aria-label="Search"
              aria-describedby="search-addon"
            /> */}
                    </Typography>
                    <Button
                        sx={{
                            marginLeft: "auto",
                            backgroundColor: "#080C39",
                            borderRadius: "10px",
                        }}
                        onClick={handleClickOpen}
                        variant="contained"
                        color="success"
                    >
                        Add New Material
                    </Button>
                </Toolbar>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="simple table">
                        <TableHead
                            sx={{
                                direction: "none",
                                backgroundColor: "#080C39",
                                color: "white",
                            }}
                        >
                            <TableRow>
                                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                                    ID
                                </TableCell>
                                <TableCell
                                    sx={{ color: "white", fontWeight: "bold" }}
                                    align="center"
                                >
                                    Material Name
                                </TableCell>
                                <TableCell
                                    sx={{ color: "white", fontWeight: "bold" }}
                                    align="center"
                                >
                                    Unit Price(Rs)
                                </TableCell>
                                <TableCell
                                    sx={{ color: "white", fontWeight: "bold" }}
                                    align="center"
                                >
                                    Quantity
                                </TableCell>
                                <TableCell
                                    sx={{ color: "white", fontWeight: "bold" }}
                                    align="center"
                                >
                                    Material Type
                                </TableCell>
                                <TableCell
                                    sx={{ color: "white", fontWeight: "bold" }}
                                    align="center"
                                >
                                    Supplier Name
                                </TableCell>
                                <TableCell
                                    sx={{ color: "white", fontWeight: "bold" }}
                                    align="center"
                                >
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody
                            sx={{ backgroundColor: "#ffffff", borderRadius: "100px" }}
                        >
                            {material.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell
                                        sx={{ color: "black", fontWeight: "bold" }}
                                        component="th"
                                        scope="row"
                                    >
                                        {row.materialId}
                                    </TableCell>
                                    <TableCell
                                        sx={{ color: "black", fontWeight: "bold" }}
                                        align="center"
                                    >
                                        {row.materialName}
                                    </TableCell>
                                    <TableCell
                                        sx={{ color: "black", fontWeight: "bold" }}
                                        align="center"
                                    >
                                        {row.Price}
                                    </TableCell>
                                    <TableCell
                                        sx={{ color: "black", fontWeight: "bold" }}
                                        align="center"
                                    >
                                        {row.quantity}
                                    </TableCell>
                                    <TableCell
                                        sx={{ color: "black", fontWeight: "bold" }}
                                        align="center"
                                    >
                                        {row.materialType}
                                    </TableCell>
                                    <TableCell
                                        sx={{ color: "black", fontWeight: "bold" }}
                                        align="center"
                                    >
                                        {row.supplierName}
                                    </TableCell>

                                    <TableCell align="center">
                                        {" "}
                                        <IconButton color="error" aria-label="delete">
                                            <DeleteIcon onClick={() => DeleteClickOpen(row._id)} />
                                        </IconButton>
                                        <IconButton color="primary" aria-label="edit">
                                            <EditNoteOutlinedIcon
                                                onClick={() => UpdateClickOpen(row._id)}
                                            />
                                        </IconButton>
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
                        {"Are you sure you want remove this material?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            After the delete,You can't recovery Details
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={DeleteClose}>cancle</Button>
                        <Button onClick={handleDeleteProduct} autoFocus>
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>

                <Dialog open={open} onClose={handleClose}>
                    <form onSubmit={sendMaterial}>
                        <DialogTitle style={{ backgroundColor: "#080C39", color: "white" }}>
                            Add New Material
                        </DialogTitle>
                        <DialogContent style={{ marginTop: "10px" }}>
                            <DialogContentText></DialogContentText>

                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Matrial Name"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={materialName}
                                onChange={(event) => setMaterialname(event.target.value)}
                            />

                          <TextField
                                autoFocus
                                margin="dense"
                                id="price"
                                label="Material Unit Price"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={Price}
                                onChange={handlePriceChange}
                                error={!validPrice}
                            />

{!validPrice && <div style={{ color: "red" }}>Price must be a positive number</div>}
                            <TextField
                                autoFocus
                                margin="dense"
                                id="quantity"
                                label="Available Quantity"
                                type="number"
                                fullWidth
                                variant="outlined"
                                value={quantity}
                                onChange={handleQuantityChange}
                                error={!validQuantity}
                               
                            />

                       
                        {!validQuantity && <div style={{ color: "red" }}>Quantity must be a positive number</div>}

                            <TextField
                                autoFocus
                                margin="dense"
                                id="materialType"
                                label="Material Type"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={materialType}
                                onChange={(event) => setMaterialtype(event.target.value)}
                            />

                            <FormControl style={{ marginTop: "5px" }} fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Select Material Supplier name
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={supplierName}
                                    onChange={(event) => setSupplierName(event.target.value)}
                                    label="Age"
                                >
                                    {supplierList.map((item) => (
                                        <MenuItem key={item._id} value={item.companyName}>
                                            {item.companyName}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Submit</Button>
                        </DialogActions>
                    </form>
                </Dialog>

                <Dialog open={openone} onClose={handleCloseone}>
                    <form onSubmit={updateMaterial}>
                        <DialogTitle style={{ backgroundColor: "#080C39", color: "white" }}>
                            Update Material
                        </DialogTitle>
                        <DialogContent style={{ marginTop: "10px" }}>
                            <DialogContentText></DialogContentText>

                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Matrial Name"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={materialName}
                                onChange={(event) => setMaterialname(event.target.value)}
                            />

                            <TextField
                                autoFocus
                                margin="dense"
                                id="price"
                                label="Material Unit Price"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={Price}
                               
                                onChange={handlePriceChange}
                                error={!validPrice}
                            />
                            {!validPrice && <div style={{ color: "red" }}>Price must be a positive number</div>}
                            <TextField
                                autoFocus
                                margin="dense"
                                id="quantity"
                                label="Available Quantity"
                                type="number"
                                fullWidth
                                variant="outlined"
                                value={quantity}
                                onChange={handleQuantityChange}
                                error={!validQuantity}
                             
                            />

                        
                        {!validQuantity && <div style={{ color: "red" }}>Quantity must be a positive number</div>}


                            <TextField
                                autoFocus
                                margin="dense"
                                id="materialType"
                                label="Material Type"
                                type="text"
                                fullWidth
                                variant="outlined"
                                value={materialType}
                                onChange={(event) => setMaterialtype(event.target.value)}
                            />

                            <FormControl style={{ marginTop: "5px" }} fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Select Material Supplier name
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={supplierName}
                                    onChange={(event) => setSupplierName(event.target.value)}
                                    label="Age"
                                >
                                    {supplierList.map((item) => (
                                        <MenuItem key={item._id} value={item.companyName}>
                                            {item.companyName}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseone}>Cancel</Button>
                            <Button type="submit">Update</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </Box>
        </>
    );
}

export default ManageMaterials;
