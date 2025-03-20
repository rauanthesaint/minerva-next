import Link from 'next/link'

import styles from './MenuItem.module.scss'
import clsx from 'clsx'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

interface MenuItemProps {
    title: string
    icon?: React.ReactNode
    disabled?: boolean
    link: string
    value?: string
}

const MenuItem: React.FC<MenuItemProps> = ({
    title,
    icon,
    disabled,
    link,
    value,
}) => {
    // const Component: ElementType = link === undefined ? 'button' : Link

    return (
        <Link
            className={clsx(styles.menuItem, disabled && styles.disabled)}
            href={link}
        >
            {icon && <div className={styles.icon}>{icon}</div>}
            <div className={styles.details}>
                <span>{title}</span>
                <div className={styles.value}>
                    {value && <span className="label sm muted">{value}</span>}
                    <ChevronRightIcon />
                </div>
            </div>
        </Link>
    )
}

export default MenuItem
