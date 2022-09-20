import ROUTES from '../../routes'
import { BsPeople } from 'react-icons/bs'
import { GiPlagueDoctorProfile } from 'react-icons/gi'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { VscOrganization } from 'react-icons/vsc'
import { AiOutlineForm, AiOutlineFundProjectionScreen } from 'react-icons/ai'
// import breadCrumbs from 'use-react-router-breadcrumbs';

const ADMIN = (navigate) => {
    return [
        {
            label: 'Доктора',
            key: 'submenu-1',
            icon: <GiPlagueDoctorProfile />,
            // breadCrumbs: 'Доктора',
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
            icon: <VscOrganization />,
            children: [
                {
                    label: 'Организация',
                    key: 'submenu-item-3-1',
                    onClick: () => navigate(ROUTES.ORGANIZATION),
                },
                {
                    label: 'Работник организации',
                    key: 'submenu-item-3-2',
                    onClick: () => navigate(ROUTES.EMPLOYEES),
                },
                {
                    label: 'Пациент организации',
                    key: 'submenu-item-3-3',
                    onClick: () => navigate(ROUTES.PATIENTS),
                },
                {
                    label: 'Услуги',
                    key: 'submenu-item-3-4',
                    onClick: () => navigate(ROUTES.SERVICES),
                },
                {
                    label: 'Анкеты',
                    key: 'submenu-item-3-5',
                    icon: <AiOutlineForm />,
                    children: [
                        {
                            label: 'Анкета',
                            key: 'submenu-item-3-5-1',
                            onClick: () => navigate(ROUTES.FORM),
                        },
                        {
                            label: 'Вопрос анкеты',
                            key: 'submenu-item-3-5-2',
                            onClick: () => navigate(ROUTES.QUESTIONS_FORM),
                        },
                        {
                            label: 'Результат анкеты',
                            key: 'submenu-item-3-5-3',
                            onClick: () => navigate(ROUTES.RESULTS_FORM),
                        },
                    ],
                },
                {
                    label: 'Скриннинги',
                    key: 'submenu-item-3-6',
                    icon: <AiOutlineFundProjectionScreen />,
                    children: [
                        {
                            label: 'Скриннинг',
                            key: 'submenu-item-3-6-1',
                            onClick: () => navigate(ROUTES.SCREENINGS),
                        },
                        {
                            label: 'Вопрос скриннинга',
                            key: 'submenu-item-3-6-2',
                            onClick: () => navigate(ROUTES.QUESTIONS_SCREENING),
                        },
                        {
                            label: 'Результат скриннинга',
                            key: 'submenu-item-3-6-3',
                            onClick: () => navigate(ROUTES.RESULTS_SCREENING),
                        },
                    ],
                },
            ],
        },
    ]
}

export default ADMIN
