<template>
  <div>
    <el-row class="page">
      <!-- 側邊欄 -->
      <!-- <el-col :span="8">
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
      </el-col> -->
      <el-col :span="24">
        <RateCard :ramenId="ramenId"></RateCard>
        <div class="pagination">
          <div ref="prev" @click="toPrevRamen" class="to-prev-or-next">
            <i class="fas fa-arrow-left"></i>
            prev
          </div>
          <div ref="next" @click="toNextRamen" class="to-prev-or-next">
            next
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RateCard from './components/RateCard.vue';

export default {
  components: {
    RateCard,
  },
  data() {
    return {
      ramenId: 1,
    };
  },
  async mounted() {
    if (this.ramenId <= 1) {
      console.log(this.$refs.prev);
      this.$refs.prev.classList.add("disable");
    }
    if (this.ramenId >= 8) {
      this.$refs.next.classList.add("disable");
    }
  },
  methods: {
    toPrevRamen() {
      console.log(this.ramenId);
      if (this.ramenId > 1) {
        this.ramenId--;
      }
    },
    toNextRamen() {
      console.log(this.ramenId);
      if (this.ramenId < 8) {
        this.ramenId++;
      }
    },
  },
  watch: {
    ramenId: function() {
      if (this.ramenId <= 1) {
        this.$refs.prev.classList.add("disable");
      } else if (this.ramenId >= 8) {
        this.$refs.next.classList.add("disable");
      } else {
        this.$refs.prev.classList.remove("disable");
        this.$refs.next.classList.remove("disable");
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .pagination {
    display: flex;
    justify-content: space-between;
  }
  .to-prev-or-next {
    font-size: 20px;
    cursor: pointer;
    text-align: center;
  }
  .disable {
    font-weight: 300;
    color: gray;
    cursor: not-allowed;
  }
  @media (min-width: 1500px) {
    .page {
      display: flex;
      justify-content: center;
      max-width: 1440px;
    }
  }
</style>
