import React, { Component } from 'react'

// COMPONENT

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

const initialState = {
    isLoading: false,
    isFieldEmpty: false,
    isEmailValid: true,
    firstName: '',
    middleName: '',
    lastName: '',
    contactNumber: '',
    emailAddress: '',
}

class AddContactModal extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }

    handleSubmitForm = (e) => {
        e.preventDefault()

        this.setState({ isLoading: true })

        // SIMPLE IMAGINARY VALIDATAION! I JUST POPUP A SIMPLE ALERT!
        for (const props of Object.entries(this.props.contacts)) {
            if (props[1].firstName === this.state.firstName || props[1].contactNumber === this.state.contactNumber) {
                alert('This contact is already exist!')
                this.setState({ isLoading: false })
                return
            }
        }
        if (!this.state.isEmailValid) {
            alert('Please enter a valid Email Address!')
            this.setState({ isLoading: false })
            return
        }
        const { firstName, middleName, lastName, contactNumber, emailAddress } = this.state
        if (!firstName || !middleName || !lastName || !contactNumber || !emailAddress) {
            alert('Please fill up empty fields!')
            this.setState({ isLoading: false })
            return
        }

        // SET RANDOM ID
        const setId = (Math.random() * 1000000).toFixed()
        this.setState({ id: setId })

        //
        setTimeout(() => {
            this.props.addContact(this.state)
            this.props.toggleModalShow()
            this.setState(initialState)
        }, 3000)
    }

    handleFieldChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })

        // THIS IS A BASIC EMAIL ADDRESS VERIRIFICATION, THIS IS JUST FOR SIMPLICITY AND DEMONSTRATION
        if (!this.state.emailAddress.includes('@')) {
            this.setState({ isEmailValid: false })
        } else {
            this.setState({ isEmailValid: true })
        }
    }

    hanleModalShow = () => {
        this.props.toggleModalShow()
        this.setState(initialState)
    }

    render() {
        const { classes, addContactModalShow } = this.props
        const { firstName, middleName, lastName, contactNumber, emailAddress } = this.state
        return (
            <>
                <Modal
                    aria-labelledby='transition-modal-title'
                    aria-describedby='transition-modal-description'
                    className={classes.modal}
                    open={addContactModalShow}
                    onClose={this.hanleModalShow}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={addContactModalShow}>
                        <div className={classes.paper}>
                            <h3>Add Contact</h3>
                            <form className={classes.form}>
                                <TextField
                                    onChange={this.handleFieldChange}
                                    value={firstName}
                                    name='firstName'
                                    label='First Name'
                                    variant='outlined'
                                    autoComplete='off'
                                />
                                <TextField
                                    onChange={this.handleFieldChange}
                                    value={middleName}
                                    name='middleName'
                                    label='Middle Name'
                                    variant='outlined'
                                    autoComplete='off'
                                />
                                <TextField
                                    onChange={this.handleFieldChange}
                                    value={lastName}
                                    name='lastName'
                                    label='Last Name'
                                    variant='outlined'
                                    autoComplete='off'
                                />
                                <TextField
                                    onChange={this.handleFieldChange}
                                    value={contactNumber}
                                    name='contactNumber'
                                    label='Contact Number'
                                    variant='outlined'
                                    autoComplete='off'
                                />
                                <TextField
                                    onChange={this.handleFieldChange}
                                    value={emailAddress}
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
                                    onClick={this.handleSubmitForm}
                                >
                                    {this.state.isLoading ? <CircularProgress size={23} /> : 'Add Contact'}
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

// REDUX-
const mapStateToProps = function (state) {
    return {
        addContactModalShow: state.HandleAddContactModalShow,
        contacts: state.HandleContact,
        editContact: state.EditContact,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModalShow: () => {
            const action = { type: 'SHOW_HIDE_ADD_CONTACT_MODAL' }
            dispatch(action)
        },
        addContact: (payload) => {
            const action = { type: 'ADD_CONTACT', payload: payload }
            dispatch(action)
        },
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(useStyles))(AddContactModal)
