// React
import React from 'react'

// Connect
import { connect } from 'react-redux'

// Actions
import { newPassword, actionLogout } from '../store/action'

// Router
import { withRouter } from 'react-router'

const mapStateToProps = state => ({})

const mapDispatchToProps = {
    newPassword,
    actionLogout
}

function Jumbotron(props) {
    const toNewPassword = e => {
        e.preventDefault()
        props.newPassword()
    }

    const logout = e => {
        e.preventDefault()
        props.actionLogout(props.history)
    }

    return (
        <>
            <div className="jumbotron mt-3 py-4">
                <div className="d-flex justify-content-end">
                    <button 
                    onClick={e => logout(e)} 
                    className="btn btn-lg" 
                    style={{ color: "white", backgroundColor: "#F6D55C" }}
                    data-testid="logout"
                    >Logout</button>
                </div>
                <h1 className="display-4">Password Manager!</h1>
                <p className="lead">This is a simple password manager application</p>
                <hr className="my-4" />
                <button 
                onClick={e => toNewPassword(e)} 
                className="btn btn-lg mt-2" 
                style={{ color: "white", backgroundColor: "#3CAEA3" }}
                data-testid="newPassword"
                >New password!</button>
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Jumbotron))