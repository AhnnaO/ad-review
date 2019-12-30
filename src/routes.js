import ClientLogin from './components/ClientLogin'
import ClientHome from './components/ClientHome'
// import Campaigns from './components/Lists/Campaigns'
import AdTypes from './components/Lists/AdTypes'
import AdVersions from './components/Lists/AdVersions'

export default [
    {
        path: '/',
        name: 'ClientLogin',
        component: ClientLogin
    },
    {
        path: '/ClientHome/:company',
        meta: {breadcrumb: 'ClientCampaigns'},
        children: [
          {
            path: '/ClientHome/:company/:value',
            meta: {breadcrumb: 'AdTypes'},
            children: [
              
                  {
                    path: '/ClientHome/:company/:adType/:adVersion',
                    meta: {breadcrumb: 'adVersions'},
                    name: 'adVersions',
                    props: true,
                    component: AdVersions
                  }
                ],
                
            
            name: 'AdTypes',
            props: true,
            component: AdTypes
          }
        ],
        name: 'ClientHome',
        props: true,
        component: ClientHome
    
    }
    
]
