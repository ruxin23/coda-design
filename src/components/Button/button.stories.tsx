import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
    title: '组件/通用/Button 按钮',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    tags: ['autodocs']
} satisfies Meta<typeof Button>
export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        btnType: 'primary',
        children: 'Primary Button'
    }
}

export const DashButton: Story = {
    args: {
        btnType: 'dash',
        children: 'Dash Button',
    }
}

export const LinkButton: Story = {
    args: {
        btnType: 'link',
        children: 'Link Button',
        href: 'https://www.google.com',
    }
}

export const DangerButton: Story = {
    args: {
        btnType: 'danger',
        children: 'Danger Button',
    }
}

export const LargeButton: Story = {
    args: {
        size: 'lg',
        children: 'Large Button',
    },
};

export const SmallButton: Story = {
    args: {
        size: 'sm',
        children: 'Small Button',
    },
};