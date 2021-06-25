import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import userService from '../../Services/UserService';

import { toast } from 'react-toastify';


const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        height: "300px"
    },
    child: {
        width: "60%",
    },
    root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },
      },
  }));

const Register = (props) => {
    const classes = useStyles();
    const [email, setEmail] = React.useState("uzair@gmail.com");
    const [name, setName] = React.useState("Uzair");
    const [password, setPassword] = React.useState("123");
    return ( 
        <div className={classes.container}>

            <div className={classes.child}>
            <TextField label="Name"  fullWidth value={name} onChange={e=>{setName(e.target.value)}}/> <br />
            <TextField label="Email" fullWidth value={email} onChange={e=>{setEmail(e.target.value)}}/> <br/>
                <TextField label="Password" type="password" fullWidth value={password} onChange={e=>{setPassword(e.target.value)}}/>
                 <br/>
                <Button variant="contained" color="primary" onClick={(e) => {
                    userService.register(name, email, password)
                    .then((data) => {
                        console.log(data);
                        props.history.push("/login");
                        
                    })
                    .catch((err) => {
                        console.log(err);
                        toast.error(err.response.data, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: true,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            });
                    })                    
                }}> Register </Button>
                
                {/* <TextField label="Email"  fullWidth/> <br />
                <TextField label="Password" type="password" fullWidth/> <br />
                <Button variant="contained" color="primary"> Register
             </Button> */}
            </div>

        </div>
     );
}
 
export default Register;