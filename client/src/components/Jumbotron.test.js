import React from 'react';
import Jumbotron from './Jumbotron'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router } from 'react-router-dom'
import {
    render,
    fireEvent,
    cleanup,
    waitForElement,
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe("Test jumbotron", () => {

    it('renders withour crashing', () => {
        const { getByTestId, debug } = render(
            <Provider store={store}>
                <Router>
                    <Jumbotron />
                </Router>
            </Provider>
        )

        const newPassword = getByTestId('newPassword')
        fireEvent.click(newPassword)

        const logout = getByTestId('logout')
        fireEvent.click(logout)
    })

    afterEach(cleanup)
})