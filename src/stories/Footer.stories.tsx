import React from 'react'
import { Story } from '@storybook/react'
import { Footer, FooterProps } from '../components/Footer'
import { Page } from '../components/Page'

export default {
    title: 'Footer',
    component: Footer,
}

const Template: Story<FooterProps> = args => (
    <Page theme={{ type: 'dark' }}>
        <Footer {...args} />
    </Page>
)

export const Standard = Template.bind({})
Standard.args = {
    appName: 'm00chle',
}

export const Tall = Template.bind({})
Tall.args = {
    appName: 'm00chle',
    height: 800,
}
