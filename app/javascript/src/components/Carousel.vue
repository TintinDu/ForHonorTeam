<template>
  <carousel :items-to-show="1">
    <slide v-for="image in images" :key="image.id">
      <img src="getImage(image.url)" />
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      images: [{id: 1,url:'@/assets/images/forhonor1.jpg'}, {id: 2,url:'@/assets/images/forhonor2.jpg'}]
    }
  },
  methods: {
  getImage(imagePath) {
    return require(imagePath);
  }
}

};
</script>

<style lang="scss">

#carousel {
  height: 100vh;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  // background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

}

.carousel__slide {
  padding: 10px;
  background-position: 'center';
  background-size: 'cover';
  background-repeat: 'no-repeat'
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
