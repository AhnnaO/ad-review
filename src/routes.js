import ClientLogin from './components/ClientLogin'
import ClientCampaigns from './components/ClientCampaigns'
import Campaigns from './components/Lists/Campaigns'
import AdTypes from './components/Lists/AdTypes'

export default [
    {
        path: '/',
        name: 'ClientLogin',
        component: ClientLogin
    },
    {
        path: '/ClientCampaigns/:company',
        children: [
          {
            path: '/ClientCampaigns/:company/:campaign',
            name: 'Campaigns',
            props: true,
            component: Campaigns
        },
        {
          path: '/ClientCampaigns/:company/:adType',
          name: 'AdTypes',
          props: true,
          component: AdTypes
        }
      ],
        name: 'ClientCampaigns',
        props: true,
        component: ClientCampaigns

      }
]
