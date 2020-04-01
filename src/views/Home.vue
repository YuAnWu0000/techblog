<template>
  <div class="home">
    <div class="home-content">
      <div class="home-title">Zachary's Blog 隨筆小窩</div>
      <div class="home-desciption">
        <div>這個Blog被創立的大部分原因是我那不堪的記憶力...</div>
        <div>剩下的其他原因我忘了:(</div>
      </div>
      <div class="home-carousel-title">分類：
        <span style="color: #9A7237;">{{carouselTitle}}</span>
      </div>
      <el-carousel indicator-position="outside" type="card" height="500px" @change="handleCarousel">
        <el-carousel-item v-for="item in carousel" :key="item.name">
          <img :src="item.src" @click="$router.push(item.href)" style="width: 768px;">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data() {
    return {
      carousel: [
        {
          // eslint-disable-next-line
          src: require('../assets/images/home/hacker.png'),
          href: 'tech',
          title: '技術分享',
        },
        {
          // eslint-disable-next-line
          src: require('../assets/images/home/food.png'),
          href: 'food',
          title: '美食食記',
        },
        {
          // eslint-disable-next-line
          src: require('../assets/images/home/life.png'),
          href: 'life',
          title: '生活雜記',
        },
      ],
      carouselTitle: '技術分享',
    };
  },
  methods: {
    handleCarousel(index) {
      this.carouselTitle = this.carousel[index].title;
    },
  },
};
</script>

<style lang="scss" scoped>
  .home {
    text-align: center;
  }
  .home-content {
    background-color: rgba(216, 232, 231, 0.1);
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 30px;
    padding-bottom: 10px;
  }
  .home-title {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .home-desciption {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.4);
    margin-bottom: 70px;
  }
  .home-carousel-title {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 5px;
  }
</style>
