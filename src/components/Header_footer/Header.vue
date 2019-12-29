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
      
        console.log(this.company)
      }
}
</script>

<style lang="scss" scoped>

$isobarOrange: #F74902;
$buttonColor: #939A9F;
$whiteBase: #FFFFFF;

nav {
  background: $isobarOrange;
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
  background: $isobarOrange;
  border-bottom: 4px solid $buttonColor;
  box-sizing: border-box;
  padding: 50px;
  color: $whiteBase;
  font-size: 30px;
}

.btn-secondary {
  background-color: $buttonColor;
  border-color: $whiteBase;
}

</style>