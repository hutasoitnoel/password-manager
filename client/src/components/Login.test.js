import React from 'react';
import Login from './Login'
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
                    <Login />
                </Router>
            </Provider>
        )

        const toRegister = getByTestId('toRegister')
        fireEvent.click(toRegister)

        const toLogin = getByTestId('toLogin')
        fireEvent.click(toLogin)
    })
})