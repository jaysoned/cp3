<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/Add">Add Book</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
.body {
  padding: 0 50px 50px 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-evenly;
  background-color: #2c3e50;
}

#nav a.router-link-exact {
  font-weight: bold;
  color: #ffffff !important;
}

#nav .nav-link {
  color: #ffffff;
  text-decoration: none;
  
}

#nav a.router-link-exact-active {
  color: #428db9;
}

</style>
