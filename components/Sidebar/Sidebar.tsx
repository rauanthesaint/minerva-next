'use client'

import clsx from 'clsx'
// import { useState } from 'react'

import styles from './Sidebar.module.scss'

export default function Sidebar() {
    // const [expanded, setExpanded] = useState<boolean>(false)
    // const handle = () => {
    //     setExpanded(!expanded)
    // }
    return (
        <aside className={styles.sidebar}>
            <header
                // onClick={handle}
                className={clsx('container', styles.header)}
            >
                <span>Menu</span>
            </header>

            <section className={clsx(styles.content)}>Hello</section>
        </aside>
    )
}
