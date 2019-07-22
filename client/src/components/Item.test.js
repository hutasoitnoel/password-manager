import React from 'react';
import Item from './Item'
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

describe("Test password card", () => {
    let password = {}

    beforeEach(() => {
        password = {
            account: "test",
            email: "test",
            password: "test",
            icon: "test",
            userId: "test"
        }
    })
    
    it('renders withour crashing', () => {
        const { getByTestId, debug } = render(
            <Provider store={store}>
                <Router>
                    <Item password={password} />
                </Router>
            </Provider>
        )
        
        const toSeen = getByTestId('toSeen')
        fireEvent.click(toSeen)
        
        const toUnseen = getByTestId('toUnseen')
        fireEvent.click(toUnseen)

        const toEdit = getByTestId('toEdit')
        fireEvent.click(toEdit)

        const toDelete = getByTestId('toDelete')
        fireEvent.click(toDelete)
    })

    afterEach(cleanup)
})