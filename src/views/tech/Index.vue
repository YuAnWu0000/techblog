<template>
  <div class="page">
    <el-row style="width: 100%;">
      <!-- 最新文章板塊 -->
      <el-col :span="24">
        <div>最新文章</div>
        <div style="display: flex; flex-direction: column; flex-wrap: wrap; justify-content: center; max-height: 400px;">
          <div v-for="article in articles" :key="article" style="width: 400px;">
            <!-- 大圖文章 -->
            <div v-if="article.number===1">
              <div class="new-big-img"></div>
              <div style="max-width: 90%;">
                <div class="article-big-title">{{article.title}}</div>
                <div>{{article.author}}/{{article.date}}</div>
                <div>{{article.number}}</div>
                <div class="article-content">
                  前幾天公司同事R遇到了forEach與async/await這對好基友的基情碰撞，卡關了許久仍不明所以，
                  於是叫上我幫忙通靈，身為通靈菜鳥的我，盯著他如下的程式碼：
                </div>
                <div>繼續閱讀...</div>
              </div>
            </div>
            <!-- 小圖文章們 -->
            <div v-else style="display: flex;">
              <div class="new-small-img"></div>
              <div style="max-width: 70%; margin-left: 10px;">
                <div class="article-title">{{article.title}}</div>
                <div>{{article.author}}</div>
                <div>{{article.date}}</div>
                <div>{{article.number}}</div>
                <div style=" margin-bottom: 50px;">繼續閱讀...</div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <!-- 拉麵評價板塊 -->
      <el-col :span="12">
        <el-row v-for="ramen in ramens" :key="ramen" style="display:flex; margin-bottom: 10px;">
          <el-col :span="6" class="else-img"></el-col>
          <el-col :span="18">
            <el-rate
              v-model="ramen.rate"
              disabled show-score
              text-color="#ff9900"
              class="rate-value">
            </el-rate>
          </el-col>
        </el-row>
      </el-col>
      <!-- 其他食記板塊 -->
      <el-col :span="12">
        <el-row v-for="article in articles" :key="article" style="display:flex; margin-bottom: 10px;">
          <el-col :span="18">
            <div class="article-title">{{article.title}}</div>
            <div>{{article.author}}</div>
            <div>{{article.date}}</div>
          </el-col>
          <el-col :span="6" class="else-img"></el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          title: "Async/Await與forEach的愛恨情仇",
          author: "Zachary",
          date: "2020-03-24",
          number: 1
        },
        {
          title: "Async/Await與forEach的愛恨情仇",
          author: "Zachary",
          date: "2020-03-24",
          number: 2
        },
        {
          title: "Async/Await與forEach的愛恨情仇",
          author: "Zachary",
          date: "2020-03-24",
          number: 3
        },
        {
          title: "Async/Await與forEach的愛恨情仇",
          author: "Zachary",
          date: "2020-03-24",
          number: 4
        },
        {
          title: "Async/Await與forEach的愛恨情仇",
          author: "Zachary",
          date: "2020-03-24",
          number: 5
        }
      ],
      ramens: [
        {
          rate: 4.2
        },
        {
          rate: 4.5
        },
        {
          rate: 4.7
        },
        {
          rate: 3.1
        },
        {
          rate: 3.8
        },
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;
  .new-big-img {
    background-image: url("../../assets/images/tech/forEachAsync/title.jpg"); /* The image used */
    background-color: #cccccc; /* Used if the image is unavailable */
    width: 340px;
    min-width: 340px;
    height: 210px; /* You must set a specified height */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }
  .new-small-img {
    background-image: url("../../assets/images/tech/forEachAsync/title.jpg"); /* The image used */
    background-color: #cccccc; /* Used if the image is unavailable */
    width: 150px;
    min-width: 150px;
    height: 150px; /* You must set a specified height */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }
  .article-big-title {
    font-size: 26px;
    font-weight: 500;
  }
  .article-title {
    font-size: 22px;
    font-weight: 500;
  }
  .article-content {
    max-width: 100%;
    max-height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
  }
  .else-img{
    background-image: url("../../assets/images/tech/forEachAsync/title.jpg"); /* The image used */
    background-color: #cccccc; /* Used if the image is unavailable */
    width: 150px;
    min-width: 150px;
    height: 150px; /* You must set a specified height */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }
}
// @media (min-width: 1500px) {
//   .page {
//     display: flex;
//     justify-content: center;
//     max-width: 1440px;
//   }
// }
</style>
