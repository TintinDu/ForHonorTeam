import { createApp } from 'vue'
import Carousel from '@/components/Carousel.vue'

export default () => {
    document.addEventListener('DOMContentLoaded', () => {
        const app1 = createApp(Carousel)
        app1.mount('#carousel')
    })
}
