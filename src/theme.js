import { createMuiTheme } from '@material-ui/core/styles'

// GLOBAL DEFAULT STYLE CONFIGURATION
const theme = createMuiTheme({
    typography: {
        // fontFamily: "Poppins, sans-serif",
        // fontFamily: "Montserrat, sans-serif",
        fontFamily: 'Roboto, sans-serif',
    },
    overrides: {
        // HEY! HEY! HEY! OVERRIDES HERE...
        MuiButton: {
            containedSecondary: {
                backgroundColor: '#7d5fff',
            },
        },
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: '#218c74',
            },
        },
    },
})

export default theme
