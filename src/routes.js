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
        meta: {breadcrumb: 'ClientHome'},
        
        name: 'ClientHome',
        props: true,
        component: ClientHome,
    
    }
]
