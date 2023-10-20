import { useRef, ChangeEvent } from 'react'
import cn from 'classnames'
import './inputnumber.scss'
type Status = 'default' | 'error' | 'success' | 'warning'

export interface InputNumberProps {
    placeholder?: string
    /** 自动获取焦点 */
    autoFocus?: boolean
    /** 是否显示增减按钮 */
    controls?: boolean
    /** 禁用 */
    disabled?: boolean
    /** 是否启用键盘快捷行为 */
    keyboard?: boolean
    /** 最大值 */
    max?: number
    /** 最小值 */
    min?: number
    /** 设置校验状态 */
    status?: Status
    /** 输入框大小 */
    size?: 'default' | 'small' | 'large'
    /** 每次改变步数 */
    step?: number
    /** 当前值 */
    value?: string
    /** 变化回调 */
    onChange?: (value: string) => void
    /** 按下回车的回调 */
    onPressEnter?: () => void
}

/**
 * > 通过鼠标或键盘，输入范围内的数值。
 *
 * ### 何时使用
 * 当需要获取标准数值时。
 */

export const InputNumber = ({
    placeholder,
    autoFocus = false,
    controls = true,
    disabled = false,
    keyboard = true,
    max = Infinity,
    min = -Infinity,
    status = 'default',
    size = 'default',
    step = 1,
    value,
    onChange,
    onPressEnter,
}: InputNumberProps) => {
    const classes = cn('codaInputNumberWrap__inputNumber', {
        'codaInputNumberWrap__inputNumber--disabled': disabled,
        'codaInputNumberWrap__inputNumber--success': status === 'success',
        'codaInputNumberWrap__inputNumber--error': status === 'error',
        'codaInputNumberWrap__inputNumber--warning': status === 'warning',
        'codaInputNumberWrap__inputNumber--small': size === 'small',
        'codaInputNumberWrap__inputNumber--large': size === 'large',
    })
    const handleChange = () => {
        const value = input.current?.value as string
        if (Number(value) > max || Number(value) < min) return
        onChange?.(value)
    }
    // 键盘事件
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement> & ChangeEvent<HTMLInputElement>) => {
        switch (e.key) {
            case 'Enter':
                onPressEnter?.()
                break
            case 'ArrowUp':
                if (!keyboard) {
                    e.preventDefault()
                } else {
                    handleChange()
                }
                break
            case 'ArrowDown':
                if (!keyboard) {
                    e.preventDefault()
                } else {
                    handleChange()
                }
                break
            default:
                break
        }
    }
    // 上下箭头事件
    const input = useRef<HTMLInputElement>(null)
    const handleAdd = () => {
        if (disabled) return
        input.current?.stepUp()
        handleChange()
    }
    const handleReduce = () => {
        if (disabled) return
        input.current?.stepDown()
        handleChange()
    }
    return (
        <div className='codaInputNumberWrap'>
            <input
                ref={input}
                type="number"
                className={classes}
                autoFocus={autoFocus}
                onChange={handleChange}
                value={value}
                step={step}
                min={min}
                max={max}
                onKeyDown={handleKeyDown}
                disabled={disabled}
                placeholder={placeholder}
            />
            {/* 上下箭头 */}
            {controls && (
                <div className="codaInputNumberWrap__arrowWrap">
                    <button
                        className="codaInputNumberWrap__arrowWrap__arrow"
                        onClick={handleAdd}
                    >
                        +
                    </button>
                    <button
                        className="codaInputNumberWrap__arrowWrap__arrow"
                        onClick={handleReduce}
                    >
                        -
                    </button>
                </div>
            )}
        </div>
    )
}