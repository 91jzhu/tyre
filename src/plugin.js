import Toast from './toast'

let currentToast

export default {
    install(Vue) {
        Vue.prototype.$toast = function (message, toastOptions = undefined) {
            if(currentToast){
                currentToast.close()
            }
            currentToast=createToast({Vue,message, propsData: toastOptions,onClose:()=>{currentToast=null}})
        }
    }
}

function createToast({Vue,message, propsData,onClose}) {
    let constructor = Vue.extend(Toast)
    let toast = new constructor({propsData})
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close',onClose)
    document.body.appendChild(toast.$el)
    return toast
}