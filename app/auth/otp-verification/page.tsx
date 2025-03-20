'use client'

import { Button, Input } from '@/ui'
import axios from 'axios'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function Page() {
    const router = useRouter()
    const params = useSearchParams()
    const email = params.get('e')

    type Values = {
        otp: string
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Values>({
        mode: 'onSubmit',
    })

    const onSubmit = async (data: Values) => {
        try {
            const payload = { ...data, email }
            const result = await axios.post(
                'http://localhost:3001/api/otp-verification',
                payload,
                {
                    withCredentials: true,
                }
            )
            if (result.status === 200) {
                router.push('/settings')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <main className="container-min">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    register={register('otp', {
                        required: 'OTP is required',
                        minLength: {
                            value: 6,
                            message: 'Min length is 6',
                        },
                    })}
                    error={errors.otp}
                    placeholder="XXXXXX"
                    label="One-Time Password"
                />
                <Button type="submit">Submit</Button>
            </form>
        </main>
    )
}
