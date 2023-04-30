import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import axios from 'axios'
import './base.css'
import './my-styles.scss'
const app = createApp(App)

app.use(router)

axios.defaults.baseURL = 'https://apipc-xiaotuxian-front.itheima.net/'
app.config.globalProperties.$http = axios
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)

// app.directive('load', function (el) {
// el.classList.add('loading')
// })
// 自定义全局指令
app.directive('load', {
  
  mounted(el, binding) {
    // console.log(binding.value)
    if (binding.value===false) { 
      el.classList.add('loading')
      console.log(binding.value);
    }

  },
    updated(el,binding) {
    // 元素更新时执行的逻辑
      if (binding.value === true) { 
        el.classList.remove('loading')
        console.log(binding.value);
      }
  },
})
app.mount('#app')
