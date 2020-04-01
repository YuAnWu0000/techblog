<template>
  <!-- navbar -->
  <el-menu
    default-active="1"
    mode="horizontal"
    background-color="#175178"
    text-color="#fff"
    active-text-color="#AFC619"
    class="nav">
    <el-menu-item index="1" @click="$router.push('/')">首頁</el-menu-item>
    <el-submenu index="2">
      <template slot="title">部落格文章</template>
      <el-menu-item index="2-1" @click="$router.push('tech')">技術分享</el-menu-item>
      <el-menu-item index="2-2" @click="$router.push('food')">美食食記</el-menu-item>
      <el-menu-item index="2-3" @click="$router.push('life')">生活雜記</el-menu-item>
    </el-submenu>
    <el-menu-item index="4" @click="goToGithub">Github</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  methods: {
    goToGithub() {
      window.open('https://github.com/YuAnWu0000/techblog');
    },
  }
};
</script>

<style lang="scss" scoped>
  .nav {
    font-size: 70px;
  }
</style>
