import React, { Component } from 'react'
import Navigation from './components/Navigation'
import Contact from './components/Contact'

// MATERIAL UI
import Box from '@material-ui/core/Box'
import { withStyles } from '@material-ui/styles'

class App extends Component {
    render() {
        const { classes } = this.props
        return (
            <>
                <Navigation />
                <Box className={classes.root}>
                    <Contact />
                    <Contact />
                    <Contact />
                    <Contact />
                </Box>
            </>
        )
    }
}

// COMPONENT'S STYLE
const useStyles = (theme) => ({
    root: {
        padding: '2.5rem',
        display: 'grid',
        gridAutoFlow: 'row',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gridGap: '1rem',
    },
})

export default withStyles(useStyles)(App)
