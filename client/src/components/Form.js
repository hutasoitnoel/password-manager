// React
import React, { useEffect, useState } from 'react'

// Redux
import { connect } from 'react-redux'

// Actions
import { actionCreate, actionEdit, newPassword } from '../store/action'

const mapStateToProps = state => ({
    currentPassword: state.currentPassword
})

const mapDispatchToProps = {
    actionCreate,
    actionEdit,
    newPassword
}

function Form(props) {
    const [account, setAccount] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        setAccount(props.currentPassword.account)
        setEmail(props.currentPassword.email)
        setPassword(props.currentPassword.password)
    }, [props.currentPassword])

    const editPassword = (e, account, email, password) => {
        e.preventDefault()
        props.actionEdit(props.currentPassword._id, { account, email, password })
        props.newPassword()
    }

    const createPassword = (e, account, email, password) => {
        e.preventDefault()
        props.actionCreate({ account, email, password })
        setAccount("")
        setEmail("")
        setPassword("")
    }
    return (
        <>
            {
                props.currentPassword.account &&
                <div className="card">
                    <div className="card-header" style={{ textAlign: "center", backgroundColor: "#3CAEA3", color: "white" }}>Edit password</div>
                    <div className="card-body">
                        <form onSubmit={e => editPassword(e, account, email, password)}>
                            <div className='form-group row'>
                                <div className="col-md-12">
                                    <label>Account</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Account name"
                                        value={account}
                                        onChange={e => setAccount(e.target.value)}
                                        style={{ width: "100%" }}
                                        required={true}
                                        data-testid="editAccount"
                                    />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className="col-md-12">
                                    <label>Email</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Registered email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        style={{ width: "100%" }}
                                        required={true}
                                        data-testid="editEmail"
                                    />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className="col-md-12">
                                    <label>Password</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Registered password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        style={{ width: "100%" }}
                                        required={true}
                                        data-testid="editPassword"
                                    />
                                </div>
                            </div>
                            <button 
                            className="btn btn-info"
                            data-testid="submitEdit"
                            >Edit</button>
                        </form>
                    </div>
                </div>
            }

            {
                !props.currentPassword.account &&
                <div className="card">
                    <div className="card-header" style={{ textAlign: "center", backgroundColor: "#3CAEA3", color: "white" }}>New password</div>
                    <div className="card-body">
                        <form onSubmit={e => createPassword(e, account, email, password)}>
                            <div className='form-group row'>
                                <div className="col-md-12">
                                    <label>Account</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Account name"
                                        value={account}
                                        onChange={e => setAccount(e.target.value)}
                                        style={{ width: "100%" }}
                                        required={true}
                                        data-testid="createAccount"
                                    />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className="col-md-12">
                                    <label>Email</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Registered email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        style={{ width: "100%" }}
                                        required={true}
                                        data-testid="createEmail"
                                    />
                                </div>
                            </div>
                            <div className='form-group row'>
                                <div className="col-md-12">
                                    <label>Password</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Registered password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        style={{ width: "100%" }}
                                        required={true}
                                        data-testid="createPassword"
                                    />
                                </div>
                            </div>
                            <button 
                            className="btn" 
                            style={{ color: "white", backgroundColor: "#3CAEA3" }}
                            data-testid="submitCreate"
                            >Add</button>
                        </form>
                    </div>
                </div>
            }

            <div className="card my-3">
                <div className="card-header" style={{ textAlign: "center", backgroundColor: "#3CAEA3", color: "white" }}>
                    Status
                </div>
                <div className="card-body">
                    <div className='form-group row'>
                        <label className='col-8'>At least 1 lowercase letter</label>
                        {
                            (/[a-z]/.test(password)) &&
                            <i className="fas fa-check" style={{ color: 'green' }}></i>
                        }
                        {
                            !(/[a-z]/.test(password)) &&
                            <i className="fa fa-times" aria-hidden="true" style={{ color: 'red' }}></i>
                        }
                    </div>
                    <div className='form-group row'>
                        <label className='col-8'>At least 1 uppercase letter</label>
                        {
                            (/[A-Z]/.test(password)) &&
                            <i className="fas fa-check" style={{ color: 'green' }}></i>
                        }
                        {
                            !(/[A-Z]/.test(password)) &&
                            <i className="fa fa-times" aria-hidden="true" style={{ color: 'red' }}></i>
                        }
                    </div>
                    <div className='form-group row'>
                        <label className='col-8'>At least 1 digit</label>
                        {
                            (/\d/.test(password)) &&
                            <i className="fas fa-check" style={{ color: 'green' }}></i>
                        }
                        {
                            !(/\d/.test(password)) &&
                            <i className="fa fa-times" aria-hidden="true" style={{ color: 'red' }}></i>
                        }
                    </div>
                    <div className='form-group row'>
                        <label className='col-8'>At least 1 symbol</label>
                        {
                            (/\W/.test(password)) &&
                            <i className="fas fa-check" style={{ color: 'green' }}></i>
                        }
                        {
                            !(/\W/.test(password)) &&
                            <i className="fa fa-times" aria-hidden="true" style={{ color: 'red' }}></i>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)