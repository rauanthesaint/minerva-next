'use client'

import clsx from 'clsx'
import s from './Header.module.scss'
import { Button } from '@/ui'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { usePathname, useRouter } from 'next/navigation'

export default function Component() {
    const router = useRouter()
    const pathName = usePathname().split('/')[2].replaceAll('-', ' ')

    const handleButton = () => {
        router.back()
    }
    return (
        <header className={s.component}>
            <div className={clsx('container', s.container)}>
                <Button onClick={handleButton} variant="tertiary" size="sm">
                    <ChevronLeftIcon />
                    <span>Back</span>
                </Button>

                <span className={clsx('label sm capitalized', s.title)}>
                    {pathName}
                </span>
            </div>
        </header>
    )
}
