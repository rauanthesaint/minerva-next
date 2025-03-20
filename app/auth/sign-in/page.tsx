'use client'
import s from '../layout.module.scss'
import { Button, Input } from '@/ui'
import {
    ChevronRightIcon,
    EnvelopeIcon,
    LockClosedIcon,
} from '@heroicons/react/24/outline'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function Page() {
    const router = useRouter()
    type Values = { email: string; password: string }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Values>({
        mode: 'onSubmit',
    })

    const onSubmit = async (data: Values) => {
        try {
            const result = await axios.post(
                'http://localhost:3001/api/user/auth',
                data,
                {
                    withCredentials: true,
                }
            )
            if (result.status === 200) {
                console.log(result.data.message)
            }
            router.push(`/auth/otp-verification?e=${data.email}`)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <main className="container-min">
            <h1 className={'heading md'}>Log In to your Minerva Account</h1>

            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.block}>
                    <Input
                        leading={<EnvelopeIcon />}
                        placeholder="example@mail.com"
                        label="Email"
                        name="email"
                        id="email"
                        register={register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Invalid e-mail address',
                            },
                        })}
                        error={errors.email}
                    />
                    <Input
                        leading={<LockClosedIcon />}
                        label="Password"
                        type="password"
                        name="password"
                        id="password"
                        error={errors.password}
                        register={register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message:
                                    'Password must be at least 8 characters',
                            },
                        })}
                    />
                </div>

                <Button isFullWidth type="submit">
                    <span>Next</span>
                    <ChevronRightIcon />
                </Button>
            </form>
        </main>
    )
}
