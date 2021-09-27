import Vue from "vue";
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'

Vue.component('t-button',Button)
Vue.component('t-icon',Icon)
Vue.component('t-button-group',ButtonGroup)

new Vue({
    el: "#app",
    data:{
        loading1:false,
        loading2:false,
        loading3:false
    }
})