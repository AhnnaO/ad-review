<template>
    <div>
        <p>
            {{ adType }}
        </p>
        <ul>
            <li v-for="ad in ads" :key="ad" @click.capture="chooseAdType(ad)">
                {{ ad }}
            </li>
        </ul>
        <router-view />
    </div>
</template>
<script>
export default {
    props: [ 'company',
        // 'campaign',
        'adType',
        'adVersion'],
    data() {
        return {
            ads: {},
            Company: this.$props.company,
            AdType: this.$props.adType
        }
    },
    mounted() {
        this.getAdTypes()
    },
    methods: {
        getAdTypes() {
            //this.axios.get('http://localhost/AdReviewBack/system/backend.php?client=${this.Company}&campaign=')
            this.axios.get(`http://localhost/AdReviewBack/clients/${this.Company}/${this.AdType}/scandir.php`)
            .then(response => {
                document.getElementById("adTypes").style.display = "none";
                this.ads = response.data
                console.log(this.ads)
                }
            )           
        },
        chooseAdType(adVersion) {
            console.log(adVersion)
            this.axios.get(`http://localhost/AdReviewBack/clients/${this.Company}/${this.AdType}/${adVersion}/scandir.php`)
            .then(response => {
                this.$router.push({path: `/ClientHome/${this.Company}/${this.AdType}/${adVersion}`}
                )
                adVersion = response.data
                console.log(adVersion)
            })
        }
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
