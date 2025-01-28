import { FC } from 'react'
import s from './Button.module.scss'
import { ButtonProps } from './Button.types'
import clsx from 'clsx'

const Button: FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    ...props
}) => {
    return (
        <button
            id={props.id}
            type={props.type}
            title={props.title}
            className={clsx(
                s.button,
                s[variant],
                s[size],
                props.isDestroying && s.destroying,
                props.isFullWidth && s.fullWidth,
                props.className
            )}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button
