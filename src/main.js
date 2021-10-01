import { createApp } from 'vue'
import router from '@/route'
import App from './App.vue'
let vue = createApp(App)



vue.directive('randomColor', {
    mounted(el, binding) {
        let count = 0
        console.log("binding", binding.value)
        setInterval(() => {
            if (count < binding.value.length) {
                el.style.color = binding.value[count]
                count++
            }
            else {
                count = 0
            }
        }, 1000);

    }
})

vue.use(router)
vue.mount('#app')


