import Home from '~/pages/Home/Home'
import MovieDetails from '~/pages/MovieDetails/MovieDetails'
import Login from '~/pages/Account/Login/Login'
import Register from '~/pages/Account/Register/Register'

import config from '~/config'
import Forgot from '~/pages/Account/Forgot/Forgot'
import Profile from '~/pages/Profile/Profile'
import Search from '~/pages/Search/Search'

export const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: `${config.routes.detail}/:id`,
        component: MovieDetails,
    },
    {
        path: config.routes.event,
        component: Home,
    },
    {
        path: config.routes.help,
        component: Home,
    },
    {
        path: config.routes.login,
        component: Login,
        layout: null,
    },
    {
        path: config.routes.register,
        component: Register,
        layout: null,
    },
    {
        path: config.routes.forgot,
        component: Forgot,
        layout: null,
    },
    {
        path: config.routes.search,
        component: Search,
    },
]
export const privateRoutes = [
    {
        path: config.routes.profile,
        component: Profile,
    },
]
