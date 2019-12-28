<template>
    <div class="campaigns-page">
        <app-header 
        :company="company"/>
        <div class="sidebar">
            <p></p>
            <ul>
                <li v-for="campaign in campaigns" :key="campaign"> 
                    {{ campaign }}
                </li>
            </ul>
        </div>
        
    </div>
</template>
<script>
// import { store } from './store/store'

export default {
    props: [ 'company' ],
    data() {
        return {
            campaign: '',
            campaigns: {},
            index: Number
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
            
        }
    }
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
