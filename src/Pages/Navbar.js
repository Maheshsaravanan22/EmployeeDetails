import React from 'react'
import {AppBar,Box,Toolbar,IconButton} from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import {
 makeStyles
} from "@material-ui/core";
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate,Link} from "react-router-dom";
import "../assets/css/Navbar.css";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(0),
    display: "flex",
  },
  logout:{
    marginLeft: theme.spacing(90),
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(2),
    "&:hover": {
      color: "white",
      borderBottom: "1px solid white",
    },
  },
}));

const Navbar = () => {

  const classes = useStyles();
   const navigate = useNavigate();
    const logout = () => {
        navigate("/");
    }

  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
         <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
           Home
          </Link>         
          <Link to="/AllEmployee" className={classes.link}>
           Employee List
          </Link>
          <Link to="/AddEmployee" className={classes.link}>
          Add Employee
          </Link>
          </div>
          <Button color="inherit" className="logout-nav" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar