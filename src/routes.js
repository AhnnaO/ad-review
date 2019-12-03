import ClientLogin from './components/ClientLogin'
import ClientCampaigns from './components/ClientCampaigns'

export default [
    {
        path: '/',
        name: 'ClientLogin',
        component: ClientLogin
    },
    {
        path: '/ClientCampaigns',
        name: 'ClientCampaigns',
        component: ClientCampaigns
    }
]
