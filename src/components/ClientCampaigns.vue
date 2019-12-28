<template>
    <div class="campaigns-page">
        <app-header />
        <div class="sidebar">
            <!-- <h1>{{ this.state.companyName }} Campaigns</h1> -->
            <ul>
                <!-- <li class="campaignList" 
                v-for="campaign in campaigns" 
                v-bind:key="campaign.data"
                > 
                    {{ campaign }} 
                </li> -->
            </ul>
        </div>
        
    </div>
</template>
<script>
// import { store } from './store/store'

export default {
    // data() {
    //     campaigns: []
    // },
    // mounted:
        // function getCampaigns() {
        //     this.axios.get('http://localhost/AdReviewBack/clients/clientABC/scandir.php')
        //     .then(response => 
        //     (this.campaigns = response.data)
        // )
    // },
    
    // methods: {
    //     getCampaigns() {
    //         this.axios.get('http://localhost/AdReviewBack/clients/clientABC/scandir.php')
    //         .then(response => 
    //             (this.campaigns = response.data)
    //         )
    //     }
    // }
}
</script>
<style scoped>
    .sidebar {
        height: 100%;
        width: 250px;
        position: fixed;
        z-index: 1;
        background-color: #782301;
        overflow-x: hidden;
        padding-top: 20px;
    }

    .btn-secondary {
        background-color: #00AB8E;
        border-color: #ffffff;
        margin-left: 25px;
    }
    
</style>
