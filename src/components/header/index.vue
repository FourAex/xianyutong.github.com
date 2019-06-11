<template>
    <div v-if="title" id="header">
        <img @click="goBack" src="../../assets/img/back.png" class="icon" alt="">
        <span>{{title}}</span>
        <router-link v-if="path === '/balanceEnter'" tag="div" class="change-btn" to="/bankCard">换卡</router-link>
    </div>
</template>

<script>
  export default {
    name: "headerComponent",
    data(){
      return{
        title: '',
        path: ''
      }
    },
    methods: {
      goBack(){
        this.$router.back();
      }
    },
    watch: {
      '$route' (to,) {
        this.path = to.fullPath;
        this.title = to.meta.title;
      }
    }
  }
</script>

<style lang="less" scoped>
    #header{
        width: 100%;
        height: .42rem;
        line-height: .42rem;
        text-align: center;
        font-size: 0.18rem;
        position: relative;
        .icon{
            width: .18rem;
            width: .18rem;
            position: absolute;
            left: .20rem;
            top: 50%;
            transform: translateY(-50%);
        }
        .change-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: .16rem;
            font-size: .15rem;
            color: #CCA66B;
            color: red;
            z-index: 19;
        }
    }
</style>