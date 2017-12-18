<template>
    <div>
        <!--<input type="button" @click="add" value="增加">-->
        <!--<input type="button" @click="del" value="增加">-->
        <input type="button" @click="show1()" value="show">
        <input type="button" @click="hide1()" value="hide">
        <input type="text" v-model="aaa" @keydown.enter="alert()" value="hide">
        <div>现在数字为 {{count}}</div>
        {{isLoading}}
        <ul>
            <li v-for="(item,index) in 10" @click="abc(index)">
                <span v-if="index==0">
                    {{item}} abc
                </span>
                <span v-else="index>0">
                    {{item}}
                </span>

            </li>
        </ul>
    </div>
</template>
<script>
    import {mapGetters,mapActions} from 'vuex';
    import Page from './public/Page.vue'
    export default{
        data(){
            return {
                aaa:'123'
            }
        },
        watch: {

        },

        computed:{
            ...mapGetters(['count','isLoading']),
        },
        components:{

        },
        methods:{
            // ...mapActions(['show','hide']),
            show1(){
                this.$store.commit('show');
//                this.show();
            },
            hide1(){
                this.$store.commit('hide');

//                this.hide();
            },
            alert(){
                alert(this.aaa)
            },
            abc(a){
                alert(a)
            }
        },
        mounted(){
            console.log(this.$route.path)
        }
    }
</script>