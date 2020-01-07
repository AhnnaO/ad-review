import ClientLogin from './components/ClientLogin'
import ClientHome from './components/ClientHome'
// import Campaigns from './components/Lists/Campaigns'
import AdTypes from './components/Lists/AdTypes'
import AdVersions from './components/Lists/AdVersions'
import VersionChoice from './components/Lists/VersionChoice'
import RenderAd from './components/Lists/RenderAd'

export default [
    {
        path: '/',
        name: 'ClientLogin',
        component: ClientLogin
    },
    {
        path: '/ClientHome/:company',
        meta: {breadcrumb: 'ClientHome'},
        children: [
          {
            path: '/ClientHome/:company/:adType',
            meta: {breadcrumb: 'AdTypes'},
            children: [
              
                  {
                    path: '/ClientHome/:company/:adType/:adVersion',
                    meta: {breadcrumb: 'AdVersions'},
                    children: [
                      {
                        path: '/ClientHome/:company/:adType/:adVersion/:versionChoice',
                        meta: {breadcrumb: 'VersionChoice'},
                       
                        name: 'VersionChoice',
                        props: true,
                        component: VersionChoice
                      }
                    ],
                    name: 'AdVersions',
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
        component: ClientHome,
    
    },
    {
      path: '/ClientHome/:company/:adType/:adVersion/:versionChoice/:renderAd',
      meta: {breadcrumb: 'RenderAd'},
      name: 'RenderAd',
      props: true,
      component: RenderAd
    }
    
]
