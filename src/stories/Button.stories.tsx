import React from 'react'
import { Story } from '@storybook/react'
import { Button, ButtonProps } from '../components/Button'
import { Page } from '../components/Page'

export default {
    title: 'Button',
    component: Button,
}

const Template: Story<ButtonProps> = args => (
    <Page>
        <Button {...args} />
    </Page>
)

export const PrimaryType = Template.bind({})
PrimaryType.args = {
    children: 'Primary Type',
    type: 'primary',
}

export const SecondaryType = Template.bind({})
SecondaryType.args = {
    children: 'Secondary Type',
    type: 'secondary',
}

export const PrimaryColor = Template.bind({})
PrimaryColor.args = {
    children: 'Primary Color',
    color: 'primary',
    type: 'primary',
}

export const SecondaryColor = Template.bind({})
SecondaryColor.args = {
    children: 'Secondary Color',
    color: 'secondary',
    type: 'primary',
}
