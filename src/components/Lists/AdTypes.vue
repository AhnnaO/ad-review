<template>
    <div>
        
            
                {{ value }}
                <ul>
                    <li v-for="ad in ads" :key="ad">
                        {{ ad }}
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
            ads: {},
            Company: this.$props.company
        }
    },
    mounted() {
        this.getAdTypes()
    },
    methods: {
        getAdTypes() {
            this.axios.get('http://localhost/AdReviewBack/clients/${this.Company}/${value}scandir.php')
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
