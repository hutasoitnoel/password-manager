import React, { useState } from 'react'

export default function ({ password, index, viewPassword, deletePassword }) {
    const [seen, setSeen] = useState(false)

    return (
        <>
            <div className="col-4 py-2 px-1 mb-2 mt-5" style={{ height: "300px", width: "100px" }}>
                <div className="border" style={{ borderRadius: "6px" }}>
                    <div className="row justify-content-center mt-3">
                        <h3 className="my-2">{password.account}</h3>
                    </div>
                    <div className="row justify-content-center my-3">
                        <img alt={password.icon} height="100px" style={{ maxWidth: "175px" }} src={password.icon} />
                    </div>
                    <div className="row justify-content-center">
                        <span>{password.email}</span>
                    </div>
                    <div className="row justify-content-center">
                        {
                            seen &&
                            <span>{password.password}</span>
                        }
                        {
                            !seen &&
                            <span>*****</span>
                        }
                    </div>
                    <div className="row my-4 px-3">
                        <div className="col-md-4">
                            {
                                !seen &&
                                <button 
                                className="btn btn-info" 
                                style={{ backgroundColor: "#3CAEA3" }} 
                                onClick={e => setSeen(true)}
                                data-testid="toSeen"
                                ><i className="fas fa-eye"></i></button>
                            }
                            {
                                seen &&
                                <button 
                                className="btn btn-info" 
                                style={{ backgroundColor: "#3CAEA3" }} 
                                onClick={e => setSeen(false)}
                                data-testid="toUnseen"
                                ><i className="fas fa-eye-slash"></i></button>
                            }
                        </div>
                        <div className="col-md-4">
                            <button 
                            className="btn" 
                            style={{ backgroundColor: "#F6D55C" }} 
                            onClick={e => viewPassword(e, password._id)}
                            data-testid="toEdit"
                            ><i className="far fa-edit"></i></button>
                        </div>
                        <div className="col-md-4">
                            <button 
                            className="btn btn-danger border-0"
                             style={{ backgroundColor: "#ED553B" }} 
                             onClick={e => deletePassword(e, password._id)}
                             data-testid="toDelete"
                             ><i className="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}