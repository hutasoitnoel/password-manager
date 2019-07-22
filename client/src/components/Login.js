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
                    <form onSubmit={e => submitLogin(e, username, password)}>
                        <div className="row justify-content-center">
                            <input
                                type="text"
                                className="form-control col-6"
                                style={{ width: "50%" }}
                                onChange={e => setUsername(e.target.value)}
                                placeholder="Username"
                                required={true}
                                data-testid="loginUsername"
                            />
                        </div>
                        <div className="row justify-content-center">
                            <input
                                type="password"
                                className="form-control col-6"
                                style={{ width: "50%" }}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Password"
                                required={true}
                                data-testid="loginPassword"
                            />
                        </div>
                        <div className="row justify-content-center">
                            <button
                                className="btn mt-3"
                                style={{ backgroundColor: "#F6D55C" }}
                                data-testid='submitLogin'
                            >Login</button>
                        </div>
                    </form>
                    <div className="row justify-content-center mt-3">
                        <span>Haven't had an account?</span>
                    </div>
                    <div className="row justify-content-center">
                        <button
                            className="btn p-1"
                            style={{ color: "#3CAEA3", fontWeight: "bold" }}
                            onClick={e => setMode('register')}
                            data-testid="toRegister"
                        >Register</button>
                    </div>
                </div>
            }
            {
                mode === 'register' &&
                <div className="container">
                    <form onSubmit={e => submitRegister(e, username, password)}>
                        <div className="row justify-content-center">
                            <input
                                type="text"
                                className="form-control"
                                style={{ width: "50%" }}
                                onChange={e => setUsername(e.target.value)}
                                placeholder="Username"
                                required={true}
                                data-testid="registerUsername"
                            />
                        </div>
                        <div className="row justify-content-center">
                            <input
                                type="password"
                                className="form-control"
                                style={{ width: "50%" }}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Password"
                                required={true}
                                data-testid="registerPassword"
                            />
                        </div>
                        <div className="row justify-content-center">
                            <button
                                className="btn mt-3"
                                style={{ backgroundColor: "#F6D55C" }}
                                data-testid="submitRegister"
                            >Register</button>
                        </div>
                    </form>
                    <div className="row justify-content-center mt-3">
                        <span>Already have an account?</span>
                    </div>
                    <div className="row justify-content-center">
                        <button
                            className="btn p-1"
                            style={{ color: "#3CAEA3", fontWeight: "bold" }}
                            onClick={e => setMode('login')}
                            data-testid="toLogin"
                        >Login</button>
                    </div>
                </div>
            }
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginPage))