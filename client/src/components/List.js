// React
import React from 'react'

// Components
import Item from './Item'

import { connect } from 'react-redux'

import { getPasswords, actionDelete, actionView } from '../store/action'

const mapStateToProps = state => ({
    passwords: state.passwords
})

const mapDispatchToProps = {
    getPasswords,
    actionView,
    actionDelete
}

function Table(props) {
    const viewPassword = (e, passwordId) => {
        e.preventDefault()
        props.actionView(passwordId)
    }

    const deletePassword = (e, passwordId) => {
        e.preventDefault()
        props.actionDelete(passwordId)
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-start flex-wrap">
                    {
                        props.passwords.map((password, index) => {
                            return (
                                <Item
                                    key={index}
                                    viewPassword={viewPassword}
                                    deletePassword={deletePassword}
                                    password={password}
                                    index={index} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)