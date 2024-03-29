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

describe('Testing routes', () => {
    afterEach(() => {
        cleanup()
    })

    it('should render Exchange page', async (done) => {
        jest.setTimeout(30000)
        const { getByTestId } = renderWithRouter(<App />)
        const wrap = await waitForElement(() => getByTestId('exchange-wrap-page-1'))
        const pagination = await waitForElement(() => getByTestId('pagination'))
        expect((wrap.innerHTML || '').length).toBeGreaterThan(0)
        expect((pagination.innerHTML || '').length).toBeGreaterThan(0)
        done()
    })

    it('should include 10 products on page', async (done) => {
        jest.setTimeout(30000)
        const { getByTestId } = renderWithRouter(<App />)
        const wrap = await waitForElement(() => getByTestId('exchange-wrap-page-1'))
        const productList = await waitForElement(() => document.querySelectorAll('.product-item'))
        expect((wrap.innerHTML || '').length).toBeGreaterThan(0)
        expect(productList.length).toEqual(10)
        done()
    })

    it('should navigate to <ProductDetail/>', async () => {
        jest.setTimeout(30000)
        const { container, getByTestId } = renderWithRouter(<App />)
        await waitForElement(() => getByTestId('exchange-wrap-page-1'))
        const detailLink = await waitForElement(() => document.querySelector('.detail-link'))
        fireEvent.click(detailLink)

        await waitForElement(() => getByTestId('product-detail'))
        expect(container.innerHTML).toMatch('Back to Exchanges')
    })
})
