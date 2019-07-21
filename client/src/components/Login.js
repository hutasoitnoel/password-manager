// React
import React, { useState } from 'react'

// Redux
import { connect } from 'react-redux'
import { actionLogin, actionRegister } from '../store/action'

// React Router
import { withRouter } from 'react-router'

const mapStateToProps = state => ({})

const mapDispatchToProps = {
    actionLogin,
    actionRegister
}

function LoginPage(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [mode, setMode] = useState("login")

    const submitLogin = (e, username, password) => {
        e.preventDefault()
        props.actionLogin({ username, password }, props.history)
    }

    const submitRegister = (e, username, password) => {
        e.preventDefault()
        props.actionRegister({ username, password })
        setMode('login')
    }

    return (
        <>
            {
                mode === 'login' &&
                <div className="container">
                    <h1> Login</h1>
                    <form onSubmit={e => submitLogin(e, username, password)}>
                        <input
                            type="text"
                            className="form-control"
                            style={{ width: "50%" }}
                            onChange={e => setUsername(e.target.value)}
                            placeholder="Username"
                            required={true}
                        />
                        <input
                            type="password"
                            className="form-control"
                            style={{ width: "50%" }}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password" 
                            required={true}
                            />
                        <button
                            className="btn mt-1"
                            style={{ backgroundColor: "#3CAEA3" }}
                        >Login</button>
                    </form>
                    <div className="row mt-3">
                        <span>Haven't had an account?</span>
                    </div>
                    <button className="btn p-1" style={{ backgroundColor: "#F6D55C" }} onClick={e => setMode('register')}>Register</button>
                </div>
            }
            {
                mode === 'register' &&
                <div className="container">
                    <h1>Register</h1>
                    <form onSubmit={e => submitRegister(e, username, password)}>
                        <input
                            type="text"
                            className="form-control"
                            style={{ width: "50%" }}
                            onChange={e => setUsername(e.target.value)}
                            placeholder="Username" 
                            required={true}
                            />
                        <input
                            type="password"
                            className="form-control"
                            style={{ width: "50%" }}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password" 
                            required={true}
                            />
                        <button
                            className="btn mt-1"
                            style={{ backgroundColor: "#3CAEA3" }}
                        >Register</button>
                    </form>
                    <div className="row mt-3">
                        <span>Already have an account?</span>
                    </div>
                    <button className="btn p-1" style={{ backgroundColor: "#F6D55C" }} onClick={e => setMode('login')}>Login</button>
                </div>
            }
        </>
    )
}




export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage))