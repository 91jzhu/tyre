import Toast from './toast'

export default {
    install(Vue) {
        Vue.prototype.$toast = function (message, toastOptions = undefined) {
            let constructor = Vue.extend(Toast)
            let toast = new constructor({
                propsData: toastOptions
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}