import React, { Component } from 'react'

// COMPONENTS
import AddContactModal from './AddContactModal'

// REDUX
import { connect } from 'react-redux'
import { compose } from 'redux'

// MATERIAL UI
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/styles'

class Navigation extends Component {
    handleDeleteAll = () => {
        if (this.props.contacts.length < 1) {
            alert('Hey! there is no available contacts!!!')
            return
        }

        if (window.confirm('Are you sure you want to delete all contacts?')) {
            setTimeout(() => {
                this.setState({ isLoading: false })
                this.props.deleteAllContact()
                alert('All contacts are succefully deleted!')
            })
        }
    }

    render() {
        const { classes, toggleModalShow } = this.props
        return (
            <>
                <AppBar position='relative'>
                    <div className={classes.root}>
                        <Button variant='contained' color='secondary' onClick={toggleModalShow}>
                            Add Contact
                        </Button>
                        <Button variant='contained' onClick={this.handleDeleteAll}>
                            Delete All
                        </Button>
                    </div>
                </AppBar>
                <AddContactModal />
            </>
        )
    }
}

// COMPONENT'S STYLE
const useStyles = (theme) => ({
    root: {
        padding: '1rem',
        display: 'flex',
        gap: '.5rem',

        '& > *': {
            width: '130px',
            padding: '.5rem',
        },

        '& > *:nth-child(1):hover': {
            backgroundColor: '#05c46b',
        },

        '& > *:nth-child(2)': {
            backgroundColor: '#ff5e57',
            color: '#ffffff',
        },

        '& > *:nth-child(2):hover': {
            backgroundColor: '#ff3f34',
        },
    },
})

// REDUX
const mapStateToProps = function (state) {
    return {
        showAddContactModal: state.HandleAddContactModalShow,
        contacts: state.HandleContact,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleModalShow: () => {
            const action = { type: 'SHOW_HIDE_ADD_CONTACT_MODAL' }
            dispatch(action)
        },
        deleteAllContact: () => {
            const action = { type: 'DELETE_ALL' }
            dispatch(action)
        },
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(useStyles))(Navigation)
