import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#008080',
            yellow: '#9ACD32',
            green: '#2E8B57',
        },
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: 'lg',
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                    padding: '0.6rem 2.5rem',
                },
            },
            defaultProps:{
                variant:'contained',
                color:'primary'
            },
        },
    }
});