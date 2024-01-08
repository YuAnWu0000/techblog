<template>
  <div class="page">
    <div class="article">
      <div class="title">
        <div>
          你真的懂var, let, const嗎?
        </div>
        <div class="mt-20">
          <img :src="`${cdn}/tech/forEachAsync/title.jpg`" style="width: 50%;" />
        </div>
      </div>
      <div class="content">
        <div class="p-title">
          「最近正在如火如荼地準備面試, 突然滑到一篇stackoverflow關於let, const是否提升的討論:
          https://stackoverflow.com/questions/31219420/are-variables-declared-with-let-or-const-hoisted」
        </div>
        <div class="p">
          這是一個相當有趣的問題, 甚至可以說是有點"爭議", 我曾經以為我懂了let跟const的特性,
          並且認為它們沒有所謂的hoisting, 但當我深入研究之後, 現在覺得這種說法有點不"精確",
          為什麼呢? 在開始之前, 先讓我們複習一下var, let, const的基本區別吧!
        </div>
        <div class="p-title">var</div>
        <div class="p">作用於Function Scope</div>
        <div class="p">
          在全域宣告的變數var, 也會同時作為全域物件(前端為window, 後端為global)的屬性
        </div>
        <myPrism class="p">
          <code class="language-javascript">var a = 0; console.log(window.a); // 0 </code>
        </myPrism>
        <div class="p">
          可重複宣告, 以後宣告的為主。(指的是在同一個作用域底下)
        </div>
        <myPrism class="p">
          <pre class="line-numbers">
          <code class="language-javascript">var a = 0;
            var a = 1;
            console.log(window.a); // 1</code>
        </pre>
        </myPrism>
        <div class="p">
          不同作用域的情況, 在function裡面宣告的就只存在於該function scope
        </div>
        <myPrism class="p">
          <pre class="line-numbers">
          <code class="language-javascript">var a = 0;
            function test() {
                var a = 1;
                console.log(a);
            }
            test(); // 1
            console.log(a); // 0</code>
        </pre>
        </myPrism>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cdn: process.env.VUE_APP_CDN_PATH,
      showAns: false,
    };
  },
  mounted() {
    console.log(this.cdn);
  },
};
</script>
<style lang="scss" scoped>
$title-font-size: 40px;
$p-title-font-size: 25px;
$p-font-size: 22px;
$code-font-size: 16px;
// 改寫prism code snippet的style
pre[class*='language-'] {
  padding: 0 !important;
  font-size: $code-font-size;
}
.flex {
  display: flex;
  justify-content: center;
}
.text-center {
  text-align: center;
}
.mt-20 {
  margin-top: 20px;
}
.strong {
  font-size: 400;
}
.page {
  display: flex;
  justify-content: center;

  .article {
    width: 70%;

    .title {
      font-size: $title-font-size;
      text-align: center;
    }
    .content {
      .p-title {
        font-style: italic;
        font-size: $p-title-font-size;
        background-color: rgba(0, 0, 0, 0.05);
        text-align: center;
        margin-top: 20px;
        padding: 10px;
      }
      .p {
        font-size: $p-font-size;
        line-height: 35px;
        letter-spacing: 1px;
        font-weight: 300;
        margin-top: 20px;
      }
      .show-ans {
        font-weight: 500;
        cursor: pointer;
        &:hover {
          color: blue;
        }
      }
    }
  }
}
</style>
