<template>
  <div class="home">
    <!-- navbar -->
    <el-menu
      default-active="1"
      mode="horizontal"
      background-color="#175178"
      text-color="#fff"
      active-text-color="#AFC619"
      class="home-nav">
      <el-menu-item index="1">首頁</el-menu-item>
      <el-submenu index="2">
        <template slot="title">部落格文章</template>
        <el-menu-item index="2-1" @click="$router.push('tech')">技術分享</el-menu-item>
        <el-menu-item index="2-2" @click="$router.push('food')">美食食記</el-menu-item>
        <el-menu-item index="2-3" @click="$router.push('life')">生活雜記</el-menu-item>
      </el-submenu>
      <el-menu-item index="4" @click="goToGithub">Github</el-menu-item>
    </el-menu>
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
    <!-- footer -->
    <el-row class="home-footer">
      <el-col :span="8">
        <div>Zachary's Blog 隨筆小窩</div>
        <div>若需轉載 請註明出處</div>
      </el-col>
      <el-col :span="8">
       <div><i class="fas fa-user-circle"></i> About Me</div>
       <div><i class="fab fa-accessible-icon"></i> 一隻全端社畜 每天做著退休的白日夢</div>
       <div><i class="fas fa-cat"></i> 最大的願望是下輩子能成為一隻貓</div>
       <div><i class="fas fa-money-bill-wave"></i> 最好是有錢人家養的那種</div>
      </el-col>
      <el-col :span="8">
        <div>
          <i class="el-icon-location"></i>
          為什麼(區)要告訴你(路)我家(段)住哪(樓)?
        </div>
        <div>
          <i class="el-icon-phone-outline"></i>
          +886 0987877987
        </div>
        <div>
          <i class="el-icon-s-promotion"></i>
          emailNotFound@gmail.com
        </div>
      </el-col>
    </el-row>
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
    goToGithub() {
      window.open('https://github.com/YuAnWu0000/techblog');
    },
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
  .home-nav {
    font-size: 50px;
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
  .home-footer {
    border-radius: 5px;
    background-color: #175178;
    padding: 20px;
    color: #ffffff;
  }
</style>
