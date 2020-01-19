<template>
    <div class="admin-page">

        <!-- Header component with admin prop from login -->
        <app-header 
        :admin="admin"/>
        
        <!-- loops run through the backend (soon to be server) directory with the use of scandir() php function -->
        <div class="sidebar">
            <ul id="clients" style="display:block;">
                <li v-for="client in clients" :key="client" @click.capture="chooseClient(client)">
                    {{ client }} 
                    <ul id="adTypes" v-if="(campaignList != '') && clientName == client">
                        <li v-for="campaign in campaignList" :key="campaign" @click.capture="chooseCampaign(campaign)"> 
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
                    :src="currentUrl + clientName + '/' + campaignName + '/' + adTypeName + '/' + versionName + '/' + size + '/index.html'"
                    :style="{ width: sizeSplit(size)[0] + 'px', height: sizeSplit(size)[1] + 'px' }"
                    />                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    
    props: [ 
        'admin'
    ],

    data() {
        return {
            clients: {},
            campaignList: '',
            adTypesList: '',
            campaignName: '',
            adTypeName: '',
            versionList: '',
            sizeList: '',
            versionName: '',
            currentUrl: '',
            Admin: false
        }
    },
    
    mounted() {
        this.getClients()
    },
    
    methods: {

        // Mounted function to show client list directly, gets data from server side
        getClients() {
            this.currentUrl = 'http://localhost/AdReviewBack/clients/'
            this.axios.get(`http://localhost/AdReviewBack/clients/scandir.php`)
            .then(response => {
                this.clients = response.data
            })
        },

        chooseClient(clientSelected) {
            this.clientName = clientSelected
            this.axios.get(`http://localhost/AdReviewBack/clients/scandir.php?client=${this.clientName}`)
            .then(response => {
                this.campaignList = response.data
            })
        },

        chooseCampaign(campaignNameSelected) {
            this.campaignName = campaignNameSelected
            this.axios.get(`http://localhost/AdReviewBack/clients/scandir.php?client=${this.clientName}&campaign=${campaignNameSelected}`)
            .then(response => {
                this.adTypesList = response.data
            })
        },

       chooseType(adTypeSelected) {
            console.log(adTypeSelected)
            this.adTypeName = adTypeSelected
            this.axios.get(`http://localhost/AdReviewBack/clients/scandir.php?client=${this.clientName}&campaign=${this.campaignName}&adtype=${adTypeSelected}`)
            .then(response => {
                this.versionList = response.data
            })
        },

        chooseVersion(versionSelected) {
            console.log(versionSelected)
            this.versionName = versionSelected
            this.axios.get(`http://localhost/AdReviewBack/clients/scandir.php?client=${this.clientName}&campaign=${this.campaignName}&adtype=${this.adTypeName}&version=${versionSelected}`)
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

.admin-page {
    min-height: 100%;
    overflow: auto;
}

#clients {
    padding: 1rem;
}
    
li {
    list-style: none;
    font-size: 1.5rem;
    color: $whiteBase;
    padding-left: 0px;
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
    width: 260px;
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
    // position: fixed;
    text-align: right;
}

iframe {
    border: none;
}
   
</style>
