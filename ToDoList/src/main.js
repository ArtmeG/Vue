import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import vFocus from './directives/FocusDerective.js'
import router from "@/routers/router.js";



createApp(App)
    .use(router)
    .directive('focus', vFocus)
    .mount('#app')


