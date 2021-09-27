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

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect=chai.expect
{
    const Constructor=Vue.extend(Button)
    const vm=new Constructor({
        propsData:{
            icon:"good"
        }
    })
    vm.$mount()
    let useElement=vm.$el.querySelector('use')
    expect(useElement.getAttribute("xlink:href")).to.eq('#i-good')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor=Vue.extend(Button)
    const vm=new Constructor({
        propsData:{
            icon:"setting",
            loading:true
        }
    }).$mount()
    let useElement=vm.$el.querySelector('use')
    expect(useElement.getAttribute("xlink:href")).to.eq('#i-loading')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const Constructor=Vue.extend(Button)
    const vm=new Constructor({
        propsData:{
            icon:"setting"
        }
    })
    vm.$mount(div)
    let svg=vm.$el.querySelector('svg')
    let order=window.getComputedStyle(svg).order
    expect(order).to.eq("-1")
    vm.$el.remove()
    vm.$destroy()
}
{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const Constructor=Vue.extend(Button)
    const vm=new Constructor({
        propsData:{
            icon:"setting",
            iconPosition:"right"
        }
    })
    vm.$mount(div)
    let svg=vm.$el.querySelector('svg')
    let order=window.getComputedStyle(svg).order
    expect(order).to.eq("2")
    vm.$el.remove()
    vm.$destroy()
}
{
    // mock
    const div=document.createElement('div')
    document.body.appendChild(div)
    const Constructor=Vue.extend(Button)
    const vm=new Constructor({
        propsData:{
            icon:"setting",
            iconPosition:"right"
        }
    })
    vm.$mount(div)
    let spy=chai.spy(function(){})
    vm.$on('click',spy)
    let button=vm.$el
    button.click()
    expect(spy).to.have.been.called()
    vm.$el.remove()
    vm.$destroy()
}