<template>
    <div v-if="footer" id="footer">
        <ul class="nav-list">
            <li @click="changeNav(index)" v-for="(item,index) in navList" :key="index" :class="item.status ? 'status' : ''" class="item">
                <img :src="item.status ? item.activeImg : item.hideImg" class="icon" alt="">
                <span>{{item.title}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "footerComponent",
    data(){
      return{
        footer: false,
        navList: [
          {
            activeImg: require('../../assets/img/dh_sy_2@3x.png'),
            hideImg: require('../../assets/img/dh_sy_1@3x.png'),
            status: true,
            title: '首页',
            path: '/accountDetails',
          },
          {
            activeImg: require('../../assets/img/dh_zj_2@3x.png'),
            hideImg: require('../../assets/img/dh_zj_1@3x.png'),
            status: false,
            title: '资金',
            path: '/funds',
          },
          {
            activeImg: require('../../assets/img/dh_wd_2@3x.png'),
            hideImg: require('../../assets/img/dh_wd_1@3x.png'),
            status: false,
            title: '我的',
            path: '/userCenter',
          }
        ]
      }
    },
    methods: {
      changeNav(index){
        this.navList.forEach((item,i) => {
          item.status = index === i;
          if(index === i){
            this.$router.push(item.path);
          }
        })
      },
    },
    watch: {
        '$route'(to,){
          this.footer = to.meta.footer;
        }
    }
  }
</script>

<style lang="less" scoped>
    #footer{
        width: 100%;
        background-color: #fff;
        height: .55rem;
        position: relative;
        left: 0;
        bottom: 0;
        z-index: 9;
        .nav-list{
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-around;
            padding: 0.05rem 0;
            .item{
                width: .5rem;
                font-size: 0.1rem;
                text-align: center;
                color: #AAA497;
                .icon{
                    width: .24rem;
                    height: .24rem;
                    margin: 0 auto 0.07rem;
                    display: block;
                }
                &.status{
                    color: #CCA66B;
                }
            }
        }
    }
</style>