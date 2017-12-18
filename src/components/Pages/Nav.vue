<template>
    <div>
        这是nav页面，
        <button @click="enter">点击进入后台</button>
    </div>
</template>
<script>
    export default {
        methods:{
            enter(){
                this.$router.push({
                    name:'page_1'
                })
            }
        }
    }
</script>