import React, { Component } from 'react'

// REDUX
import { connect } from 'react-redux'
import { compose } from 'redux'

// MATERIAL UI
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/styles'

class EditContactModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            id: '',
            firstName: '',
            middleName: '',
            lastName: '',
            contactNumber: '',
            emailAddress: '',
        }
    }

    handleFieldChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSaveEditedContact = () => {
        this.setState({ isLoading: true })

        this.setState({ id: this.props.editContact.length > 0 && this.props.editContact[0].id })

        setTimeout(() => {
            this.props.deleteContact(this.props.editContact.length > 0 && this.props.editContact[0].id)
            this.props.addContact(this.state)
            this.setState({
                isLoading: false,
            })
            this.props.toggleEditModalShow()
            this.props.clearEditContact()
        }, 3000)
    }

    toggleEditModal = () => {
        this.props.toggleEditModalShow()
        this.props.clearEditContact()
    }

    render() {
        const { classes, editContactModalShow } = this.props
        return (
            <>
                <Modal
                    aria-labelledby='transition-modal-title'
                    aria-describedby='transition-modal-description'
                    className={classes.modal}
                    open={editContactModalShow}
                    onClose={this.toggleEditModal}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={editContactModalShow}>
                        <div className={classes.paper}>
                            <h3>Edit Contact</h3>
                            <form className={classes.form}>
                                <TextField
                                    onChange={this.handleFieldChange}
                                    defaultValue={this.props.editContact.length > 0 ? this.props.editContact[0].firstName : ''}
                                    name='firstName'
                                    label='First Name'
                                    variant='outlined'
                                    autoComplete='off'
                                />
                                <TextField
                                    onChange={this.handleFieldChange}
                                    defaultValue={this.props.editContact.length > 0 ? this.props.editContact[0].middleName : ''}
                                    name='middleName'
                                    label='Middle Name'
                                    variant='outlined'
                                    autoComplete='off'
                                />
                                <TextField
                                    onChange={this.handleFieldChange}
                                    defaultValue={this.props.editContact.length > 0 ? this.props.editContact[0].lastName : ''}
                                    name='lastName'
                                    label='Last Name'
                                    variant='outlined'
                                    autoComplete='off'
                                />
                                <TextField
                                    onChange={this.handleFieldChange}
                                    defaultValue={this.props.editContact.length > 0 ? this.props.editContact[0].contactNumber : ''}
                                    name='contactNumber'
                                    label='Contact Number'
                                    variant='outlined'
                                    autoComplete='off'
                                />
                                <TextField
                                    onChange={this.handleFieldChange}
                                    defaultValue={this.props.editContact.length > 0 ? this.props.editContact[0].middleName : ''}
                                    name='emailAddress'
                                    label='Email Address'
                                    variant='outlined'
                                    autoComplete='off'
                                />
                                <Button
                                    disabled={this.state.isLoading}
                                    className={classes.button}
                                    variant='contained'
                                    color='secondary'
                                    onClick={this.handleSaveEditedContact}
                                >
                                    {this.state.isLoading ? <CircularProgress size={23} /> : 'Save'}
                                </Button>
                            </form>
                        </div>
                    </Fade>
                </Modal>
            </>
        )
    }
}

// COMPONENT'S STYLE
const useStyles = (theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        outline: 'none',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',

        '& > button:hover': {
            backgroundColor: '#05c46b',
        },
    },
})

// REDUX
const mapStateToProps = function (state) {
    return {
        editContactModalShow: state.HandleEditContactModalShow,
        contacts: state.HandleContact,
        editContact: state.EditContact,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleEditModalShow: () => {
            const action = { type: 'SHOW_HIDE_EDIT_CONTACT_MODAL' }
            dispatch(action)
        },
        addContact: (payload) => {
            const action = { type: 'ADD_CONTACT', payload: payload }
            dispatch(action)
        },
        clearEditContact: () => {
            const action = { type: 'CLEAR_EDIT_CONTACT' }
            dispatch(action)
        },
        deleteContact: (payload) => {
            const action = { type: 'DELETE_CONTACT', payload }
            dispatch(action)
        },
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(useStyles))(EditContactModal)
