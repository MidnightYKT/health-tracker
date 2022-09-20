import ROUTES from '../routes'

export const pathname = (params) => {
    switch (params.pathname) {
        case ROUTES.DOCTOR:
            return 'Доктор'
        case ROUTES.DOCTOR_FILE:
            return 'Файлы доктора'
        case ROUTES.DOCTOR_PATIENTS:
            return 'Специализация'
        case ROUTES.USERS:
            return 'Пользователи'
        default:
            return ''
    }
}
