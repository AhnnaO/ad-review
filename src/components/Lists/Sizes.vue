<template>
    <div>
        
            
                <!-- <p>
                    {{ size }}
                </p>
                <ul>
                    <li v-for="size in sizes" :key="size" @click.capture="chooseAdType(size)">
                        {{ size }}
                    </li>
                </ul> -->
        <router-view /> 
    </div>
</template>
<script>
export default {
    props: [ 'company',
        'campaign',
        'adType',
        'adVersion',
        'size'],
    data() {
        return {
            ads: {},
            Company: this.$props.company,
            AdType: this.$props.adType,
            AdVersion: this.$props.adVersion,
            Size: this.$props.size,
            versions: {},
            sizes: {},
            

        }
    },
    // mounted() {
    //     this.getAdSizes()
    // },
    methods: {
        // getAdSizes() {
        //     console.log(size)
        //     this.axios.get(`http://localhost/AdReviewBack/clients/${this.Company}/${this.AdType}/${this.AdVersion}/${this.Size}/scandir.php`)
        //     .then(response => {
        //         this.sizes = response.data
        //         console.log(this.sizes)
        //         }
        //     )           
        // },
        // chooseAd(size) {
        //     console.log(size)
        //     this.axios.get(`http://localhost/AdReviewBack/clients/${this.Company}/${this.AdType}/${this.AdVersion}/${size}scandir.php`)
        //     .then(response => {
        //         this.$router.push({path: `/ClientHome/${this.Company}/${this.AdType}/${this.AdVersion}/${size}`})

        //         size = response.data
        //         console.log(size)
        //     })
        // }
    }
}
</script>
<style lang="scss" scoped>
$whiteBase: #FFFFFF;
    p, li {
        list-style: none;
        font-size: 1.5em;
        color: $whiteBase;
        padding: 1%;
        margin-left: 0px;
    }
</style>
