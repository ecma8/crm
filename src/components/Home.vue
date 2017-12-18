<template>
	<div id="warp">
		<div class="nav-left">
			<div class="logo">
				<img src="../assets/img/logo.svg" alt="">
			</div>
			<public-nav></public-nav>
		</div>
		<div class="nav-inner">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
import Nav from '../components/Public/Nav.vue'

export default {
    components: {
        'public-nav': Nav
    },
	data(){
        return {

		}
	},
    computed:{

    },
    methods:{

    },
	mounted(){

 	}
}
</script>
<style>
	@import '../assets/css/crm.css';
</style>
