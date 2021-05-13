import React, { Component } from 'react'

// COMPONENTS
import Navigation from './components/Navigation'
import Contact from './components/Contact'

// REDUX
import { connect } from 'react-redux'
import { compose } from 'redux'

// MATERIAL UI
import Box from '@material-ui/core/Box'
import { withStyles } from '@material-ui/styles'

class App extends Component {
    render() {
        const { classes, contacts } = this.props
        return (
            <>
                <Navigation />
                <Box className={classes.root}>
                    {contacts &&
                        contacts.map((contact, index) => {
                            return (
                                <Contact
                                    key={index}
                                    id={contact.id}
                                    firstName={contact.firstName}
                                    middleName={contact.middleName}
                                    lastName={contact.lastName}
                                    contactNumber={contact.contactNumber}
                                    emailAddress={contact.emailAddress}
                                />
                            )
                        })}
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

// REDUX-
const mapStateToProps = function (state) {
    return {
        contacts: state.HandleContact,
    }
}

export default compose(connect(mapStateToProps), withStyles(useStyles))(App)
