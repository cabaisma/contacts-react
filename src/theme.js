import { createMuiTheme } from '@material-ui/core/styles'

// GLOBAL DEFAULT STYLE CONFIGURATION
const theme = createMuiTheme({
    typography: {
        // fontFamily: "Poppins, sans-serif",
        // fontFamily: "Montserrat, sans-serif",
        fontFamily: 'Roboto, sans-serif',
    },
    overrides: {
        MuiButton: {
            containedSecondary: {
                backgroundColor: '#0be881',
            },
        },
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: '#1e272e',
            },
        },
        MuiOutlinedInput: {
            input: {
                width: '300px',
            },
        },
    },
})

export default theme
