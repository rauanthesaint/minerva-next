'use client'

import clsx from 'clsx'
import s from './page.module.scss'
import { useEffect, useState } from 'react'
import { axiosInstance } from '@/utils/requests'
import { Button } from '@/ui'

export default function Page() {
    const [hasRecoveryKeys, setHasRecoveryKeys] = useState<{
        has_recovery_keys: boolean
    }>({ has_recovery_keys: false })
    const [recoveryKeys, setRecoveryKeys] = useState<{
        hash: string
    } | null>(null)
    const [showRecoveryKeys, setShowRecoveryKeys] = useState<boolean>(false)

    const generateRecoveryKeys = async () => {
        try {
            const result = await axiosInstance.post('/user/recovery-codes')
            if (result.status === 201) {
                setRecoveryKeys(result.data.data) // Store the new recovery keys
                setHasRecoveryKeys({ has_recovery_keys: true }) // Set the flag to true after generation
                setShowRecoveryKeys(true) // Show the newly generated recovery keys
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        const fetchHasRecoveryKeys = async () => {
            try {
                const result = await axiosInstance.get('/user/recovery-codes')
                setHasRecoveryKeys(result.data.data) // Update the state based on the API response
            } catch (error) {
                console.error(error)
            }
        }
        fetchHasRecoveryKeys()
    }, [])

    return (
        <main className={clsx('container', s.container)}>
            <section>
                <span>Recovery Keys</span>
                {!hasRecoveryKeys.has_recovery_keys && ( // Show the button only if no recovery keys exist
                    <Button onClick={generateRecoveryKeys} isFullWidth>
                        <span>Generate Keys</span>
                    </Button>
                )}

                {showRecoveryKeys &&
                    recoveryKeys && ( // Show recovery keys only once after generating
                        <div>{recoveryKeys.hash}</div>
                    )}
            </section>
        </main>
    )
}
