import React, { Component } from 'react'

// COMPONENTS
import EditContactModal from './EditContactModal'

// REDUX
import { connect } from 'react-redux'
import { compose } from 'redux'

// MATERIAL UI
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/styles'

class Contact extends Component {
    handleEdit = (e) => {
        const contact = this.props.contacts.filter((contact) => contact.id === e.currentTarget.id)
        this.props.editContact(...contact)
        this.props.toggleEditModalShow()
    }

    handleDelete = (e) => {
        this.props.deleteContact(e.currentTarget.id)
    }

    render() {
        const { classes, id, firstName, middleName, lastName, contactNumber, emailAddress } = this.props
        return (
            <>
                <Card className={classes.root}>
                    <CardContent>
                        <div>
                            <h4>First Name:</h4>
                            <span>{firstName}</span>
                        </div>
                        <div>
                            <h4>Middle Name:</h4>
                            <span>{middleName}</span>
                        </div>
                        <div>
                            <h4>Last Name:</h4>
                            <span>{lastName}</span>
                        </div>
                        <div>
                            <h4>Mobile Number:</h4>
                            <span>{contactNumber}</span>
                        </div>
                        <div>
                            <h4>Email Address:</h4>
                            <span>{emailAddress}</span>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button id={id} size='small' onClick={this.handleEdit}>
                            Edit
                        </Button>
                        <Button id={id} size='small' onClick={this.handleDelete}>
                            Delete
                        </Button>
                    </CardActions>
                </Card>
                <EditContactModal />
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

// REDUX-
const mapStateToProps = function (state) {
    return {
        contacts: state.HandleContact,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleEditModalShow: () => {
            const action = { type: 'SHOW_HIDE_EDIT_CONTACT_MODAL' }
            dispatch(action)
        },
        editContact: (payload) => {
            const action = { type: 'EDIT_CONTACT', payload }
            dispatch(action)
        },
        deleteContact: (payload) => {
            const action = { type: 'DELETE_CONTACT', payload }
            dispatch(action)
        },
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(useStyles))(Contact)
