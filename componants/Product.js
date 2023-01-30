import React from 'react';
import {
    Button,
    Card, CardActionArea, CardContent, CardMedia, Stack, Typography,
} from "@mui/material";
const Product = ({ product }) => {
    const { thumbnail, category } = product;
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea sx={{ p: 1, }}>
                    <CardMedia
                        sx={{ borderRadius: 1 }}
                        component="img"
                        height="140"
                        image={thumbnail}
                        alt="green iguana"
                    />
                    <CardContent sx={{ p: 0, pt: 2 }}>
                        <Stack spacing={1}>
                            <Typography gutterBottom variant="h5" componant='div'>
                                {category}
                            </Typography>
                            <Typography variant="body2">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                            
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
};

export default Product;