import { createApp } from 'vue'
import HelloGamers from '@/components/HelloGamers.vue'

export default () => {
    document.addEventListener('DOMContentLoaded', () => {
        const app = createApp(HelloGamers)
        app.mount('#vue-app')
    })
}
