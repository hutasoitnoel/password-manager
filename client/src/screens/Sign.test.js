import React from 'react';
import Sign from './Sign'
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

afterEach(cleanup)
describe("Test login register page", () => {

    it('renders withour crashing', () => {
        const { getByTestId, debug } = render(
            <Provider store={store}>
                <Router>
                    <Sign />
                </Router>
            </Provider>
        )

        const toRegister = getByTestId('toRegister')
        fireEvent.click(toRegister)

        const registerUsername = getByTestId('registerUsername')
        fireEvent.change(registerUsername, {
            target: {
                value: 'testing'
            }
        })

        const registerPassword = getByTestId('registerPassword')
        fireEvent.change(registerPassword, {
            target: {
                value: 'testing'
            }
        })

        const submitRegister = getByTestId('submitRegister')
        fireEvent.click(submitRegister)

        const loginUsername = getByTestId('loginUsername')
        fireEvent.change(loginUsername, {
            target: {
                value: 'testing'
            }
        })

        const loginPassword = getByTestId('loginPassword')
        fireEvent.change(loginPassword, {
            target: {
                value: 'testing'
            }
        })

        const submitLogin = getByTestId('submitLogin')
        fireEvent.click(submitLogin)
    })
})