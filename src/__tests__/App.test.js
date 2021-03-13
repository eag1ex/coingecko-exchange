/* eslint-disable no-undef */
import { loggerSetting } from 'x-utils-es'
// disable any loggind in testing
loggerSetting('log', 'off')
loggerSetting('debug', 'off')

import React from 'react'
import { render, cleanup } from '@testing-library/react'
import App from '../App'

describe('Take a snapshot', () => {
    afterEach(cleanup)
    it('<App/> should take a snapshot', () => {
        const { asFragment } = render(<App />)
    
        expect(asFragment(<App />)).toMatchSnapshot()
    })
})
