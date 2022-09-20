import { Route, BrowserRouter, Routes } from 'react-router-dom'
import 'antd/dist/antd.min.css'
import { Login, Users, Doctor, DoctorFile, DoctorPatients } from './pages'
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
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
