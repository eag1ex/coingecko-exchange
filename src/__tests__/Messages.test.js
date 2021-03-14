/* eslint-disable no-undef */
import { loggerSetting } from 'x-utils-es'
// disable any logging in testing
loggerSetting('log', 'off')
loggerSetting('debug', 'off')
loggerSetting('error', 'off')

import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Messages from '../components/Messages'

describe('Test <Message/> component', () => {

    afterEach(() => {
        cleanup()
    })

    it('<Message/> should have error', () => {
        const { container } = render(<Messages type="error" value="ups error" />) 
        expect(container.innerHTML).toMatch(/ups error/i)
    })

    it('<Message/> should have success', () => {
        const { container } = render(<Messages type="success" value="its all good" />) 
        expect(container.innerHTML).toMatch(/its all good/i)
    })

    it('<Message/> should have warning', () => {
        const { container } = render(<Messages type="warning" value="its a warning" />) 
        expect(container.innerHTML).toMatch(/its a warning/i)
    })

    it('<Message/> should have info', () => {
        const { container } = render(<Messages type="info" value="its a info" />) 
        expect(container.innerHTML).toMatch(/its a info/i)
    })
})
