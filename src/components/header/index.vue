<template>
    <div v-if="title" id="header">
        <img @click="goBack" src="../../assets/img/back.png" class="icon" alt="">
        <span>{{title}}</span>
    </div>
</template>

<script>
  export default {
    name: "headerComponent",
    data(){
      return{
        title: ''
      }
    },
    methods: {
      goBack(){
        this.$router.back();
      }
    },
    watch: {
      '$route' (to,) {
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
    }
</style>