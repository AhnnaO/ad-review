<template>
    <div class="sidebar">
            <ul>
                <li v-for="campaign in campaigns" :key="campaign" @click="chooseCampaign($emit)"> 
                    {{ campaign }}
                    <AdTypes :adType="adType"/>
                </li>
                
            </ul>
            
        </div>
</template>
<script>
import AdTypes from './AdTypes.vue'
export default {
    props: [ 'adType' ],
    components: {
        AdTypes
    },
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
                
                }
            )           
        },
        chooseCampaign($emit) {
            this.axios.get('http://localhost/AdReviewBack/clients/clientABC/191127_ad_review/scandir.php')
            .then(response => {
                this.ad = response.data[$emit]
                this.$router.push({path: `/ClientCampaigns/${this.company}/${this.adType}`})
                console.log(this.ad)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
$whiteBase: #FFFFFF;
    li {
        list-style: none;
        font-size: 1.5em;
        color: $whiteBase;
        padding: 1%;
        margin-left: 0px;
    }
</style>