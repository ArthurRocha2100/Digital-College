import { RouteObject } from 'react-router-dom'
import { AboutPage, HomePage } from './index'

export const ROUTER = {
    home: '/',
    about:'/about/',
    contact:'/contact/',
}

export default [
    {
        path: ROUTER.home,
        element: <HomePage />
    },
    {
        path: ROUTER.about,
        element: <AboutPage />
    },
] as RouteObject[]