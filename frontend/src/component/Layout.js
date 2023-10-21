import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { Container,Box } from "@mui/material";
import Grid from "@mui/material/Grid";




const Layout = ({ children  }) => {
    return (
      <>
        
        

        <Grid container >
  <Grid  xs={12}>
    <ResponsiveAppBar/>
  </Grid>
  <Grid   xs={12}>
     {children}
  </Grid>
 
</Grid>
      </>
    );
  };
  
  export default Layout;