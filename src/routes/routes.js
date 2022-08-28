import Home from '~/pages/Home/Home'
import MovieDetails from '~/pages/MovieDetails/MovieDetails'

import config from '~/config'

export const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.detail,
        component: MovieDetails,
    },
    {
        path: config.routes.pricing,
        component: Home,
    },
    {
        path: config.routes.help,
        component: Home,
    },
    {
        path: config.routes.login,
        component: Home,
    },
]
export const privateRoutes = []
