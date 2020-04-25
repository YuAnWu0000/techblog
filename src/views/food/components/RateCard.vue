<template>
  <!-- 評分卡片 -->
  <el-card shadow="hover" class="rate-card">
    <el-row type="flex" :gutter="20">
      <el-col :span="12">
        <img :src="ramen.imgSrc1" class="rate-image">
      </el-col>
      <el-col :span="12">
        <div>店家：{{ramen.restaurant}}</div>
        <div>品名：{{ramen.name}}</div>
        <!-- 湯 -->
        <div v-if="ramen.soupRate">
          <el-row class="rate-title">湯:
            <el-rate
              v-model="ramen.soupRate"
              disabled show-score
              text-color="#ff9900"
              class="rate-value">
            </el-rate>
          </el-row>
          <el-row class="rate-content">{{ramen.soupFeedback}}</el-row>
        </div>
        <!-- 麵 -->
        <div v-if="ramen.noodleRate">
          <el-row class="rate-title">麵:
            <el-rate
              v-model="ramen.noodleRate"
              disabled show-score
              text-color="#ff9900"
              class="rate-value">
            </el-rate>
          </el-row>
          <el-row class="rate-content">{{ramen.noodleFeedback}}</el-row>
        </div>
        <!-- 豬叉燒 -->
        <div v-if="ramen.BBQPorkRate">
          <el-row class="rate-title">豬叉燒:
            <el-rate
              v-model="ramen.BBQPorkRate"
              disabled show-score
              text-color="#ff9900"
              class="rate-value">
            </el-rate>
          </el-row>
          <el-row class="rate-content">{{ramen.BBQPorkFeedback}}</el-row>
        </div>
        <!-- 雞叉燒 -->
        <div v-if="ramen.BBQChickenRate">
          <el-row class="rate-title">雞叉燒:
            <el-rate
              v-model="ramen.BBQChickenRate"
              disabled show-score
              text-color="#ff9900"
              class="rate-value">
            </el-rate>
          </el-row>
          <el-row class="rate-content">{{ramen.BBQChickenFeedback}}</el-row>
        </div>
        <!-- 溏心蛋 -->
        <div v-if="ramen.eggRate">
          <el-row class="rate-title">溏心蛋:
            <el-rate
              v-model="ramen.eggRate"
              disabled show-score
              text-color="#ff9900"
              class="rate-value">
            </el-rate>
          </el-row>
          <el-row class="rate-content">{{ramen.eggFeedback}}</el-row>
        </div>
        <!-- 配菜 -->
        <div v-if="ramen.sideDishesRate">
          <el-row class="rate-title">配菜:
            <el-rate
              v-model="ramen.sideDishesRate"
              disabled show-score
              text-color="#ff9900"
              class="rate-value">
            </el-rate>
          </el-row>
          <el-row class="rate-content">{{ramen.sideDishesFeedback}}</el-row>
        </div>
        <!-- cp值 -->
        <div v-if="ramen.cpValueRate">
          <el-row class="rate-title">cp值:
            <el-rate
              v-model="ramen.cpValueRate"
              disabled show-score
              text-color="#ff9900"
              class="rate-value">
            </el-rate>
          </el-row>
          <el-row class="rate-content">{{ramen.cpValueFeedback}}</el-row>
        </div>
        <!-- 叉燒飯 -->
        <div v-if="ramen.BBQPorkRiceRate">
          <el-row class="rate-title">叉燒飯:
            <el-rate
              v-model="ramen.BBQPorkRiceRate"
              disabled show-score
              text-color="#ff9900"
              class="rate-value">
            </el-rate>
          </el-row>
          <el-row class="rate-content">{{ramen.BBQPorkRiceFeedback}}</el-row>
        </div>
        <!-- 綜合評分 -->
        <div v-if="ramen.overallRate">
          <el-row class="rate-title">綜合評分:
            <el-rate
              v-model="ramen.overallRate"
              disabled show-score
              text-color="#ff9900"
              class="rate-value">
            </el-rate>
          </el-row>
          <el-row class="rate-content">{{ramen.overallFeedback}}</el-row>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
import { getRamenById } from '@/api/ramen';

export default {
  props: ['ramenId'],
  data() {
    return {
      ramen: {},
    };
  },
  async created() {
    this.ramen = await getRamenById(this.ramenId);
    this.ramen.imgSrc1 = require('@/assets/images/food/' + this.ramen.imgSrc1);
    this.ramen.imgSrc2 = require('@/assets/images/food/' + this.ramen.imgSrc2);
    this.ramen.imgSrc3 = require('@/assets/images/food/' + this.ramen.imgSrc3);
    this.ramen.imgSrc4 = require('@/assets/images/food/' + this.ramen.imgSrc4);
    this.ramen.imgSrc5 = require('@/assets/images/food/' + this.ramen.imgSrc5);
    console.log(this.ramen);
  },
  watch: {
    ramenId: async function() {
      this.ramen = await getRamenById(this.ramenId);
      this.ramen.imgSrc1 = require('@/assets/images/food/' + this.ramen.imgSrc1);
      this.ramen.imgSrc2 = require('@/assets/images/food/' + this.ramen.imgSrc2);
      this.ramen.imgSrc3 = require('@/assets/images/food/' + this.ramen.imgSrc3);
      this.ramen.imgSrc4 = require('@/assets/images/food/' + this.ramen.imgSrc4);
      this.ramen.imgSrc5 = require('@/assets/images/food/' + this.ramen.imgSrc5);
    }
  }
}
</script>
<style lang="scss" scoped>
  .rate-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  .rate-title {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  .rate-value {
    margin-left: 5px;
  }
  .rate-content {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 15px;
  }
</style>