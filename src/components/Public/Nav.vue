<template>
	<div class="nav-list">
		<!--<div v-for="(item,index) in list">-->
			<!--<h5 @click="num=index">{{item.title}}</h5>-->
			<!--<ul>-->
				<!--<li v-for="(items,indexs) in item.routerList">-->
					<!--<router-link :to="{name:items.router}">-->
						<!--{{items.name}}-->
					<!--</router-link>-->
				<!--</li>-->
			<!--</ul>-->
		<!--</div>-->
		<ul>
			<li v-for="(item,index) in 10">
				<router-link :to="{name:'page_'+(index+1)}">{{index}}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
	    data(){
	        return {
	            num:0,
                list:[
                    {
                        title:'客户管理',
						routerList:[
							{
							    name:'我的客户（50/500）',
								router:'page_1'
							},
                            {
                                name:'团队客户',
                                router:'page_2'
                            },
                            {
                                name:'公共客户',
                                router:'page_3'
                            }
						]
                    },
                    {
                        title:'统计分析',
                        routerList:[
                            {
                                name:'客户统计',
                                router:'page_4'
                            },
                            {
                                name:'沟通统计',
                                router:'page_5'
                            },
                            {
                                name:'业绩统计',
                                router:'page_6'
                            }
                        ]
                    },
					{
                        title:'统计分组织架构析',
                        routerList:[
                            {
                                name:'部门管理',
                                router:'page_7'
                            },
                            {
                                name:'员工管理',
                                router:'page_8'
                            }
                        ]
                    },
                    {
                        title:'CRM 日志',
                        routerList:[
                            {
                                name:'登录日志',
                                router:'page_9'
                            },
                            {
                                name:'管理日志',
                                router:'page_10'
                            }
                        ]
                    }
                ]
			}
		}
	}
</script>
<style scoped="">
	.router-link-exact-active.router-link-active{
		background: #4c99ff;
		color: #fff;
	}
</style>