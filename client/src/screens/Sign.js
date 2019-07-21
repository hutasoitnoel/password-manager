// React
import React from 'react'

//Components
import Login from '../components/Login'

export default function () {
    return (
        <>
            <div className="navbar navbar-default" style={{ height: "50px", backgroundColor: "#3CAEA3" }}></div>
            <div className="container">
                <div className="jumbotron mt-5">
                <h1 className="row justify-content-center">PASSWORD MANAGER!</h1>
                    <Login />
                </div>
            </div>
        </>
    )
}