// #region
// Engine
import { createApp } from 'vue'

// CSS
import "./assets/css/reset.css"
import './assets/css/style.css'

// Root component
import App from './App.vue'

// Router
import router from "./router"
// #endregion


createApp(App)
  .use(router)
  .mount('#app')
