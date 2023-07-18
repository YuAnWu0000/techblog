<template>
  <el-card shadow="hover" class="rate-card">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="20" :md="12" :lg="12" :xl="12">
        <el-carousel :interval="50000" height="700px">
          <el-carousel-item v-for="(ramenImg, index) in ramenImgs" :key="index">
            <div class="rate-img" :style="{ backgroundImage: 'url(' + ramenImg + ')' }"></div>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="rate-title">店家：{{ ramen.restaurant }}</div>
        <div class="rate-title" style="margin-bottom: 10px;">品名：{{ ramen.name }}</div>
        <!-- 湯 -->
        <div v-if="ramen.soupRate">
          <el-row class="rate-title"
            >湯:
            <el-rate
              v-model="ramen.soupRate"
              disabled
              show-score
              text-color="#ff9900"
              class="rate-value"
            >
            </el-rate>
          </el-row>
          <el-row class="rate-content">{{ ramen.soupFeedback }}</el-row>
        </div>
        <!-- 麵 -->
        <div v-if="ramen.noodleRate">
          <el-row class="rate-title"
            >麵:
            <el-rate
              v-model="ramen.noodleRate"
              disabled
              show-score
              text-color="#ff9900"
              class="rate-value"
            >
            </el-rate>
          </el-row>
          <el-row class="rate-content">{{ ramen.noodleFeedback }}</el-row>
        </div>
        <!-- 豬叉燒 -->
        <div v-if="ramen.BBQPorkRate">
          <el-row class="rate-title"
            >豬叉燒:
            <el-rate
              v-model="ramen.BBQPorkRate"
              disabled
              show-score
              text-color="#ff9900"
              class="rate-value"
            >
            </el-rate>
          </el-row>
          <el-row class="rate-content">{{ ramen.BBQPorkFeedback }}</el-row>
        </div>
        <!-- 雞叉燒 -->
        <div v-if="ramen.BBQChickenRate">
          <el-row class="rate-title"
            >雞叉燒:
            <el-rate
              v-model="ramen.BBQChickenRate"
              disabled
              show-score
              text-color="#ff9900"
              class="rate-value"
            >
            </el-rate>
          </el-row>
          <el-row class="rate-content">{{ ramen.BBQChickenFeedback }}</el-row>
        </div>
        <!-- 溏心蛋 -->
        <div v-if="ramen.eggRate">
          <el-row class="rate-title"
            >溏心蛋:
            <el-rate
              v-model="ramen.eggRate"
              disabled
              show-score
              text-color="#ff9900"
              class="rate-value"
            >
            </el-rate>
          </el-row>
          <el-row class="rate-content">{{ ramen.eggFeedback }}</el-row>
        </div>
        <!-- 配菜 -->
        <div v-if="ramen.sideDishesRate">
          <el-row class="rate-title"
            >配菜:
            <el-rate
              v-model="ramen.sideDishesRate"
              disabled
              show-score
              text-color="#ff9900"
              class="rate-value"
            >
            </el-rate>
          </el-row>
          <el-row class="rate-content">{{ ramen.sideDishesFeedback }}</el-row>
        </div>
        <!-- cp值 -->
        <div v-if="ramen.cpValueRate">
          <el-row class="rate-title"
            >cp值:
            <el-rate
              v-model="ramen.cpValueRate"
              disabled
              show-score
              text-color="#ff9900"
              class="rate-value"
            >
            </el-rate>
          </el-row>
          <el-row class="rate-content">{{ ramen.cpValueFeedback }}</el-row>
        </div>
        <!-- 叉燒飯 -->
        <div v-if="ramen.BBQPorkRiceRate">
          <el-row class="rate-title"
            >叉燒飯:
            <el-rate
              v-model="ramen.BBQPorkRiceRate"
              disabled
              show-score
              text-color="#ff9900"
              class="rate-value"
            >
            </el-rate>
          </el-row>
          <el-row class="rate-content">{{ ramen.BBQPorkRiceFeedback }}</el-row>
        </div>
        <!-- 綜合評分 -->
        <div v-if="ramen.overallRate">
          <el-row class="rate-title"
            >綜合評分:
            <el-rate
              v-model="ramen.overallRate"
              disabled
              show-score
              text-color="#ff9900"
              class="rate-value"
            >
            </el-rate>
          </el-row>
          <el-row class="rate-content">{{ ramen.overallFeedback }}</el-row>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>
<script>
import { getRamenRateById } from '@/api/ramenRate';

export default {
  props: ['ramenId'],
  data() {
    return {
      ramen: {},
      ramenImgs: [],
    };
  },
  created() {
    this.setRamenRateAndImg();
  },
  methods: {
    async setRamenRateAndImg() {
      this.ramen = await getRamenRateById(this.ramenId);
      for(let i=1; i<=5; i++) {
        let tmpSrc = this.ramen[`imgSrc${i}`];
        console.log(tmpSrc);
        if (tmpSrc)
          this.ramenImgs.push(`${process.env.VUE_APP_CDN_PATH}/food/${tmpSrc}`);
      }
    },
  },
  watch: {
    ramenId: function() {
      this.ramenImgs = [];
      this.setRamenRateAndImg();
    },
  },
};
</script>
<style lang="scss" scoped>
.rate-img {
  background-color: #cccccc; /* Used if the image is unavailable */
  min-width: 500px;
  max-width: 700px;
  height: 700px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
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
