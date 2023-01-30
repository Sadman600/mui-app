import Product from '@/componants/Product';
import { Box, Container } from '@mui/material';
import React from 'react';

const ProductDetails = ({ product }) => {
    return (
        <>
            <Container sx={{ mt: '4.2rem' }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Product product={product} />
                </Box>
            </Container>
        </>
    );
};
export const getStaticProps = async ({ params }) => {
    const res = await fetch(`https://dummyjson.com/products/${params.productid}`);
    const data = await res.json();

    return {
        props: {
            product: data,
        },
    }
};
export const getStaticPaths = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    const paths = data.products.map(product => {
        return {
            params: {
                productid: `${product.id}`,
            },
        }
    });

    return {
        paths,
        fallback: false
    }
};
export default ProductDetails;