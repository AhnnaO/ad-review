<template>
    <div class="campaigns-page">
        <app-header 
        :company="company"/>
        <!-- <div class="render" v-if="routeExists"> -->
            <!-- <app-renderAd :renderAd="renderAd"/> -->
        <!-- </div> -->
        
        <div class="sidebar">
            <ul id="adTypes" style="display:block;">
                <li v-for="campaign in campaigns" :key="campaign" @click.capture="chooseCampaign(campaign)"> 
                    {{ campaign }}
                    <ul v-if="(adTypesList != '') && campaignName == campaign">
                        <li v-for="type in adTypesList" :key="type" @click.capture="chooseType(type)">
                            {{ type }}
                            <ul v-if="(versionList != '') && adTypeName == type">
                                <li v-for="version in versionList" :key="version" @click.capture="chooseVersion(version)">
                                    {{ version }}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                
            </ul>
            
        </div>
        <div class="render">
            <ul v-if="(sizeList != '') && versionName == version">
                <li v-for="size in sizeList" :key="size" @click.capture="chooseSize(size)">
                    {{ size }}
                    
                </li>
            </ul>
            <span>should be a list of sizes</span>
        </div>
        
    </div>
</template>
<script>

export default {
    props: [ 'company',
            'version'],
    data() {
        return {
            campaigns: {},
            ad: {},
            Company: this.$props.company,
            Version: this.$props.version, 
            adrenderVariable: '',
            adTypesList: '',
            campaignName: '',
            adTypeName: '',
            versionList: '',
            sizeList: ''
        }
    },
    
    mounted() {
        this.getCampaigns()
    },
    methods: {
        getCampaigns() {
            this.axios.get(`http://localhost/AdReviewBack/clients/scandir.php?client=${this.Company}`)
            .then(response => {
                this.campaigns = response.data
                }
            )           
        },
        chooseCampaign(campaignNameSelected) {
            this.campaignName = campaignNameSelected
            this.axios.get(`http://localhost/AdReviewBack/clients/scandir.php?client=${this.Company}&campaign=${campaignNameSelected}`)
            .then(response => {
                //this.$router.push({path: `/ClientHome/${this.Company}/${campaignName}`})
                this.adTypesList = response.data
            })
        },
       chooseType(adTypeSelected) {
           console.log(adTypeSelected)
           this.adTypeName = adTypeSelected
            this.axios.get(`http://localhost/AdReviewBack/clients/scandir.php?client=${this.Company}&campaign=${this.campaignName}&adtype=${adTypeSelected}`)
            .then(response => {
                this.versionList = response.data
            })
       },
       chooseVersion(versionSelected) {
           console.log(versionSelected);
           this.versionName = versionSelected
           this.axios.get(`http://localhost/AdReviewBack/clients/scandir.php?client=${this.Company}&campaign=${this.campaignName}&adtype=${this.adTypeName}&version=${versionSelected}`)
           .then(response => {
               this.sizeList = response.data
               console.log(this.sizeList)
           })
       }
    }
}
</script>
<style lang="scss" scoped>
$isobarOrange: #F74902;
$buttonColor: #939A9F;
$whiteBase: #FFFFFF;
$sidebar: #3E3C3B;
$whiteBase: #FFFFFF;
    li {
        list-style: none;
        font-size: 1.5rem;
        color: $whiteBase;
        padding: 1%;
        margin-left: 0px;
    }

    .sidebar {
        height: 100%;
        width: 250px;
        position: fixed;
        z-index: 1;
        background-color: $sidebar;
        overflow-x: hidden;
        padding-top: 20px;
    }

    .btn-secondary {
        background-color: $buttonColor;
        border-color: $whiteBase;
        margin-left: 25px;
    }

    .render {
        width: 100%;
        height: 100%;
        position: fixed;
        text-align: right;
        border: 4px green solid;
        
    }

    
    
</style>
