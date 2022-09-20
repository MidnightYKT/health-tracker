import { Route, BrowserRouter, Routes } from 'react-router-dom'
import 'antd/dist/antd.min.css'
import {
    Login,
    StatsOrg,
    StatsCourier,
    UnacceptedCouriers,
    WorkingCouriers,
    CityOrder,
    CityOrg,
} from './pages'
import ROUTES from './routes'
import Layout from './layout'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.LOGIN} element={<Layout />}>
                    <Route index element={<Login />} />
                    {/* <Route element={<StatsOrg />} path={ROUTES.ORG} />
                    <Route element={<StatsCourier />} path={ROUTES.COURIER} />
                    <Route element={<UnacceptedCouriers />} path={ROUTES.UNACCEPTED_COURIERS} />
                    <Route element={<WorkingCouriers />} path={ROUTES.WORKING_COURIERS} />
                    <Route element={<CityOrder />} path={ROUTES.CITY_ORDER} />
                    <Route element={<CityOrg />} path={ROUTES.CITY_ORG} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
