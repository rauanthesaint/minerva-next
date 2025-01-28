'use client'
import { axiosInstance } from '@/utils/requests'
import s from './page.module.scss'
import { ReactNode, useEffect, useState } from 'react'
import { Button } from '@/ui'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { MoonIcon, KeyIcon, UserIcon } from '@heroicons/react/16/solid'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

type User = {
    email: string
}

type Item = {
    title: string
    icon: ReactNode
    color: string
    link: string
}

const data: Item[] = [
    {
        title: 'Account',
        icon: <UserIcon />,
        color: '#ef4444',
        link: '/settings/account',
    },
    {
        title: 'Privacy & Security',
        icon: <KeyIcon />,
        color: '#6366f1',
        link: '/settings/privacy-&-security',
    },
    {
        title: 'Appearance',
        icon: <MoonIcon />,
        color: '#14b8a6',
        link: '',
    },
]

export default function Page() {
    const router = useRouter()
    const [user, setUser] = useState<User | null>(null)
    useEffect(() => {
        const getUser = async () => {
            try {
                const result = await axiosInstance.get(`/user`)
                setUser(result.data.data)
            } catch (err) {
                console.error('Error fetching user data:', err)
            }
        }
        getUser()
    }, [])

    const handleEjectButton = async () => {
        try {
            const result = await axiosInstance.post('/user/eject')
            console.log(result.data.message)
            if (result.status === 200) {
                router.push('/auth/sign-in')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <main className={clsx('container', s.container)}>
            <div className={s.profileCard}>
                <span>Jane Doe</span>
                <span className="label sm muted">
                    {user?.email || 'Anonymous'}
                </span>
            </div>

            <section>
                <span className={clsx('label xs muted uppercase', s.title)}>
                    General
                </span>
                <ul className={s.list}>
                    {data.map((elem, index) => {
                        return (
                            <li key={index}>
                                <Link href={elem.link} className={s.item}>
                                    <div
                                        style={{ backgroundColor: elem.color }}
                                        className={s.icon}
                                    >
                                        {elem.icon}
                                    </div>
                                    <div className={s.content}>
                                        <span>{elem.title}</span>
                                        <ChevronRightIcon />
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </section>

            <Button
                isDestroying
                variant="tertiary"
                onClick={handleEjectButton}
                isFullWidth
            >
                <span>Log Out</span>
            </Button>
        </main>
    )
}
