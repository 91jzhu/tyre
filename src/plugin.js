import Toast from './toast'

let currentToast

export default {
    install(Vue) {
        Vue.prototype.$toast = function (message, toastOptions = undefined) {
            if(currentToast){
                currentToast.close()
            }
            currentToast=createToast({Vue,message, propsData: toastOptions})
        }
    }
}

function createToast({Vue,message, propsData}) {
    let constructor = Vue.extend(Toast)
    let toast = new constructor({propsData})
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}