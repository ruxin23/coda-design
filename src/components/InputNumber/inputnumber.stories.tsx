import type { Meta, StoryObj } from '@storybook/react';
import { InputNumber } from './inputnumber';
import { useState } from 'react'
import { InputNumberProps } from './inputnumber'
const meta = {
    title: '组件/数据录入/InputNumber 数字输入框',
    component: InputNumber,
    tags: ['autodocs']
} satisfies Meta<typeof InputNumber>
export default meta

type Story = StoryObj<typeof meta>


export const DefaultInputNumber = (args: Story) => {
    const [value, setValue] = useState('0')
    const onChange = (value: string) => {
        setValue(value)
    }
    return <InputNumber {...args} value={value} onChange={onChange} />
}

export const AutoFocusInputNumber = (args: Story) => {
    const [value, setValue] = useState('0')
    const onChange = (value: string) => {
        setValue(value)
    }
    return <InputNumber {...args} value={value} onChange={onChange} autoFocus={true} />
}

export const ControlsInputNumber = (args: Story) => {
    const [value, setValue] = useState('0')
    const onChange = (value: string) => {
        setValue(value)
    }
    return <InputNumber {...args} value={value} onChange={onChange} controls={false} />
}

export const DisabledInputNumber = (args: Story) => {
    const [value, setValue] = useState('0')
    const onChange = (value: string) => {
        setValue(value)
    }
    return <InputNumber {...args} value={value} onChange={onChange} disabled={true} />
}

export const KeyboardInputNumber = (args: Story) => {
    const [value, setValue] = useState('0')
    const onChange = (value: string) => {
        setValue(value)
    }
    return <InputNumber {...args} value={value} onChange={onChange} keyboard={false} />
}

export const MaxAndMinInputNumber = (args: Story) => {
    const [value, setValue] = useState('0')
    const onChange = (value: string) => {
        setValue(value)
    }
    return <InputNumber {...args} value={value} onChange={onChange} max={10} min={0} />
}