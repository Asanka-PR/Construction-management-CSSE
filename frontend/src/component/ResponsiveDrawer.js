import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeOutlinedIcon from "@mui/icons-material/Dashboard";
import SensorsOutlinedIcon from "@mui/icons-material/GifBoxSharp";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/Person";
import Person2OutlinedIcon from "@mui/icons-material/Logout";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import { Tabs, Tab } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InventoryIcon from "@mui/icons-material/Inventory";

const drawerWidth = 240;

function ResponsiveDrawer(props, { children }) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  console.log(props.name);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    {
      text: "Dashboard",
      icon: <HomeOutlinedIcon />,
      path: "/dashboard",
    },
    {
      text: "Order Request",
      icon: <SensorsOutlinedIcon />,
      path: "/order",
    },
    {
      text: "Site Details",
      icon: <NearMeOutlinedIcon />,
      path: "/site",
    },
    {
      text: "Staff Members",
      icon: <RestoreOutlinedIcon />,
      path: "/member",
    },
    {
      text: "Suppliers",
      icon: <AirportShuttleIcon />,
      path: "/supplier",
    },
    {
      text: "Materials",
      icon: <InventoryIcon />,
      path: "/material",
    },

    {
      text: "Sign Out",
      icon: <Person2OutlinedIcon />,
      path: "/signout",
    },
  ];

  const drawer = (
    <div>
      <Toolbar>
        <h4 style={{ color: "white" }}>Procument Department</h4>
      </Toolbar>
      <List
        sx={{
          marginTop: "25px",
        }}
      >
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const styles = {
    paper: {
      background: "blue",
    },
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px`, background: "white" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="black"
            sx={{ fontWeight: "bold", color: "black" }}
          >
            {props.name}
          </Typography>
          <Tabs sx={{ marginLeft: "auto" }} aria-label="icon tabs example">
            <Tab
              sx={{ color: "#080C39" }}
              icon={<NotificationsIcon />}
              aria-label="phone"
            />
            <Tab
              sx={{ color: "#080C39" }}
              icon={<AccountCircleIcon />}
              aria-label="favorite"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          classes={{ paper: styles.paper }}
          container={container}
          PaperProps={{
            sx: {
              background:
                "linear-gradient(180deg, rgba(38,89,33,1) 0%, rgba(73,125,68,1) 100%, rgba(0,0,0,1) 100%)",
            },
          }}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          PaperProps={{
            sx: {
              background: "#080C39",
            },
          }}
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {children}
    </>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
