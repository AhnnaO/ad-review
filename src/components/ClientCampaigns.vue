<template>
    <div class="campaigns-page">
        <app-header 
        :company="company"/>
        <div class="sidebar">
            
            <ul>
                
                <li v-for="campaign in campaigns" :key="campaign" @click="chooseCampaign"> 
                    {{ campaign }}
                </li>
                <router-view :ads="ads"/>
            </ul>
            
        </div>
        
    </div>
</template>
<script>
// import { store } from './store/store'

export default {
    props: [ 'company',
            'ads'],
    data() {
        return {
            campaign: '',
            campaigns: {},
            ad: {}
        }
    },
    mounted() {
        this.getCampaigns()
    },
    methods: {
        getCampaigns() {
            this.axios.get('http://localhost/AdReviewBack/clients/clientABC/scandir.php')
            .then(response => {
                this.campaigns = response.data
                console.log(this.campaigns)
                }
            )           
        },
        chooseCampaign() {
            this.axios.get('http://localhost/AdReviewBack/clients/clientABC/191127_ad_review/scandir.php')
            .then(response => {
                this.ad = response.data
                this.$router.push({path: `/ClientCampaigns/${this.company}/AdTypes`})
            })
        }
    }
}
</script>
<style lang="scss" scoped>
$isobarOrange: #F74902;
$buttonColor: #939A9F;
$whiteBase: #FFFFFF;
$sidbar: #3E3C3B;

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

    li {
        list-style: none;
        font-size: 1.5em;
        color: $whiteBase;
        padding: 1%;
        margin-left: 0px;
    }
    
</style>
