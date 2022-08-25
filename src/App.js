import { Routes, Route } from 'react-router-dom'

import { publicRoutes } from './routes'
import MainLayout from './layouts/MainLayout'
function App() {
    return (
        <Routes>
            {publicRoutes.map((route, index) => {
                const Layout = route.component
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <MainLayout>
                                <Layout />
                            </MainLayout>
                        }
                    />
                )
            })}
        </Routes>
    )
}

export default App
