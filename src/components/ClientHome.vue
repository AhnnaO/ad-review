<template>

    <div class="campaigns-page">
        <!-- Header component with admin prop from login -->
        <app-header 
        :company="company"/>

        <!-- loops run through the backend (soon to be server) directory with the use of scandir() php function -->
        <div class="sidebar">
            <ul id="adTypes">
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

        <!-- Final loop and rendering of html from the backend (server) -->
        <div class="render">
            <ul v-if="(sizeList != '')">
                <li class="final-list" v-for="size in sizeList" :key="size"> 
                    {{ size }}  
                    <br />
                    <iframe 
                    :src="currentUrl + Company + '/' + campaignName + '/' + adTypeName + '/' + versionName + '/' + size + '/index.html'"
                    :style="{ width: sizeSplit(size)[0] + 'px', height: sizeSplit(size)[1] + 'px' }"
                    />                    
                </li>
            </ul>
        </div>
        <!-- </div> -->
    </div>

</template>

<script>

export default {

props: [ 
        'company',
    ],

    data() {
        return {
            clients: {},
            campaigns: {},
            Company: this.$props.company,
            adTypesList: '',
            campaignName: '',
            adTypeName: '',
            versionList: '',
            sizeList: '',
            versionName: '',
            currentUrl: '',
            sizeAfterSplit: ''
        }
    },
    
    mounted() {
        
        this.getCampaigns()
    },
    
    methods: {

        // Mounted function to show campaign list directly, gets data from server side
        getCampaigns() {
            this.currentUrl = 'http://localhost/AdReviewBack/clients/'
            this.axios.get(`http://localhost/AdReviewBack/clients/scandir.php?client=${this.Company}`)
            .then(response => {
                this.campaigns = response.data
                console.log(this.campaigns)
                }
            )           
        },

        chooseCampaign(campaignNameSelected) {
            this.campaignName = campaignNameSelected
            this.axios.get(`http://localhost/AdReviewBack/clients/scandir.php?client=${this.Company}&campaign=${campaignNameSelected}`)
            .then(response => {
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
            console.log(versionSelected)
            this.versionName = versionSelected
            this.axios.get(`http://localhost/AdReviewBack/clients/scandir.php?client=${this.Company}&campaign=${this.campaignName}&adtype=${this.adTypeName}&version=${versionSelected}`)
            .then(response => {
                this.sizeList = response.data
               
            })
        },

        sizeSplit(size){
            return size.split("x")
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

.campaigns-page {
    min-height: 100%;
    overflow: auto;
}

li {
    list-style: none;
    font-size: 1.5rem;
    color: $whiteBase;
    padding: 1%;
    margin-left: 0px;
}

.final-list {
    color: $sidebar;
    display: block;
    padding-top: 10rem;
    margin: 1rem;
}

.sidebar {
    height: 100%;
    width: 250px;
    top: 160px;
    position: fixed;
    z-index: 1;
    background-color: $sidebar;
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
    text-align: right;
}

iframe {
    border: none;
}

    
</style>
