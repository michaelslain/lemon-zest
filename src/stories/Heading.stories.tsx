import React from 'react'
import { Story } from '@storybook/react'
import { Heading, HeadingProps } from '../components/Heading'
import { Page } from '../components/Page'

export default {
    title: 'Heading',
    component: Heading,
}

const Template: Story<HeadingProps> = args => (
    <Page>
        <Heading {...args} />
    </Page>
)

export const LargeSize = Template.bind({})
LargeSize.args = {
    size: 'large',
}

export const MediumSize = Template.bind({})
MediumSize.args = {
    size: 'medium',
}

export const SmallSize = Template.bind({})
SmallSize.args = {
    size: 'small',
}
