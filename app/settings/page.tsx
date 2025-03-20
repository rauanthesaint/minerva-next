'use client'

import styles from './page.module.scss'
import Image from 'next/image'
import ProfileImage from '@/public/static/img/png/default-pfp.png'
import {
    GeneralSettingsMenuItemsArray,
    OtherSettingsMenuItemArray,
} from '@/data/settings-menu'
import { MenuItem } from './components'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Page() {
    type User = {
        email: string
    }

    const defaultUser: User = { email: 'anonymous' }

    const [user, setUser] = useState<User>(defaultUser)
    useEffect(() => {
        const request = async () => {
            try {
                const result = await axios.get(
                    'http://localhost:3001/api/user',
                    { withCredentials: true }
                )
                if (result.status === 200) {
                    setUser(result.data.data)
                }
                console.log(result.status)
            } catch (error) {
                console.log(error)
            }
        }
        request()
    }, [])
    return (
        <main className="container-min">
            {/**
             * User's profile card,
             * navigates to profile editing options
             */}
            <section className={styles.profile_card}>
                {/* Profile Picture */}
                <div className={styles.profile_card_picture}>
                    <Image
                        src={ProfileImage}
                        alt={"Jane Doe's profile picture"}
                    />
                </div>
                {/* Profile Details */}
                <div className={styles.profile_card_details}>
                    <span className="label lg">Jane Doe</span>
                    <span className="label sm muted">{user.email}</span>
                </div>
            </section>
            {/**
             * User's settings to manage the account
             */}
            <section className={styles.content}>
                {/**
                 * General settings block. Contains main options such as
                 * updating account info or privacy settings */}
                <div className={styles.block}>
                    <span className="label xs muted uppercase">General</span>
                    <ul className={styles.options_list}>
                        {GeneralSettingsMenuItemsArray.map((elem, index) => {
                            return (
                                <li key={index}>
                                    <MenuItem
                                        icon={elem.icon}
                                        title={elem.title}
                                        disabled={elem.link === ''}
                                        link={elem.link}
                                        value={elem.value}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </div>
                {/**
                 * Other settings block. Contains additional options such as
                 * FAQ, bug report, asking question */}
                <div className={styles.block}>
                    <span className="label xs muted uppercase">Other</span>
                    <ul className={styles.options_list}>
                        {OtherSettingsMenuItemArray.map((elem, index) => {
                            return (
                                <li key={index}>
                                    <MenuItem
                                        icon={elem.icon}
                                        title={elem.title}
                                        disabled={elem.link === ''}
                                        link={elem.link}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <p className="label muted xs centered">
                    Example of application using Minerva Auth
                </p>
            </section>
        </main>
    )
}
