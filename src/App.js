import { Routes, Route } from 'react-router-dom'

import { privateRoutes, publicRoutes } from './routes'
import MainLayout from './layouts/MainLayout'
import { Fragment } from 'react'
function App() {
    const routes = [...publicRoutes, ...privateRoutes]

    return (
        <Routes>
            {routes.map((route, index) => {
                let Layout = MainLayout
                if (route.layout === null) {
                    Layout = Fragment
                }
                const Page = route.component
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                )
            })}
            {/* {privateRoutes.map((route, index) => {
                let Layout = MainLayout
                if (route.layout === null) {
                    Layout = Fragment
                }
                const Page = route.component
                return (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    />
                )
            })} */}
        </Routes>
    )
}

export default App
