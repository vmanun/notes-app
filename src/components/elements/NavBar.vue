<template>
  <header>
    <nav class="nav-bar">
        <a href=""><img src="../../assets/img/logo.png" alt="Go back home." class="logo"></a>
        <img src="../../assets/img/user.png" alt="User" class="user-logo">
    </nav>
  </header>
</template>

<script>
</script>

<style scoped>
.nav-bar {
    -webkit-background-image: linear-gradient(to top right, #FFD900, #FF8102);
    -moz-background-image: linear-gradient(to top right, #FFD900, #FF8102);
    background-image: linear-gradient(to top right, #FFD900, #FF8102);
    -webkit-box-shadow: 0 1px 5px #222;
    -moz-box-shadow: 0 1px 5px #222;
    box-shadow: 0 1px 5px #222;
    position: fixed;
    z-index: 1;
    width: 100%;
    margin: -30px -8px -10px -10px;
    top: 30px;
    left: 10px;
}

.span-bar {
    margin: -10px -8px -10px -10px;
    padding: 5px 10px 5px 10px; 
}

.logo {
    height: 70px;
    width: 190px;
}

.user-logo {
    height: 34px;
    width: 34px;
    float: right;
    margin: 20px;
    cursor: pointer;
}
</style>
