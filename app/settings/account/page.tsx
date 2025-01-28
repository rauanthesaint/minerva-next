import { Button } from '@/ui'
import s from './page.module.scss'
import clsx from 'clsx'

export default function Page() {
    return (
        <main className={clsx('container', s.container)}>
            <section>
                <span className="label xs uppercase muted">Danger Zone</span>
                <div className={s.block}>
                    <Button isDestroying isFullWidth variant="secondary">
                        <span>Delete Account</span>
                    </Button>
                </div>
            </section>
        </main>
    )
}
