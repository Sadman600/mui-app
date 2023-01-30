import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import { Container, Stack, Typography } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, []);
    return (
        <>
            <Container>
                <Stack spacing={2}>
                    <Typography variant='h3' sx={{ textAlign: 'center', color:'primary.main' }}>Our Products</Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            products.map((product) => <Grid item xs={2} sm={4} md={4} key={product.id}>
                                <Product product={product} />
                            </Grid>)
                        }
                    </Grid>
                </Stack>
            </Container>
        </>
    );
};

export default Products;