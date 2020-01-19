<template>

    <div class="header">
        <header>
        <nav>
            <span> 
              <h1 v-if="admin == 0" class="company-name">{{ company }} Campaigns</h1> 
              <h1 v-else class="admin">Admin</h1>
            </span>
            <b-button class="nav-link"><router-link to="/" tag="span" active-class="active" exact>Logout</router-link></b-button>                
        </nav>
        </header>
    </div>

</template>

<script>

export default {

  data() {
    return {    
    }
  },

  props: {
    company: String,
    admin: Boolean
  },
}

</script>

<style lang="scss" scoped>

$isobarOrange: #F74902;
$buttonColor: #939A9F;
$whiteBase: #FFFFFF;
 
nav .active {
  font-size: 30px;
} 

nav span {
  font-size: 20px;
  padding: 5px 10px;
}

.company-name, .admin {
  float: left;
}

.nav-link {
  float: right;
}

header {
  display: inline-block;
  background: $isobarOrange;
  border-bottom: 4px solid $buttonColor;
  box-sizing: border-box;
  padding: 50px;
  color: $whiteBase;
  font-size: 30px;
  position: fixed;
  width: 100%; 
  max-height: 160px;   
}

nav {
  background: $isobarOrange;
  max-height: 160px;
}

.btn-secondary {
  background-color: $buttonColor;
  border-color: $whiteBase;
}

</style>