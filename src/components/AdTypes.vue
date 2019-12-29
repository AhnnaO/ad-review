<template>
    <div>
        <div class="sidebar">
            <router-view />
            <ul>
                <li v-for="ad in ads" :key="ad">
                    {{ ad }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        ad: String
    },
    data() {
        return {
            ads: {}
        }
    },
    mounted() {
        this.getAdTypes()
    },
    methods: {
        getAdTypes() {
            this.axios.get('http://localhost/AdReviewBack/clients/clientABC/191127_ad_review/scandir.php')
            .then(response => {
                this.ads = response.data
                console.log(this.ads)
                }
            )           
        },
    }
}
</script>
<style lang="scss" scoped>

</style>
