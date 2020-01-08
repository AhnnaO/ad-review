<template>
    <div>
        {{ renderAd }}
    </div>

</template>
<script>
export default {
    props: [ 'company',
        'campaign',
        'adType',
        'adVersion',
        'versionChoice',
        'renderAd'],    
    data() {
        return {
            ads: {},
            Company: this.$props.company,
            AdType: this.$props.adType,
            AdVersion: this.$props.adVersion,
            VersionChoice: this.$props.versionChoice,
            RenderAd: this.$props.renderAd,
            versions: {},
            sizes: {},
            

        }
    },
    mounted() {
        this.getAd()
    },
    methods: {
        // Need a function for iframe
        getAd() {
            this.axios.get(`http://localhost/AdReviewBack/clients/${this.Company}/${this.AdType}/${this.AdVersion}/${this.VersionChoice}/${this.RenderAd}/index.html`)
            .then(response => {
                // document.getElementById("renderAd").style.display = "none";
                this.ad = response.data
                console.log(this.ad)
                }
            )           
        },
    }
}
</script>
