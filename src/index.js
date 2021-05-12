import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// MATERIAL UI
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </CssBaseline>
    </React.StrictMode>,
    document.getElementById('root')
)
