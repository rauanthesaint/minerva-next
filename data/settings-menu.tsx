import {
    UserIcon,
    LockClosedIcon,
    MoonIcon,
    BellIcon,
    CircleStackIcon,
    LanguageIcon,
    QuestionMarkCircleIcon,
    ChatBubbleOvalLeftEllipsisIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/16/solid'

type Item = {
    title: string
    icon: React.ReactNode
    link: string
    value?: string
}

export const GeneralSettingsMenuItemsArray: Item[] = [
    {
        title: 'Account',
        icon: <UserIcon />,
        link: '/settings/account',
    },
    {
        title: 'Notifications and Sounds',
        icon: <BellIcon />,
        link: '',
    },
    {
        title: 'Privacy and Security',
        icon: <LockClosedIcon />,
        link: '/settings/privacy-and-security',
    },
    {
        title: 'Data and Storage',
        icon: <CircleStackIcon />,
        link: '',
    },
    {
        title: 'Appearance',
        icon: <MoonIcon />,
        link: '',
    },
    {
        title: 'Language',
        icon: <LanguageIcon />,
        link: '',
        value: 'English',
    },
]

export const OtherSettingsMenuItemArray: Item[] = [
    {
        title: 'Ask a Question',
        icon: <ChatBubbleOvalLeftEllipsisIcon />,
        link: '',
    },
    {
        title: 'FAQ',
        icon: <QuestionMarkCircleIcon />,
        link: '',
    },
    {
        title: 'Report a Bug',
        icon: <ExclamationCircleIcon />,
        link: '',
    },
]
