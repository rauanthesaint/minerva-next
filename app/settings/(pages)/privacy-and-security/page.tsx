import { KeyIcon } from '@heroicons/react/16/solid'
import { MenuItem } from '../../components'
import styles from './page.module.scss'

export default function Page() {
    return (
        <main className="container-min">
            <section className={styles.content}>
                <div className={styles.block}>
                    <span className="label xs muted uppercase">Privacy</span>
                    <ul className={styles.options_list}>
                        <li>
                            <MenuItem
                                link=""
                                icon={<KeyIcon />}
                                title="Two-Step Verification"
                            />
                        </li>
                    </ul>
                </div>

                <div className={styles.block}>
                    <span className="label xs muted uppercase">
                        Automatically delete my account
                    </span>
                    <div className={styles.options_list}>If away for</div>
                    <p className="label xs muted">
                        If you do not come online at least once within this
                        period, your account will be deleted along with all data
                    </p>
                </div>
            </section>
        </main>
    )
}
