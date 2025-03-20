'use client'

import { Button } from '@/ui'
import styles from './page.module.scss'
import axios from 'axios'

export default function Page() {
    const handleLogOut = async () => {
        try {
            const { status } = await axios.post(
                'http://localhost:3001/api/user/eject',
                {},
                { withCredentials: true }
            )
            if (status === 200) {
                window.location.assign('/auth/sign-in')
            }
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <main className="container-min">
            <section className={styles.content}>
                <div className={styles.block}>
                    <div className={styles.inputContainer}>
                        <input
                            title="First Name"
                            type="text"
                            defaultValue={'Jane'}
                            className={styles.input}
                            placeholder="First Name"
                        />
                        <input
                            title="Last Name"
                            type="text"
                            defaultValue={'Doe'}
                            className={styles.input}
                            placeholder="Last Name"
                        />
                    </div>
                    <p className="label xs muted">
                        Enter your name and optional your last name
                    </p>
                </div>

                <Button size="sm">Done</Button>
                <Button onClick={handleLogOut} size="sm" isDestroying>
                    Log Out
                </Button>
            </section>
        </main>
    )
}
