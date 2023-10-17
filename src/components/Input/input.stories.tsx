import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
const meta = {
    title: '组件/数据录入/Input 输入框',
    component: Input,
    tags: ['autodocs']
} satisfies Meta<typeof Input>
export default meta
type Story = StoryObj<typeof meta>

export const DefaultInput: Story = {
    args: {
        placeholder: 'default input',
    }
}

export const DisabledInput: Story = {
    args: {
        disabled: true,
        placeholder: 'disabled input',
    }
}

export const SizeInput: Story = {
    render: (args) => (
        <>
            <Input defaultValue="large size input" size="lg" />
            <Input placeholder="middle size input" size="md" />
            <Input placeholder="small size input" size="sm" />
        </>
    )
}

export const IconInput: Story = {
    render: (args) => (
        <>
            <Input placeholder="input with icon" icon="search" />
            <Input placeholder="input with icon" icon="times" />
            <Input placeholder="input with icon" icon="check" />
        </>
    )
}