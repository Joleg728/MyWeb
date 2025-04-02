import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


createApp(App).use(store).use(router).mount('#app')
// createApp(App).mount('#app')

// const app = createApp({
//     data() {
//         return {
//             itmes: [
//                 {a: "aaa"}
//             ]
//         }
//     }

// })

// // app.use(PrimeVue)
// // app.use(DialogService)
// app.mount("#blocksCont")