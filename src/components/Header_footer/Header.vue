<template>
    <div class="header">
        <header>
        <nav>
            <span> <h1 class="company-name">{{ company }} Campaigns</h1> </span>
            <b-button class="nav-link"><router-link to="/" tag="span" active-class="active" exact>Logout</router-link></b-button>
            
                
        </nav>
        </header>
    </div>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      client: null,
      responseData: []
    }
  },
props: {
  company: String
},
  
    mounted(){
      // axios.get('http://localhost/AdReviewBack/Users/readAllUsers.php')
      // .then(response =>{
      //   this.responseData = response.data
        // this.client = this.responseData.find(
        //   name => {return name.company_name == 'abc'}
        // )
        console.log(this.company)
      }
      
    

}
</script>
<style>

nav {
  
  background: #F74902;
}
 
nav .active {
  font-size: 30px;
} 

nav span {
  font-size: 20px;
  padding: 5px 10px;
}

.company-name {
  float: left;
}

.nav-link {
  float: right;
}

header {
  background: #F74902;
  border-bottom: 4px solid #00AB8E;
  box-sizing: border-box;
  padding: 50px;
  color: #ffffff;
  font-size: 30px;
}

.btn-secondary {
  background-color: #00AB8E;
  border-color: #ffffff;
}
</style>