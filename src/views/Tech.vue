<template>
<div class="page">
  <div class="article">
    <div class="title">
      <div>
        Async/Await 到底是不是戰犯
      </div>
      <div class="mt-20">
        <img src="@/assets/images/tech/forEachAsync/title.jpg" style="width: 50%;">
      </div>
    </div>
    <div class="content">
      <div class="p-title">
        「ㄟ~Zachary~~你可以過來幫我通靈一下嗎？」
      </div>
      <div class="p">
        前幾天公司同事R遇到了forEach與async/await這對好基友的基情碰撞，卡關了許久仍不明所以，
        於是叫上我幫忙通靈，身為通靈菜鳥的我，盯著他如下的程式碼：
      </div>
      <div class="p">
        <pre class="line-numbers">
          <code class="language-javascript">var basket = [
            {
              name: 'apple',
              number: 1
            },
            {
              name: 'banana',
              number: 2
            },
            {
              name: 'mango',
              number: 3
            }
          ];

          async function buyEachOne() { // 希望拿到每種水果+1的結果
            basket.forEach(async (item) => {
              const newNumber = await shopping(item.number);
              item.number = newNumber;
            });
            /* for (let item of basket) {
              const newNumber = await shopping(item.number);
              item.number = newNumber;
            } */
            console.log(basket);
          }

          function shopping(number) {
            return new Promise((resolve, reject) => {
              setTimeout(function() {
                resolve(number + 1);
              }, 2000);
            });
          }

          buyEachOne();</code>
        </pre>
      </div>
      <div class="p">
        我將概念梳理了一下，流程簡化為菜籃中有若干種水果，我想為每樣水果都多添購一顆，
        每次購買須花費兩秒的時間，購買完成後將菜籃中所有水果的新數量打印出來。
      </div>
      <div class="p">
        好的！回到問題...
      </div>
      <div class="p-title">
        「到底為什麼console出來是下面這樣啊！」R一臉懊惱的抱著頭嘶吼
      </div>
      <div class="text-center mt-20">
        <img src="@/assets/images/tech/forEachAsync/1.jpg" style="width: 50%;">
      </div>
      <div class="p">
        「而且...點了一下箭頭...」
      </div>
      <div class="flex mt-20" style="padding-left: 10%; padding-right: 10%">
        <img src="@/assets/images/tech/forEachAsync/2.jpg" style="width: 35%;">
        <div class="p">
          「你看！我要的值又長出來啦！是怎樣，為什麼這世界這麼複雜啊啊啊？」
          見他已經開始歇斯底里，同樣也深感困惑的我開始在網路上找尋相關資料，
          發現會造成這種現象其實可以歸咎於兩個原因，也就是說，造成R同事崩潰的犯人，有兩位！
          <p style="font-size: 40px; font-weight: 400;">Chrome, Async/Await</p>
          就是你們(指
        </div>
      </div>
      <div class="p-title">
        釋迦牟尼《法句經》中有言：莫輕小惡，以為無罪，小惡所積，足以滅身。
      </div>
      <div class="p">
        我們先說行小惡的兇手，Google Chrome！沒錯，就是你，不要以為把頭撇開我就抓不到你了(Chrome: 關我屁事)，
        事實上只要你把鼠標移到上圖的藍色icon，就會出現tooltip告訴你原因了："Value below was evaluated just now."
        這是什麼意思呢？以chrome來說，展開後會出現的值是根據記憶體位置去讀取最新的數據來的，
        簡單的說，展開前的數值是console當下的值，而展開後則是現在存放在記憶體中最新的值，
        至於兩者有什麼不同？為什麼展開前的結果不是我們預想中的呢？這問題就牽涉到了我們今天的千古罪人，
        Async/Await了！(Async/Await: 你再繼續誣陷我兩兄弟，我就把你打到你媽都不認識你。)
      </div>
      <div class="p-title">
        其實他倆兄弟是無辜的，前面只是玩笑話而已，各位客官請別太認真，他們現在拿著球棒站在我身後呢！
      </div>
      <div class="p">
        我們都知道JavaScript是單執行緒的語言，他內部有著Event Loop機制，各位可能很困惑，奇怪，怎麼被威脅了一下，
        就開始講其他的東西不講async/await了呢？除了他們倆個手上的球棒真的很大根之外，其實，這些都是環環相扣的，觀念缺一不可。
      </div>
      <div class="p-title">
        如果對Event Loop機制不理解的人，可以參照<a href="https://pjchender.blogspot.com/2017/08/javascript-learn-event-loop-stack-queue.html">這篇</a>文章
      </div>
      <div class="p">
        文章真的非常重要
      </div>
      <div class="p">
        文章真的非常重要
      </div>
      <div class="p">
        文章真的非常重要
      </div>
      <div class="p">
        我決定等你看完再繼續講解，放心，我很閒，
        我可以在這等你一天都不是問題。
        至於如何算是完全理解Event Loop？
        對不起，我現階段還沒厲害到可以給你這個問題的答案，
        但是...
      </div>
      <div class="p">
        <iframe src="https://www.youtube.com/embed/YOo001UM8PI" scrolling="no" frameborder="0" width="100%" height="430" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
      </div>
      <div class="p-title">
        當你可以完全預測上面這個影片的走向時，我相信你應該就可以繼續閱讀以下的文章了。
      </div>
      <div class="p">
        <pre class="line-numbers">
          <code class="language-javascript">async function buyEachOne() { // 希望拿到每種水果+1的結果
            basket.forEach(async (item) => {
              const newNumber = await shopping(item.number);
              item.number = newNumber;
            });
            /* for (let item of basket) {
              const newNumber = await shopping(item.number);
              item.number = newNumber;
            } */
            console.log(basket);
          }</code>
        </pre>
      </div>
      <div class="p">
        我們可以觀察buyEachOne這個function，程式先用forEach對basket進行遍歷，而forEach的運作機制需要傳入一個callback，
        在forEach進入stack被執行時，JS interpreter判斷傳入的callback為非同步程式(Async/Await)，
        因此依序將三個callback塞入Event Queue(Task Queue)當中，以這個範例來說，就是把
      </div>
      <div class="p">
        <pre class="line-numbers">
          <code class="language-javascript">async (item) => {
            const newNumber = await shopping(item.number);
            item.number = newNumber;
          }</code>
        </pre>
      </div>
      <div class="p">
        這個function塞三個進Event Queue，一段時間後由Event Loop去做輪詢。有了這個觀念之後，
        接著我們看console的位置就可以知道他會在forEach的三個callback塞入Event Queue之後進入stack被立即執行(因為他是同步的程式碼)，
        也就是說，這邊console的執行時間是早於那三次shopping的，這也就解釋了為什麼圖一會有我們意想不到的結果出現。
      </div>
      <div class="p">
        當stack中的事件執行完畢之後，Event Loop機制會將Event Queue中的事件逐一塞入stack中並執行，也就是逐一執行上圖的async callback，
        那麼接著我們可以思考一下當async function進入stack後會發生什麼事，你可能猜想到了，執行到await的時後會回傳一個Promise，
        恭喜，又是另一個非同步代碼，於是又進入Event Queue中等待Event Loop的下一次輪詢了。
      </div>
      <!-- <div class="p">
        如果對Event Loop機制不理解的人，可以參照<a href="https://www.youtube.com/watch?v=YOo001UM8PI&feature=emb_logo">這個</a>影片
      </div> -->
      <div class="text-center mt-20">
        <img src="@/assets/images/tech/forEachAsync/3.jpg" style="width: 60%;">
      </div>
      <div class="text-center mt-20">
        <img src="@/assets/images/tech/forEachAsync/4.jpg" style="width: 60%;">
      </div>

    </div>
  </div> 
</div>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
  $title-font-size: 40px;
  $p-title-font-size: 25px;
  $p-font-size: 22px;
  $code-font-size: 18px;
  // 改寫prism code snippet的style
  pre[class*="language-"] {
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
      width: 50%;

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
      }
    }
  }
</style>