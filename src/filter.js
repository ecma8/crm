import Vue from 'vue'
Vue.filter('time', function(value) {
  	if (!value) { return ''}
  	let oDate = new Date(value*1000);
	return oDate.getFullYear()+'-'+(oDate.getMonth()+1)+'-'+oDate.getDate()+' '+oDate.getHours()+':'+oDate.getMinutes()+':'+oDate.getSeconds();;
});