import { Route, BrowserRouter, Routes } from 'react-router-dom'
import 'antd/dist/antd.min.css'
import {
    Login,
    Users,
    Doctor,
    DoctorFile,
    DoctorPatients,
    Organization,
    Employees,
    Patients,
    Services,
    Form,
    QuestionsForm,
    ResultsForm,
    Screening,
    QuestionsScreen,
    ResultsScreen,
} from './pages'
import ROUTES from './routes'
import Layout from './layout'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.LOGIN} element={<Layout />}>
                    <Route index element={<Login />} />
                    <Route element={<Users />} path={ROUTES.USERS} />
                    <Route element={<Doctor />} path={ROUTES.DOCTOR} />
                    <Route element={<DoctorFile />} path={ROUTES.DOCTOR_FILE} />
                    <Route element={<DoctorPatients />} path={ROUTES.DOCTOR_PATIENTS} />
                    <Route element={<Organization />} path={ROUTES.ORGANIZATION} />
                    <Route element={<Employees />} path={ROUTES.EMPLOYEES} />
                    <Route element={<Patients />} path={ROUTES.PATIENTS} />
                    <Route element={<Services />} path={ROUTES.SERVICES} />
                    <Route element={<Form />} path={ROUTES.FORM} />
                    <Route element={<QuestionsForm />} path={ROUTES.QUESTIONS_FORM} />
                    <Route element={<ResultsForm />} path={ROUTES.RESULTS_FORM} />
                    <Route element={<Screening />} path={ROUTES.SCREENINGS} />
                    <Route element={<QuestionsScreen />} path={ROUTES.QUESTIONS_SCREENING} />
                    <Route element={<ResultsScreen />} path={ROUTES.RESULTS_SCREENING} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
