<template>
	<div>
		<div v-for="(item,index) in list">
			<h5 @click="num=index" :class="{color:num==index}">{{item.title}}</h5>
			<ul v-show="num==index">
				<li v-for="(items,indexs) in item.routerList">
					{{items.name}}
				</li>
			</ul>
		</div>
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
                                router:'page_1'
                            },
                            {
                                name:'沟通统计',
                                router:'page_2'
                            },
                            {
                                name:'业绩统计',
                                router:'page_3'
                            }
                        ]
                    },
					{
                        title:'统计分组织架构析',
                        routerList:[
                            {
                                name:'部门管理',
                                router:'page_2'
                            },
                            {
                                name:'员工管理',
                                router:'page_3'
                            }
                        ]
                    },
                    {
                        title:'CRM 日志',
                        routerList:[
                            {
                                name:'登录日志',
                                router:'page_2'
                            },
                            {
                                name:'管理日志',
                                router:'page_3'
                            }
                        ]
                    }
                ]
			}
		}
	}
</script>
<style scoped="">
	.color{
		background: #0a1534;
	}
</style>