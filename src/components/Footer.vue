<template>
<!-- footer -->
  <el-row class="footer">
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
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
  .footer {
    border-radius: 5px;
    background-color: #175178;
    padding: 20px;
    color: #ffffff;
    text-align: center;
    margin-top: 10px;
  }
</style>