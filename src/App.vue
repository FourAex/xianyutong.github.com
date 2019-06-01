<template>
  <div id="app">
    <myHeader></myHeader>
    <div class="route-view">
      <router-view/>
    </div>
    <myFooter></myFooter>
  </div>
</template>

<script>
  import myHeader from './components/header';
  import myFooter from './components/footer';
  export default {
    name: 'App',
    components:{
      myHeader,
      myFooter
    }
  }
</script>

<style lang="less">
  #app {
    width: 100%;
    height: 100%;
    font-family: 'PingFangSC-Semibold', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .route-view{
      flex: 1;
      display: flex;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
</style>
