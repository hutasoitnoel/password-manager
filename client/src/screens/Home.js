// React
import React, { useEffect } from 'react'

// Components
import List from '../components/List'
import Form from '../components/Form'

import { connect } from 'react-redux'

import { persistLogin, newPassword, getPasswords } from '../store/action'
import Jumbotron from '../components/Jumbotron';

const mapStateToProps = state => ({
    isLogin: state.isLogin
})

const mapDispatchToProps = {
    persistLogin,
    newPassword,
    getPasswords
}

function Home(props) {
    useEffect(() => {
        if (localStorage.token && !props.isLogin) {
            props.getPasswords()
            props.persistLogin()
            props.newPassword()
        }
    }, [props])

    return (
        <>
            <div className="container">
                <Jumbotron />
                <div className="row">
                    <div className="col-8">
                        <List />
                    </div>
                    <div className="col-4">
                        <Form />
                    </div>
                </div>
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)