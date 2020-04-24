<template>
  <div>
    <el-row class="page">
      <el-col :span="8">
        <!-- 側邊欄 -->
        <el-menu
          default-active="2"
          :collapse="false"
          :default-openeds="[1-4-1]"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>拉麵</span>
            </template>
            <el-menu-item-group>
              <template slot="title">醬油</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">豚骨</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">雞白湯</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">生魚片</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">其他</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="16">
        <RateCard></RateCard>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RateCard from './components/RateCard.vue';
import { getRamenRate } from '@/api/ramen';

export default {
  components: {
    RateCard,
  },
  async mounted() {
    const result = await getRamenRate();
    console.log(result);
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @media (min-width: 1500px) {
    .page {
      display: flex;
      justify-content: center;
      max-width: 1440px;
    }
  }
</style>
