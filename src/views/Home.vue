<template>
  <div class="home">
    <!-- 導航列 -->
    <el-menu
      default-active="1"
      mode="horizontal"
      background-color="#175178"
      text-color="#fff"
      active-text-color="#AFC619">
      <el-menu-item index="1">首頁</el-menu-item>
      <el-submenu index="2">
        <template slot="title">部落格文章</template>
        <el-menu-item index="2-1" @click="$router.push('tech')">技術分享</el-menu-item>
        <el-menu-item index="2-2" @click="$router.push('food')">美食食記</el-menu-item>
        <el-menu-item index="2-3" @click="$router.push('life')">生活隨筆</el-menu-item>
      </el-submenu>
      <el-menu-item index="4" @click="goToGithub">Github</el-menu-item>
    </el-menu>

    <h1>Zachary's Blog 札克瑞的隨筆</h1>
    <el-carousel indicator-position="outside" type="card" height="500px" @change="handleCarousel">
      <el-carousel-item v-for="item in carousel" :key="item.name">
        <img :src="item.src" @click="$router.push(item.href)" style="width: 768px;">
      </el-carousel-item>
    </el-carousel>
    <h2>{{carouselTitle}}</h2>

    <!-- footer -->
    <el-row style="background-color: #175178; padding: 20px; color: #ffffff;">
      <el-col :span="8">
        <div>Zachary's Blog 札克瑞的隨筆</div>
        <div>若需轉載 請註明出處</div>
      </el-col>
      <el-col :span="8">
       <div>About Me</div>
       <div>一隻全端社畜 每天做著退休的白日夢</div>
       <div>最大的願望是下輩子能成為一隻貓</div>
       <div>最好是有錢人家養的那種</div>
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
          src: require('../assets/images/home/hacker.png'),
          href: 'tech',
          title: '技術分享'
        },
        {
          src: require('../assets/images/home/food.png'),
          href: 'food',
          title: '美食食記',
        },
        {
          src: require('../assets/images/home/life.png'),
          href: 'life',
          title: '生活隨筆',
        }
      ],
      carouselTitle: '技術分享',
    }
  },
  methods: {
    goToGithub() {
      window.open('https://github.com/YuAnWu0000')
    },
    handleCarousel(index) {
      this.carouselTitle = this.carousel[index].title
    }
  }
  
};
</script>
