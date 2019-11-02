<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>
    </el-menu>
    <div class="page">
      <!-- 評分卡片 -->
      <el-card shadow="hover" class="rate-card">
        <el-row type="flex" :gutter="20">
          <el-col :span="12">
            <img src="@/assets/images/food/wutenglamian/miso.jpg" class="rate-image">
          </el-col>
          <el-col :span="12">
            <div v-for="item in rate" :key="item.title">
              <el-row class="rate-title">{{item.title}}:
                <el-rate
                  v-model="item.value"
                  disabled show-score
                  text-color="#ff9900"
                  class="rate-value">
                </el-rate>
              </el-row>
              <el-row class="rate-content">{{item.content}}</el-row>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rate: [
        {
          title: '湯',
          value: 3.5,
          content: '順口無負擔，基本上可以把湯喝完沒問題，對於喜歡清淡口味的人是一大福音',
        },
        {
          title: '麵',
          value: 4.2,
          content: '麵的硬度對喜歡硬麵的朋友很友善，麵體厚實',
        },
        {
          title: '叉燒',
          value: 3,
          content: '感覺烹飪時間略久，導致叉燒肥的部分好吃但瘦肉部分有太老的情況',
        },
        {
          title: '糖心蛋',
          value: 1,
          content: '很少吃到雷的糖心蛋，但這家卻做了最好的示範：蛋本身沒入味且熟度逼近水煮蛋',
        },
        {
          title: '配菜',
          value: 2,
          content: '無特色豆芽菜，應該是只有鐵板燒老闆跟小當家裡面的雷恩有辦法駕馭的蔬菜',
        },
        {
          title: 'CP值',
          value: 4,
          content: '這碗拉麵是190(糖心蛋額外加30)，算是很經濟實惠，但不推薦加點糖心蛋',
        },
        {
          title: '整體評分',
          value: 3.5,
          content: '扣除蛋及配菜不看，算是一碗中上的拉麵，而且價格相當親民，其實在經濟拮据的時候還算小推薦',
        },
      ],
    };
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
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

  @media (min-width: 1500px) {
    .page {
      display: flex;
      justify-content: center;
    }
    .rate-card {
      max-width: 1440px;
    }
  }
</style>
