<template>
  <div id="app">
    <Loader />
    <router-view/>
  </div>
</template>

<script>
  import Loader from "./components/Loader";

  export default {
    components: {
      Loader
    }
  }
</script>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
  }

  #app {
    color: #333;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  }

  body {
    overflow-Y: scroll;
    -ms-overflow-style: none
  }
  
  body::-webkit-scrollbar {
    display: none;
  }
</style>
