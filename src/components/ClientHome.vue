<template>
    <div class="campaigns-page">
        <app-header 
        :company="company"/>
        <div class="sidebar">
            <ul>
                <li v-for="campaign in campaigns" :key="campaign" @click.capture="chooseCampaign(campaign)"> 
                    {{ campaign }}
                    
                </li>
                
            </ul>
            <!-- <Campaigns /> -->
            <!-- <AdTypes :value="value"/> -->
            <router-view />
        </div>
        
    </div>
</template>
<script>
// import AdTypes from './Lists/AdTypes.vue'

export default {
    props: [ 'company',
        'campaign',
        'adType',
        'adVersion'],
    // components: {
    //     AdTypes
    // },
    data() {
        return {
            // Campaign: this.$props.campaign,
            campaigns: {},
            ad: {},
            Company: this.$props.company,
           
        }
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
        chooseCampaign(adType) {
            console.log(adType)
            this.axios.get(`http://localhost/AdReviewBack/clients/${this.Company}/${adType}/scandir.php`)
            .then(response => {
                this.$router.push({path: `/ClientHome/${this.Company}/${adType}`})

                adType = response.data
                console.log(adType)
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
