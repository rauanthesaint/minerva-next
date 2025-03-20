'use client'

import { usePathname } from 'next/navigation'
import s from './styles.module.scss'
import Link from 'next/link'
import clsx from 'clsx'
export default function Navigation() {
    const pathName = usePathname().split('/')[2]

    return (
        <div className={s.component}>
            {/* <div className={s.curtain} /> */}
            <Link
                className={clsx(s.item, pathName === 'sign-in' && s.active)}
                href={'/auth/sign-in'}
            >
                <span className="label sm">Sign In</span>
            </Link>
            <Link
                className={clsx(s.item, pathName === 'sign-up' && s.active)}
                href={'/auth/sign-up'}
            >
                <span className="label sm">Sign Up</span>
            </Link>
        </div>
    )
}
