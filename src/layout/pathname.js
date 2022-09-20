import ROUTES from '../routes'

export const pathname = (params) => {
    switch (params.pathname) {
        case ROUTES.ORG:
            return 'Cтатистика организаций'
        case ROUTES.COURIER:
            return 'Cтатистика курьеров'
        case ROUTES.UNACCEPTED_COURIERS:
            return 'Непринятые курьеры'
        case ROUTES.WORKING_COURIERS:
            return 'Рабочие курьеры'
        case ROUTES.CITY_ORDER:
            return 'Заказы города'
        case ROUTES.CITY_ORG:
            return 'Организации города'
        default:
            return ''
    }
}
