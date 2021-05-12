import React, { Component } from 'react'

// MATERIAL UI
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/styles'

class Contact extends Component {
    render() {
        const { classes } = this.props
        return (
            <>
                <>
                    <Card className={classes.root}>
                        <CardContent>
                            <div>
                                <h4>First Name:</h4>
                                <span>Juan</span>
                            </div>
                            <div>
                                <h4>Middle Name:</h4>
                                <span>Tamad</span>
                            </div>
                            <div>
                                <h4>Last Name:</h4>
                                <span>Dela Cruz</span>
                            </div>
                            <div>
                                <h4>Mobile Number:</h4>
                                <span>123</span>
                            </div>
                            <div>
                                <h4>Email Address:</h4>
                                <span>juan.tamad@email.com</span>
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button size='small'>Edit</Button>
                            <Button size='small'>Delete</Button>
                        </CardActions>
                    </Card>
                </>
            </>
        )
    }
}

// COMPONENT'S STYLE
const useStyles = (theme) => ({
    root: {
        maxWidth: 345,

        '& > *:nth-child(1)': {
            '& > div': {
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '1rem',
            },
        },
    },
    media: {
        height: 140,
    },
})

export default withStyles(useStyles)(Contact)
