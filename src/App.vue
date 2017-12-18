<template>
    <div id='app'>
        <router-view></router-view>
        <Loading v-if="isLoading"></Loading>
    </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex'
    import Loading from './components/Loading/Loading.vue'
    export default{
        data(){
            return {

            }
        },
        computed: {
            ...mapGetters(['isLoading'])
        },
        components:{

        }
    }
</script>
