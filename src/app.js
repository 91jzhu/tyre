import Vue from "vue";
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from "./col"

Vue.component('t-button',Button)
Vue.component('t-icon',Icon)
Vue.component('t-button-group',ButtonGroup)
Vue.component('t-input',Input)
Vue.component('t-row',Row)
Vue.component('t-col',Col)

new Vue({
    el: "#app",
    data:{
        message:"hi",
        loading1:false,
        loading2:false,
        loading3:false
    },
    methods:{
        inputChange(e){
            console.log(e.target.value)
        }
    }
})


