/* eslint-disable no-undef */
import { loggerSetting } from 'x-utils-es'
// disable any logging in testing
loggerSetting('log', 'off')
loggerSetting('debug', 'off')
loggerSetting('error', 'off')
import React from 'react'
import { Router } from 'react-router-dom'
import { render, fireEvent, waitForElement, cleanup } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import App from '../App'

// NOTE the tests dependant on the api.coingecko API to fetch results and be evaluated on the page

const renderWithRouter = (component) => {
    const history = createMemoryHistory()
    return {
        ...render(
            <Router history={history}>
                {component}
            </Router>
        )
    }
}

describe('Change page routes', () => {

    afterEach(() => {
        cleanup()
    })

    it('should navigate to page 3 of exchanges', async () => {
        jest.setTimeout(35000)
        const { getByTestId } = renderWithRouter(<App />)
        await waitForElement(() => getByTestId('exchange-wrap-page-1'))

        const thirdPaged = await waitForElement(() => document.querySelectorAll('[data-testid] ul>li button')[3])
        expect(thirdPaged.innerHTML.length).toBeGreaterThan(0)

        fireEvent.click(thirdPaged)
        let doc = await waitForElement(() => getByTestId('exchange-wrap-page-3'))
        expect(doc.innerHTML.length).toBeGreaterThan(0)
    })
    
})
