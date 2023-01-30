import { Box, Button, Container, Stack, styled, Typography } from '@mui/material';
import React from 'react';
const BannerWrapper = styled(Box)(({ theme }) => ({
    height: '70vh',
    backgroundColor: '#2E8B57',
    padding: theme.spacing(4),
    margin: '4.2rem 0',
    borderRadius:'2px',
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));
const Banner = () => {
    return (
        <>
            <Container>
                <BannerWrapper>
                    <Box sx={{
                        width: '50%',
                        p:'2rem',
                    }}>
                        <Stack spacing={2}>
                            <Typography sx={{
                                fontSize: '3rem',
                                fontWeight: 'bold',
                                lineHeight: '1.2',
                            }}><span style={{ color: 'white' }}>Move faster</span> <br />
                                with intuitive <br />
                                React UI tools</Typography>
                            <Typography>
                                MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.
                            </Typography>
                            <Button sx={{ width: '50%' }}>Get Started</Button>
                        </Stack>
                    </Box>
                    <Box sx={{
                        width: '50%',
                        p: '2rem',
                    }}>
                        <img
                            src='https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=740&t=st=1675096423~exp=1675097023~hmac=95c9953544886d435d9a6af2f3e0c0b5ac3147197b189248a1747d8a3cb9329b'
                            alt='banner-image'
                            style={{ width: '80%', height: '50%', borderRadius: '10px' }}
                        />
                    </Box>
                </BannerWrapper>

            </Container>
        </>
    );
};

export default Banner;