import React, { Component } from 'react'

// MATERIAL UI
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/styles'

class Navigation extends Component {
    render() {
        const { classes } = this.props
        return (
            <>
                <>
                    <AppBar className={classes.root} position='relative'>
                        <Button variant='contained' color='secondary'>
                            Add Contact
                        </Button>
                    </AppBar>
                </>
            </>
        )
    }
}

// COMPONENT'S STYLE
const useStyles = (theme) => ({
    root: {
        padding: '1rem',
        display: 'flex',

        '& > *': {
            width: '130px',
            padding: '.5rem',
        },

        '& > *:hover': {
            backgroundColor: '#7158e2',
        },
    },
})

export default withStyles(useStyles)(Navigation)
