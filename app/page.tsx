import s from './page.module.scss'

import Link from 'next/link'

export default function Page() {
    return (
        <main>
            <div className={s.block}>
                <Link href={'/auth/sign-in'}>Sign In</Link>
                <Link href={'/auth/sign-up'}>Sign Up</Link>
                <Link href={'/profile'}>Profile</Link>
            </div>
        </main>
    )
}
