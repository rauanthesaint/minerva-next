import { InputHTMLAttributes, ReactNode } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    type?: 'text' | 'password' | 'number'
    leading?: ReactNode

    register?: UseFormRegisterReturn
    error?: FieldError
}
