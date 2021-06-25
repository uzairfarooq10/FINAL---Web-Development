import { Button, Grid, TextField } from '@material-ui/core';
import React from 'react';
import productService from '../../Services/ProductsService';
import Admin from '../../components/auth/Admin';

const UpdateProduct = (props) => {
    const [name,setName] = React.useState("");
    const [price,setPrice] = React.useState(0);
    const id = props.match.params.id;
    React.useState(()=>{
        productService.getSingleProduct(id)
        .then((data)=>{
            setName(data.name);
            setPrice(data.price);
        })
        .catch((err)=>{
            console.log(err);
        })
    });
    return (
        <Admin>
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <h1>Update Product</h1>
            

            
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <TextField label="Name" fullWidth value={name} onChange={e=>{setName(e.target.value)}}/>
                <TextField label="Price" fullWidth value={price} onChange={e=>{setPrice(e.target.value)}}/>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={9}>
                <Button variant="contained" color="primary" onClick={(e)=>{
                    console.log('Send API call to add');
                    productService.updateProduct(id, {name, price})
                    .then((data)=>{
                        console.log(data);
                        props.history.push('/products');
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                }} >Update</Button>
            </Grid>
        </Grid>
        </Admin> 
     );
    }
 
export default UpdateProduct;