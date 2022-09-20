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
        case ROUTES.ORGANIZATION:
            return 'Организации'
        case ROUTES.EMPLOYEES:
            return 'Работник организации'
        case ROUTES.PATIENTS:
            return 'Пациент организации'
        case ROUTES.SERVICES:
            return 'Услуги'
        case ROUTES.FORM:
            return 'Анкета'
        case ROUTES.QUESTIONS_FORM:
            return 'Вопрос анкеты'
        case ROUTES.RESULTS_FORM:
            return 'Результат анкеты'
        case ROUTES.SCREENINGS:
            return 'Скриннинг'
        case ROUTES.QUESTIONS_SCREENING:
            return 'Вопрос скриннинга'
        case ROUTES.RESULTS_SCREENING:
            return 'Результат скриннинга'
        default:
            return ''
    }
}
