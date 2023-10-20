import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Icon } from '../Icon/icon'
import './input.scss'
export type InputSize = 'lg' | 'sm' | 'md'

export interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    /**是否禁用 Input */
    disabled?: boolean
    /**设置 input 大小，支持 lg、sm、md */
    size?: InputSize
    /**添加图标，在右侧悬浮添加一个图标，用于提示 */
    icon?: IconProp
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 * 支持 HTMLInput 的所有基本属性
 */

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { type, disabled, size, icon, ...restProps } = props
    const classes = classNames('input-wrapper', {
        [`input-size-${size}`]: size,
        'is-disabled': disabled,
    })
    return (
        <div className={classes}>
            {icon && (
                <div className="icon-wrapper">
                    <Icon icon={icon} title={`title-${icon}`} />
                </div>
            )}
            <input
                ref={ref}
                type={type}
                className="input-inner"
                disabled={disabled}
                {...restProps}
            />

        </div>
    )
})