import ClientLogin from './components/ClientLogin'
import ClientHome from './components/ClientHome'


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
    }
]
