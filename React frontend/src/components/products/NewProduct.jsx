import { Button, Grid, TextField } from '@material-ui/core';
import React from 'react';
import productService from '../../Services/ProductsService';
import Auth from '../../components/auth/Auth';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


const NewProduct = (props) => {
    const [teamA,setTeamA] = React.useState("");
    const [teamB,setTeamB] = React.useState("");
    const [city,setCity] = React.useState("");
    const [date,setDate] = React.useState("");
    return ( 

        <Auth>
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <h1>Add New Match</h1>
            

            
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
            <InputLabel htmlFor="age-native-simple">Teams</InputLabel>
                <Select fullWidth native value={teamA} onChange={e=>{setTeamA(e.target.value)}} >
                <option aria-label="None" value="" />
                <option value={10}>Karachi Kings</option>
                <option value={20}>Multan Sultans</option>
                <option value={30}>Peshawar Zalmi</option>
                <option value={40}>Lahore Qalanders</option>
                <option value={50}>Islamabad United</option>
                <option value={60}>Quetta Gladiators</option>
                </Select>

                <InputLabel htmlFor="age-native-simple">Teams</InputLabel>
                <Select fullWidth native value={teamB} onChange={e=>{setTeamB(e.target.value)}} >
                <option aria-label="None" value="" />
                <option value={10}>Karachi Kings</option>
                <option value={20}>Multan Sultans</option>
                <option value={30}>Peshawar Zalmi</option>
                <option value={40}>Lahore Qalanders</option>
                <option value={50}>Islamabad United</option>
                <option value={60}>Quetta Gladiators</option>
                </Select>

                <TextField label="City" fullWidth value={city} onChange={e=>{setCity(e.target.value)}}/>
                <TextField label="Date" fullWidth value={date} onChange={e=>{setDate(e.target.value)}}/>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={9}>
                <Button variant="contained" color="primary" onClick={(e)=>{
                    console.log('Send API call to add');
                    productService.addProduct({teamA, teamB, city, date})
                    .then((data)=>{
                        console.log(data);
                        props.history.push('/products');
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                }} >Add New</Button>
            </Grid>
        </Grid>
        </Auth>
     );
    }
 
export default NewProduct;