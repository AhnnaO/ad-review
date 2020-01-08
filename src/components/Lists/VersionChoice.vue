<template>
    <div>
                <p>
                    {{ versionChoice }}
                </p>
                <ul id="renderAd">
                    <li v-for="size in sizes" :key="size" @click.capture="chooseAd(size)">
                        {{ size }}
                    </li>
                </ul>
                
        <router-view /> 
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
        this.getAdSizes()
        // this.getAd()
    },
    methods: {
        getAdSizes() {
            // Possibly put iframe function here...so all 3 sizes of index.html show on the right.


            // this.axios.get(`http://localhost/AdReviewBack/scandir.php?client=${this.Company}&adtype=${this.AdType}`)
            this.axios.get(`http://localhost/AdReviewBack/clients/${this.Company}/${this.AdType}/${this.AdVersion}/${this.VersionChoice}/scandir.php`)
            .then(response => {
                document.getElementById("versionChoice").style.display = "none";
                this.sizes = response.data
                console.log(this.sizes)
                }
            )           
        },
        chooseAd(renderAd) {
            console.log(renderAd)
            this.axios.get(`http://localhost/AdReviewBack/clients/${this.Company}/${this.AdType}/${this.AdVersion}/${this.VersionChoice}/${renderAd}/index.html`)
            .then(response => {
                //this.$router.push({path: `/ClientHome/${this.Company}/${this.AdType}/${this.AdVersion}/${this.VersionChoice}/${renderAd}`})
                this.$parent.$parent.$parent.adrenderVariable = 'THIS IS WHERE THE AD GOES'
                console
                renderAd = response.data
                console.log(renderAd)
            })
        },
        // getAd() {
        //     this.axios.get(`http://localhost/AdReviewBack/clients/${this.Company}/${this.AdType}/${this.AdVersion}/${this.VersionChoice}/${this.RenderAd}/index.html`)
        //     .then(response => {
        //         // document.getElementById("renderAd").style.display = "none";
        //         this.ad = response.data
        //         console.log(this.ad)
        //         }
        //     )           
        // },
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
