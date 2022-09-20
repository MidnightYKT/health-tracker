import ROUTES from '../../routes'

import { BsPeople } from 'react-icons/bs'
import { HiOutlineDocumentText } from 'react-icons/hi'

const ADMIN = (navigate) => {
    return [
        {
            label: 'Доктора',
            key: 'submenu-1',
            icon: <BsPeople />,
            children: [
                {
                    label: 'Доктор',
                    key: 'submenu-item-1-1',
                    onClick: () => navigate(ROUTES.DOCTOR),
                },
                {
                    label: 'Файлы доктора',
                    key: 'submenu-item-1-2',
                    onClick: () => navigate(ROUTES.DOCTOR_FILE),
                },
                {
                    label: 'Специализация',
                    key: 'submenu-item-1-3',
                    onClick: () => navigate(ROUTES.DOCTOR_PATIENTS),
                },
            ],
        },
        {
            label: 'Пользователи',
            key: 'submenu-2',
            icon: <BsPeople />,
            onClick: () => navigate(ROUTES.USERS),
        },
        {
            label: 'Организации',
            key: 'submenu-3',
            icon: <HiOutlineDocumentText />,
            // onClick: () => navigate(ROUTES.UNACCEPTED_COURIERS),
            children: [
                {
                    label: 'Организация',
                    key: 'submenu-item-3-1',
                    // onClick: () => navigate(ROUTES.ORG),
                },
                {
                    label: 'Работник организации',
                    key: 'submenu-item-3-2',
                    // onClick: () => navigate(ROUTES.COURIER),
                },
                {
                    label: 'Пациент организации',
                    key: 'submenu-item-3-3',
                    // onClick: () => navigate(ROUTES.COURIER),
                },
                {
                    label: 'Услуги',
                    key: 'submenu-item-3-4',
                    // onClick: () => navigate(ROUTES.COURIER),
                },
                {
                    label: 'Анкеты',
                    key: 'submenu-item-3-5',
                    // onClick: () => navigate(ROUTES.COURIER),
                    children: [
                        {
                            label: 'Анкета',
                            key: 'submenu-item-3-5-1',
                            // onClick: () => navigate(ROUTES.ORG),
                        },
                        {
                            label: 'Вопрос анкеты',
                            key: 'submenu-item-3-5-2',
                            // onClick: () => navigate(ROUTES.COURIER),
                        },
                        {
                            label: 'Результат анкеты',
                            key: 'submenu-item-3-5-3',
                            // onClick: () => navigate(ROUTES.COURIER),
                        },
                    ],
                },
                {
                    label: 'Скриннинги',
                    key: 'submenu-item-3-6',
                    // onClick: () => navigate(ROUTES.COURIER),
                    children: [
                        {
                            label: 'Скриннинг',
                            key: 'submenu-item-3-6-1',
                            // onClick: () => navigate(ROUTES.ORG),
                        },
                        {
                            label: 'Вопрос скриннинга',
                            key: 'submenu-item-3-6-2',
                            // onClick: () => navigate(ROUTES.COURIER),
                        },
                        {
                            label: 'Результат скриннинга',
                            key: 'submenu-item-3-6-3',
                            // onClick: () => navigate(ROUTES.COURIER),
                        },
                    ],
                },
            ],
        },
    ]
}

export default ADMIN
