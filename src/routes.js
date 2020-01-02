import ClientLogin from './components/ClientLogin'
import ClientHome from './components/ClientHome'
// import Campaigns from './components/Lists/Campaigns'
import AdTypes from './components/Lists/AdTypes'
import AdVersions from './components/Lists/AdVersions'
import Sizes from './components/Lists/Sizes'

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
                        path: '/ClientHome/:company/:adType/:adVersion/:size',
                        meta: {breadcrumb: 'Sizes'},
                        name: 'Sizes',
                        props: true,
                        component: Sizes
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
        component: ClientHome
    
    }
    
]
