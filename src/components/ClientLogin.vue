<template>
    <div class="login-page container-fluid">
        <div class="logo">
            <img src="../assets/isobar_logo_white.png">
        </div>
        <div class="form">
            <b-form class="form-box" @submit="onSubmit" @reset="onReset" v-if="show">
                
                    <div class="col-xs-12">
                        <h1 class="login">Login</h1>
                    </div>
                    <b-form-group
                        class="text-center"
                        id="input-group-1"
                        label="Company Name:"
                        label-for="input-1"
                    >
                        <b-form-input
                            id="input-1"
                            v-model="form.companyName"
                            type="text"
                            required
                            placeholder="Enter company name"
                        >
                        </b-form-input>            
                    </b-form-group>
                    <b-form-group 
                        id="input-group-2"
                        label="Password:"
                        label-for="input-2"
                    >
                        <b-form-input
                            id="input-2"
                            v-model="form.password"
                            required
                            placeholder="Enter password"
                        >
                        </b-form-input> 
                    </b-form-group>       
                <b-button id="submit-btn" type="submit" variant="primary">Submit</b-button>
            </b-form>
            <div class="footer"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                companyName: '',
                password: ''
            },
            show: true
        }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            this.axios.get('http//localhost/AdReviewBack/Users/readUser.php')
            /*eslint no-unused-vars: "error"*/
            .then (response => {
                if(this.form.companyName != "" && this.form.password != "") {
                    if(this.form.companyName == this.companyName && this.form.password == this.password) {
                        this.$$emit("authenticated", true)
                        // this.$router.replace({name: 'ClientCampaigns'})
                    } else {
                        alert('The username and/or password is incorrect.')
                    }
                } else {
                    alert("A username and password must be present.")
                } 
                // not working
                alert(this.companyName = response)

            })
            // working
            // alert(JSON.stringify(this.form))
        },
        onReset(evt) {
            evt.preventDefault()
            // reset form values
            this.form.companyName = '',
            this.form.password = '',
            this.show = false,
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
    
}
</script>
<style scoped>
    .container-fluid {
        background-color: #F74902;
    }

    .login-page {
        width: 100%;
        text-align: center;
    }

    .logo{
        padding-top: 5%;
        padding-bottom: 3%; 
        background-color: #F74902;
        height: 100%;
 
    }

    .form-box {
        color: white;
        text-align: center;
        border: 4px solid white;
        border-radius: 6px;
        padding: 5%; 
        width: 60%;
        margin: 5% auto;
    }

    .login {
        padding-bottom: 25px;
        color: white;
    }

    #input-1, #input-2 {
        width: 80%;
        text-align: center;
        margin: 0 auto;
    }

    #submit-btn {
        background-color: #F74902;
        border: white solid 4px;
        margin-top: 15px;
    }
    .footer {
        height: 100px;
        background-color: #F74902;
    }

</style>