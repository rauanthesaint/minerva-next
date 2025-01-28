import clsx from 'clsx'
import s from './Header.module.scss'
import Logo from '@/public/static/img/svg/logo.svg'
import Image from 'next/image'

export default function Component() {
    return (
        <header className={s.component}>
            <div className={clsx('container', s.container)}>
                <Image alt="Minerva Logo" src={Logo} />
            </div>
        </header>
    )
}
