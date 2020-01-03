<template>
    <div class="campaigns">
        <ul id="adTypes">
            <li v-for="campaign in campaigns" :key="campaign" @click.capture="chooseCampaign(campaign)"> 
                {{ campaign }}            
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: [ 'company',
        'campaign',
        'adType',
        'adVersion'],
    data() {
        return {
            // component: 'AdTypes',
            campaigns: {},
            ad: {},
            Company: this.$props.company,
           
        }
    },
   
    methods: {
        
        
    }
}
</script>