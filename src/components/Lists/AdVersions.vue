<template>
    <div>
        
            
                <p>
                    {{ adVersion }}
                </p>
                <ul id="versionChoice">
                    <li v-for="version in versions" :key="version" @click.capture="chooseAdVersion(version)">
                        {{ version }}
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
        'versionChoice'],
    data() {
        return {
            ads: {},
            Company: this.$props.company,
            AdType: this.$props.adType,
            AdVersion: this.$props.adVersion,
            versions: {}
        }
    },
    mounted() {
        this.getAdVersions()
    },
    methods: {
        getAdVersions() {
            this.axios.get(`http://localhost/AdReviewBack/clients/${this.Company}/${this.AdType}/${this.AdVersion}/scandir.php`)
            .then(response => {
                document.getElementById("adVersions").style.display = "none";
                this.versions = response.data
                console.log(this.versions)
                }
            )           
        },
        chooseAdVersion(versionChoice) {
            console.log(versionChoice)
            this.axios.get(`http://localhost/AdReviewBack/clients/${this.Company}/${this.AdType}/${this.AdVersion}/${versionChoice}/scandir.php`)
            .then(response => {
                this.$router.push({path: `/ClientHome/${this.Company}/${this.AdType}/${this.AdVersion}/${versionChoice}`}
                )

                versionChoice = response.data
                console.log(versionChoice)
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
