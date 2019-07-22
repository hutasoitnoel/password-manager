import React from 'react';
import List from './List'
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

describe("Test password list", () => {
    let passwords = []

    beforeEach(() => {
        passwords.push({
            account: "test",
            email: "test",
            password: "test",
            icon: "test",
            userId: "test"
        })
    })

    it('renders withour crashing', () => {
        const { getAllByTestId, getByTestId, debug, container } = render(
            <Provider store={store}>
                <Router>
                    <List passwords={passwords} />
                </Router>
            </Provider>
        )

        expect(getAllByTestId('list-password')).toBeDefined()
    })

    afterEach(cleanup)
})