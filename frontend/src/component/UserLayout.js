import React from "react";
import Box from '@mui/material/Box';
import ResponsiveDrawer from "./ResponsiveDrawer";


const UserLayout = ({ children ,name}) => {

    console.log(name);

    return (
      <>
         <Box sx={{ display: 'flex' ,backgroundColor:"white"}}>

          <ResponsiveDrawer name={name}></ResponsiveDrawer>
          {children}




         </Box>
        

   
      </>
    );
  };
  
  export default UserLayout;