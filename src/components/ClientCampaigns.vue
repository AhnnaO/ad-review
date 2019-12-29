<template>
    <div class="campaigns-page">
        <app-header 
        :company="company"/>
        <div class="sidebar">
            <Campaigns />
            <!-- <router-view /> -->
        </div>
        
    </div>
</template>
<script>
import Campaigns from './Lists/Campaigns.vue'

export default {
    props: [ 'company'],
    components: {
        Campaigns
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

    
    
</style>
