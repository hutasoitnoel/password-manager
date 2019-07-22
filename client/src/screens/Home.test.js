import React from 'react';
import Home from './Home'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {
    render,
    fireEvent,
    cleanup,
    waitForElement,
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe("Test home", () => {
    it('renders withour crashing', () => {
        localStorage.token = 'test'

        let isLogin = false

        const { getByTestId, debug } = render(
            <Provider store={store}>
                <Router>
                    <Home isLogin={isLogin} />
                </Router>
            </Provider>
        )

        const createAccount = getByTestId('createAccount')
        fireEvent.change(createAccount, {
            target: {
                value: "testing"
            }
        })

        const createEmail = getByTestId('createEmail')
        fireEvent.change(createEmail, {
            target: {
                value: "testing"
            }
        })

        const createPassword = getByTestId('createPassword')
        fireEvent.change(createPassword, {
            target: {
                value: "tEst1ng."
            }
        })

        const submitCreate = getByTestId('submitCreate')
        fireEvent.click(submitCreate)

        const toEdit = getByTestId('toEdit')
        fireEvent.click(toEdit)
    })

    afterEach(cleanup)
})