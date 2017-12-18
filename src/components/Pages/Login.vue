<template>
    <div class="login">
        <div class="login-box">
            <div class="login-left">
                <img src="../../assets/img/login_pic.png" alt="">
            </div>
            <div class="login-right">
                <div class="login-logo">
                    <img src="../../assets/img/logo_1.svg" alt="">
                    <p>CRM 管理系统</p>
                </div>
                <div class="login-input-text">
                    <input type="text" placeholder="帐号">
                </div>
                <p class="login-error-msg">这是错误信息</p>
                <div class="login-input-text">
                    <input type="password" placeholder="登录密码">
                </div>
                <p class="login-error-msg">这是错误信息</p>
                <div class="login-input-btn">
                    <input type="button" @click="enter" value="登录">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods:{
            enter(){
                this.$router.push({
                    name:'nav'
                })
            }
        }
    }
</script>
<style>
   @import '../../assets/css/login.css';
</style>