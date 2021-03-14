/* eslint-disable no-undef */
import { loggerSetting } from 'x-utils-es'
// disable any logging in testing
loggerSetting('log', 'off')
loggerSetting('debug', 'off')
loggerSetting('error', 'off')

import React from 'react'
import { render, cleanup } from '@testing-library/react'
import SocialMedia from '../components/SocialMedia'

describe('Test <SocialMedia/> component', () => {

    const socialList = () => {
        return [{ name: 'Facebook', type: 'facebook', url: 'fake_url' }, { name: 'Twitter', type: 'twitter', url: `http://twitter.com/fake_id` }, { name: 'Telegram', type: 'telegram', url: 'fake_url' }]
    }

    afterEach(() => {
        cleanup()
    })

    it('<SocialMedia/> should display all available svgs', () => {
        let list = socialList()
        const { container } = render(<SocialMedia socialList={list} />)           
        expect(container.querySelectorAll('svg').length).toEqual(list.length)
    })

})
