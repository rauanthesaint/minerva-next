import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary'
    isDestroying?: boolean
    isFullWidth?: boolean
    size?: 'sm' | 'md' | 'lg'
}
