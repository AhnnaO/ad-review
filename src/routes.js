import ClientLogin from './components/ClientLogin'
import ClientHome from './components/ClientHome'
import AdminHome from './components/AdminHome'


export default [
    {
        path: '/',
        name: 'ClientLogin',
        component: ClientLogin
    },
    {
        path: '/ClientHome/:company',
        name: 'ClientHome',
        props: true,
        component: ClientHome
    },
    {
        path: '/AdminHome',
        name: 'AdminHome',
        component: AdminHome
    }
]
