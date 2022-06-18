import React from 'react'
import { Story } from '@storybook/react'
import { Container, ContainerProps } from '../components/Container'
import { Page } from '../components/Page'

export default {
    title: 'Container',
    component: Container,
}

const Template: Story<ContainerProps> = args => (
    <Page>
        <Container {...args} width={100} height={100} round />
    </Page>
)

export const PrimaryColor = Template.bind({})
PrimaryColor.args = {
    color: 'primary',
}

export const SecondaryColor = Template.bind({})
SecondaryColor.args = {
    color: 'secondary',
}

export const DarkerBrightness = Template.bind({})
DarkerBrightness.args = {
    brightness: 'darker',
}

export const Shadow = Template.bind({})
Shadow.args = {
    shadow: true,
}
