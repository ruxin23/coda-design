import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './icon';
import { library } from '@fortawesome/fontawesome-svg-core'
import { far, faBell } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import './iconStory.scss'
library.add(far, fas)

const meta = {
    title: '组件/通用/Icon 按钮',
    component: Icon,
    tags: ['autodocs'],

} satisfies Meta<typeof Icon>
export default meta
type Story = StoryObj<typeof Icon>

export const DefaultIcon: Story = {
    render: (args) => (
        <>
            <div>默认图标</div>
            <ul className="icons-list">
                <li>
                    <span className="icon icon-step-backward">
                        <Icon icon={faBell} theme={args.theme} />
                    </span>
                    <span className="icon-class">bell</span>
                </li>
                <li>
                    <span className="icon icon-step-backward">
                        <Icon icon="times" theme={args.theme} />
                    </span>
                    <span className="icon-class">times</span>
                </li>
                <li>
                    <span className="icon icon-step-backward">
                        <Icon icon="exclamation-circle" theme={args.theme} />
                    </span>
                    <span className="icon-class">exclamation-circle</span>
                </li>
                <li>
                    <span className="icon icon-step-backward">
                        <Icon icon="anchor" theme={args.theme} />
                    </span>
                    <span className="icon-class">anchor</span>
                </li>
            </ul>
        </>
    )
}

export const SizeIcon: Story = {
    render: (args) => (
        <div>
            <Icon icon="check" style={{ marginLeft: '20px' }} />

            <Icon icon="times" size="2x" style={{ marginLeft: '20px' }} />

            <Icon icon="exclamation-circle" size="3x" style={{ marginLeft: '20px' }} />

            <Icon icon="anchor" size="4x" style={{ marginLeft: '20px' }} />
        </div>
    )
}

export const CustomIcon: Story = {
    render: (args) => (
        <>
            <Icon
                icon="spinner"
                size="2x"
                theme="primary"
                spin
                style={{ marginRight: '20px' }}
            />
            <Icon icon="spinner" size="3x" theme="success" pulse />
        </>
    )
}

export const AllIcon: Story = {
    render: (args) => (
        <>
            <ul className="icons-list">
                {Object.entries(far).map(([key, value]) => (
                    <li key={key}>
                        <span className="icon icon-step-backward">
                            <Icon icon={value} theme="primary" />
                        </span>
                        <span className="icon-class">{key.slice(2)}</span>
                    </li>
                ))}
            </ul>
            <ul className="icons-list">
                {Object.entries(fas).map(([key, value]) => (
                    <li key={key}>
                        <span className="icon icon-step-backward">
                            <Icon icon={value} theme="primary" />
                        </span>
                        <span className="icon-class">{key.slice(2)}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}