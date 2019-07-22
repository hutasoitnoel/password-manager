// React
import React from 'react'

//Components
import Login from '../components/Login'

// Background
import Background from '../assets/background.png'

export default function () {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${Background})`,
                    height: "100vh",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>
                <div className="navbar navbar-default" style={{ boxShadow: "0 5px 5px -5px rgba(0,0,0,.2)", height: "50px", backgroundColor: "#3CAEA3" }}></div>
                <div className="row justify-content-center">
                    <div className="container row justify-content-center" style={{ marginTop: "200px" }}>
                        <div className="jumbotron" style={{ width: "850px", boxShadow: "0 5px 5px -5px rgba(0,0,0,.2)", backgroundColor: "white" }}>
                            <h1 className="row justify-content-center mb-3">PASSWORD MANAGER!</h1>
                            <Login />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}