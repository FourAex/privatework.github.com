<template>
    <div class="box">
        <div class="nav-bar">
            <div class="btn" @click="aa">
                <img src="./images/back-btn.png" alt="">
            </div>
            <div class="title">消息</div>
        </div>
        <div class="content">
            <div class="bg">
                <img src="./images/bg.png" alt="">
                <span>当前没有任何消息</span>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {
        aa() {
            this.$router.push('/msg')
        }
    }
  }
</script>

<style lang="less">
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body, html {
        width: 100%;
        height: 100%;
        min-height: 100%;
        font-family: 'PingFangSC-Semibold', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
    }
    .box{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .nav-bar{
            width: 100%;
            height: .6rem;
            min-height: .6rem;
            position: relative;
            background-color: #f3f3f3;
            .title{
                width: 100%;
                height: 100%;
                line-height: .6rem;
                text-align: center;
                font-weight: bold;
                color: #000;
                font-size: .18rem;
            }
            .btn{
                width: .48rem;
                height: 100%;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    display: block;
                    width: .24rem;
                    height: .24rem;
                }
            }
        }
        .content{
            flex: 1;
            width: 100%;
            background-color: #ededed;
            position: relative;
            .bg{
                position: absolute;
                top: 1rem;
                left: 50%;
                transform: translateX(-50%);
                font-size: .16rem;
                color: #888;
                text-align: center;
                img{
                    width: 2.14rem;
                    height: 1.32rem;
                    display: block;
                }
                span{
                    display: block;
                    margin-top: .14rem;
                }
            }
        }
    }
</style>