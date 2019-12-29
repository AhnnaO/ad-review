import ClientLogin from './components/ClientLogin'
import ClientCampaigns from './components/ClientCampaigns'
import AdTypes from './components/AdTypes'


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
              // UserProfile will be rendered inside User's <router-view>
              // when /user/:id/profile is matched
              path: '/ClientCampaigns/:company/AdTypes',
              name: 'AdTypes',
            //   props: true,
              component: AdTypes
            }],
            // {
            //   // UserPosts will be rendered inside User's <router-view>
            //   // when /user/:id/posts is matched
            //   path: 'posts',
            //   component: UserPosts
            // }
        name: 'ClientCampaigns',
        props: true,
        component: ClientCampaigns
    }
]
