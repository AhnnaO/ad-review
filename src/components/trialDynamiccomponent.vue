<template>
    <div class="campaigns-page">
<!-- Entire file is unused as never attained functioning dynamic component -->
        <app-header 
        :company="company"/>
        <div class="sidebar">
            <component v-bind:is="component"></component>
            <ul id="adTypes">
            <li v-for="campaign in campaigns" :key="campaign" @click.capture="chooseCampaign(campaign)"> 
                {{ campaign }}            
            </li>
        </ul>
            <!-- <router-view /> -->
        </div>
        
    </div>
</template>
<script>

import AdTypes from './Lists/AdTypes'
import AdVersions from './Lists/AdVersions'
import VersionChoice from './Lists/VersionChoice'
import Campaigns from './Lists/Campaigns'

export default {
    props: [ 'company',
        'campaign',
        'adType',
        'adVersion'],
    data() {
        return {
            // component: 'Campaigns',
            campaigns: {},
            // ad: {},
            Company: this.$props.company,
           
        }
    },
    components: {
        AdTypes,
        AdVersions,
        VersionChoice,
        Campaigns
    },
     mounted() {
        this.getCampaigns()
    },
    methods: {
        getCampaigns() {
            this.axios.get(`http://localhost/AdReviewBack/clients/${this.Company}/scandir.php`)
            .then(response => {
                this.campaigns = response.data
                console.log(this.campaigns)
                }
            )           
        },
        chooseCampaign(campaignName) {
            console.log(campaignName)
            this.axios.get(`http://localhost/AdReviewBack/clients/${this.Company}/${campaignName}/scandir.php`)
            .then(response => {
                // this.$router.push({path: `/ClientHome/${this.Company}/${campaignName}`})

                campaignName = response.data
                console.log(campaignName)
            })
        }
    },
    computed: {
        component() {
            if(this.chooseCampaign(this.campaign) == 'campaignName') {
                return 'AdTypes'
            } else if(this.$props == 'ads') {
                return 'AdTypes'
            } else if(this.$props == 'versions') {
                return 'AdVersions'
            } else {
                return 'VersionChoice'
            }
        }
    }
    
}
</script>
<style lang="scss" scoped>
$isobarOrange: #F74902;
$buttonColor: #939A9F;
$whiteBase: #FFFFFF;
$sidbar: #3E3C3B;
$whiteBase: #FFFFFF;
    li {
        list-style: none;
        font-size: 1.5em;
        color: $whiteBase;
        padding: 1%;
        margin-left: 0px;
    }

    .sidebar {
        height: 100%;
        width: 250px;
        position: fixed;
        z-index: 1;
        background-color: $sidbar;
        overflow-x: hidden;
        padding-top: 20px;
    }

    .btn-secondary {
        background-color: $buttonColor;
        border-color: $whiteBase;
        margin-left: 25px;
    }

    
    
</style>
