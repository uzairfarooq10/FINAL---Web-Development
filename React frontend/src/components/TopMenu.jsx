import React from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import userService from '../Services/UserService';
const useStyles = makeStyles((theme) => ({
    Link: {
      color: "White",
      paddingRight:"1rem",
    },  
  }));


const TopMenu = () => {
    const classes = useStyles();
    return ( 
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    <Link to="/" className={classes.Link}>Home</Link>
                </Typography>
                <Typography variant="h6">
                    <Link to="/products" className={classes.Link}>PSL Matches</Link>
                </Typography>
                
                <Typography variant="h6">
                    <Link to="/contact-us" className={classes.Link}>Contact Us</Link>
                </Typography>
                { !userService.isLoggedIn()  ? <>
                <Typography variant="h6">
                    <Link to="/login" className={classes.Link}>Login</Link>
                </Typography>
                <Typography variant="h6">
                    <Link to="/register" className={classes.Link}>Register</Link>
                </Typography>
                </> : 
                <Button variant="contained" color="secondary" onClick={(e) => {
                    userService.logout();
                    window.location.reload();
                    }}> Logout {userService.getLoggedInUser().name} </Button>  
                }

            </Toolbar>
        </AppBar>
     );
}
 
export default TopMenu;