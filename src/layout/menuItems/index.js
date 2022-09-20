import ROUTES from '../../routes'

import { BsPeople } from 'react-icons/bs'
import { HiOutlineDocumentText } from 'react-icons/hi'

const ADMIN = (navigate) => {
    return [
        {
            label: 'Общая статистика',
            key: 'submenu-1',
            icon: <BsPeople />,
            children: [
                {
                    label: 'Cтатистика организаций',
                    key: 'submenu-item-1-9',
                    // onClick: () => navigate(ROUTES.ORG),
                },
                {
                    label: 'Cтатистика курьеров',
                    key: 'submenu-item-1-10',
                    // onClick: () => navigate(ROUTES.COURIER),
                },
            ],
        },
        {
            label: 'Непринятые курьеры',
            key: 'submenu-2',
            icon: <HiOutlineDocumentText />,
            // onClick: () => navigate(ROUTES.UNACCEPTED_COURIERS),
        },
        {
            label: 'Рабочие курьеры',
            key: 'submenu-3',
            icon: <HiOutlineDocumentText />,
            // onClick: () => navigate(ROUTES.WORKING_COURIERS),
        },
        {
            label: 'Заказы города',
            key: 'submenu-4',
            icon: <HiOutlineDocumentText />,
            // onClick: () => navigate(ROUTES.CITY_ORDER),
        },
        {
            label: 'Органзиации города',
            key: 'submenu-5',
            icon: <HiOutlineDocumentText />,
            // onClick: () => navigate(ROUTES.CITY_ORG),
        },
    ]
}

export default ADMIN
