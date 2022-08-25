import Home from '~/Pages/Home/Home'
import MovieDetails from '~/Pages/MovieDetails/MovieDetails'

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
        component: MovieDetails,
    },
    {
        path: config.routes.help,
        component: MovieDetails,
    },
    {
        path: config.routes.login,
        component: MovieDetails,
    },
]
export const privateRoutes = []
