<template>
    <div class="box">
        <div class="nav-bar">
            <div class="btn" @click="aaa">
                <img src="./images/back-btn.png" alt="">
            </div>
            <div class="title">半城烟沙”半城雨(在线充值)</div>
        </div>
        <div class="content">
            <ul class="msg-list">
                <li class="msg left-msg">
                    <div class="avatar">
                        <img src="./images/avatar-1.png" alt="">
                    </div>
                    <div class="detail">
                        亲，您好！欢迎选择专享快付，小妹很高兴为您服务，请先点选下方您需要的充值方式噢！
                    </div>
                </li>
                <li class="msg right-msg">
                    <div class="detail">
                        知道了
                    </div>
                    <div class="avatar">
                        <img src="./images/avatar-2.png" alt="">
                    </div>
                </li>
                <li class="msg right-msg">
                    <div class="detail">
                        知道了
                    </div>
                    <div class="avatar">
                        <img src="./images/avatar-2.png" alt="">
                    </div>
                </li>
                <li class="msg left-msg">
                    <div class="avatar">
                        <img src="./images/avatar-1.png" alt="">
                    </div>
                    <div class="detail">
                        亲，您好！欢迎选择专享快付，小妹很高兴为您服务，请先点选下方您需要的充值方式噢！
                    </div>
                </li>
                <li class="msg left-msg">
                    <div class="avatar">
                        <img src="./images/avatar-1.png" alt="">
                    </div>
                    <div class="detail">
                        亲，您好！欢迎选择专享快付，小妹很高兴为您服务，请先点选下方您需要的充值方式噢！
                    </div>
                </li>
                <li class="msg right-msg">
                    <div class="detail">
                        知道了
                    </div>
                    <div class="avatar">
                        <img src="./images/avatar-2.png" alt="">
                    </div>
                </li>
                <li class="msg left-msg">
                    <div class="avatar">
                        <img src="./images/avatar-1.png" alt="">
                    </div>
                    <div class="detail">
                        亲，您好！欢迎选择专享快付，小妹很高兴为您服务，请先点选下方您需要的充值方式噢！
                    </div>
                </li>
                <li class="msg right-msg">
                    <div class="detail">
                        知道了
                    </div>
                    <div class="avatar">
                        <img src="./images/avatar-2.png" alt="">
                    </div>
                </li>
                <li class="msg left-msg">
                    <div class="avatar">
                        <img src="./images/avatar-1.png" alt="">
                    </div>
                    <div class="detail">
                        亲，您好！欢迎选择专享快付，小妹很高兴为您服务，请先点选下方您需要的充值方式噢！
                    </div>
                </li>
                <li class="msg right-msg">
                    <div class="detail">
                        知道了
                    </div>
                    <div class="avatar">
                        <img src="./images/avatar-2.png" alt="">
                    </div>
                </li>
                <li class="msg left-msg">
                    <div class="avatar">
                        <img src="./images/avatar-1.png" alt="">
                    </div>
                    <div class="detail">
                        亲，您好！欢迎选择专享快付，小妹很高兴为您服务，请先点选下方您需要的充值方式噢！
                    </div>
                </li>
                <li class="msg right-msg">
                    <div class="detail">
                        知道了
                    </div>
                    <div class="avatar">
                        <img src="./images/avatar-2.png" alt="">
                    </div>
                </li>
                <li class="msg left-msg">
                    <div class="avatar">
                        <img src="./images/avatar-1.png" alt="">
                    </div>
                    <div class="detail">
                        亲，您好！欢迎选择专享快付，小妹很高兴为您服务，请先点选下方您需要的充值方式噢！
                    </div>
                </li>
                <li class="msg right-msg">
                    <div class="detail">
                        知道了
                    </div>
                    <div class="avatar">
                        <img src="./images/avatar-2.png" alt="">
                    </div>
                </li>
            </ul>
            <div class="pay-list">
                <img src="./images/weixin.png" alt="">
                <img src="./images/zhifubao.png" alt="">
                <img src="./images/yinhang.png" alt="">
            </div>
        </div>
        <div class="opts-panel">
            <div class="input-panel">
                <img src="./images/biaoqing.png" class="emoji" alt="">
                <input type="text" class="input">
                <div class="send">发送</div>
            </div>
            <div class="btn-list">
                <div class="btn btn-1">
                    <img src="./images/upload.png" class="icon" alt="">
                </div>
                <div class="btn btn-2">
                    <img src="./images/jietu.png" class="icon" alt="">
                </div>
                <div class="btn btn-3">
                    <img src="./images/pay.png" class="icon" alt="">
                </div>
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
            aaa() {
                this.$router.back()
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
            height: calc(100vh - 2.25rem);
            background-color: #ededed;
            padding: .28rem .14rem 0;
            display: flex;
            flex-direction: column;
            .msg-list{
                flex: 1;
                overflow-x: hidden;
                overflow-y: auto;
                list-style: none;
                .msg{
                    display: flex;
                    margin-bottom: .24rem;
                    .avatar{
                        width: .48rem;
                        min-width: .48rem;
                        height: .48rem;
                        img{
                            display: block;
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .detail{
                        padding: .10rem;

                        border-radius: 0.04rem;
                        background-color: #fff;
                        font-size: .16rem;
                        line-height: .24rem;
                        position: relative;

                    }
                }
                .left-msg{
                    .detail{
                        border: 1px solid #ccc;
                        margin: 0 0.48rem 0 0.2rem;
                        &:after{
                            content: ' ';
                            width: .1rem;
                            height: .16rem;
                            position: absolute;
                            top: .16rem;
                            left: -0.09rem;
                            background: url("./images/jiantou1.png") no-repeat;
                            background-size: 100% 100%;
                            z-index: 8;
                        }
                    }
                }
                .right-msg{
                    justify-content: flex-end;
                    .detail{
                        border: 1px solid #53b3f8;
                        margin: 0 0.2rem 0 0.48rem;
                        background-color: #53b3f8;
                        color: #fff;
                        &:after{
                            content: ' ';
                            width: .1rem;
                            height: .16rem;
                            position: absolute;
                            top: .16rem;
                            right: -0.09rem;
                            background: url("./images/jiantou2.png") no-repeat;
                            background-size: 100% 100%;
                        }
                    }
                }
            }
            .pay-list{
                width: 100%;
                height: .52rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                img{
                    display: block;
                    width: 1.12rem;
                    height: .34rem;
                }
            }
        }
        .opts-panel{
            width: 100%;
            height: 1.65rem;
            background-color: #f3f3f3;
            .input-panel{
                width: 100%;
                height: .4rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 .14rem;
                margin: .12rem auto .2rem;
                .emoji{
                    display: block;
                    width: .28rem;
                    height: .28rem;
                }
                .input{
                    flex: 1;
                    height: .4rem;
                    padding: .14rem .14rem;
                    border-radius: .4rem;
                    border: 1px solid #ccc;
                    background-color: #fff;
                    margin: 0 .12rem;
                    outline: none;
                    font-size: .18rem;
                }
                .send{
                    color: #53b3f8;
                    font-size: .16rem;
                }
            }
            .btn-list{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                margin-bottom: .22rem;
                .btn{
                    img{
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
                .btn-1, .btn-2{
                    width: .72rem;
                    height: .61rem;
                }
                .btn-3{
                    width: .48rem;
                    height: .61rem;
                }
            }
        }
    }
</style>