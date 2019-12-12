<template>
    <div class="header">
        <header>
        <nav>
            <span><router-link to="/" tag="span" active-class="active" exact>Login</router-link></span>
            <span><router-link to="/ClientCampaigns/{ companyName }" tag="span" active-class="active" exact>Home</router-link></span>
                
        </nav>
        </header>
    </div>
</template>

<style>
nav {
  float: right;
}
 
nav .active {
  font-size: 30px;
} 

nav span {
  background: #F74902;
  font-size: 20px;
  padding: 5px 10px;
}

header {
  background: #F74902;
  border-bottom: 4px solid #607d8b;
  box-sizing: border-box;
  padding: 30px;
  color: #ffffff;
  font-size: 30px;
}
</style>