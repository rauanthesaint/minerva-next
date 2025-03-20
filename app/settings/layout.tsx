import { ReactNode } from 'react'
import { Header } from '@/components'

export default function Layout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <div>
            {/* <Header /> */}
            {children}
        </div>
    )
}
