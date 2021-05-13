import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// REDUX CONFIG
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import GlobalReducers from './reducers'

// MATERIAL UI
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

const store = createStore(GlobalReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <CssBaseline>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </CssBaseline>,
    document.getElementById('root')
)
