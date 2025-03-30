// import { createApp } from 'vue';
// import App from '../vue/App.vue'
// import "../css/index.css"

// const { createApp, h } = Vue

// const app = createApp({})
// 
// createApp(App).mount("#app")

const { createApp, ref } = Vue

createApp({
setup() {
    const message = ref('Hello vue!')
    return {
    message
    }
}
}).mount('#app')

// var myModel = {
//     name: "Ashley",
//     age: 24
//   };
  
//   var myViewModel = new Vue({
//     el: '#my_view',
//     data: myModel
//   });

// let app = new Vue ({
//     el: "#app",
//     data: {
//         message: "AAAAA"
//     }
// })

// import { createApp, ref } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

//   createApp({
//     setup() {
//       const message = ref('Привет Vue!')
//       return {
//         message
//       }
//     }
//   }).mount('#app')