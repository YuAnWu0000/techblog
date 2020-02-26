<template>
<div class="page">
  <div class="article">
    <div class="title">
      Async/Await 到底是不是戰犯
    </div>
    <div class="content">
      <div class="p-title">
        「ㄟ~Zachary~~你可以過來幫我通靈一下嗎？」
      </div>
      <div class="p">
        前幾天公司同事R遇到了forEach與async/await這對好基友的基情碰撞，卡關了許久仍不明所以，
        於是叫上我幫忙通靈，身為通靈菜鳥的我，盯著他如下的程式碼(簡化版本)：
      </div>
      <div class="text-center mt-20">
        <img src="@/assets/images/tech/1.jpg" style="width: 60%;">
      </div>
      <div class="text-center">
        <img src="@/assets/images/tech/2.jpg" style="width: 60%;">
      </div>
      <div class="p-title">
        「到底為什麼console出來是下面這樣啊！」R一臉懊惱的抱著頭嘶吼
      </div>
      <div class="text-center mt-20">
        <img src="@/assets/images/tech/3.jpg" style="width: 50%;">
      </div>
      <div class="p">
        「而且...點了一下箭頭...」
      </div>
      <div class="flex mt-20" style="padding-left: 10%; padding-right: 10%">
        <img src="@/assets/images/tech/4.jpg" style="width: 45%;">
        <div class="p">
          「你看！我要的值又長出來啦！是怎樣，為什麼這世界這麼複雜啊啊啊？」
          見他已經開始歇斯底里，同樣也深感困惑的我開始在網路上找尋相關資料
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
        事實上只要你把鼠標移到array旁的藍色icon，就會出現tooltip告訴你原因了，以chrome來說，
        展開後會出現的資料是根據記憶體位置去讀取最新的資料來的，因此上圖看到的其實是目前記憶體當中最新的array，
        那麼至於為什麼展開前的結果不是我們預想中的呢？這就牽涉到了我們今天的千古罪人，
        Async/Await了！(Async/Await: 你再繼續誣陷我兩兄弟，我就把你打到你媽都不認識你。)
      </div>
      <div class="p-title">
        其實他倆兄弟是無辜的，前面只是玩笑話而已，各位客官請別太認真，他們現在拿著球棒站在我身後呢！
      </div>
      <div class="p">
        我們都知道JavaScript是單執行緒的語言，他內部有著Event Queue和Event Loop機制，各位可能很困惑，奇怪，怎麼被威脅了一下，
        就開始講其他的東西不講async/await了呢？除了他們倆個手上的球棒真的很大根之外，其實，這些都是環環相扣的，觀念缺一不可。
      </div>
      <div class="p">
        首先觀察buyEachOne這個function，我們首先對array做forEach，大家應該看的出來，forEach的運作機制需要傳入一個callback，
        因此其實forEach在進入stack時會依序將三次的callback塞入Event Queue當中，一段時間後由Event Loop去做輪詢，有了這個觀念之後，
        接著我們看到console的位置就可以知道他會在forEach的三個callback被進入Event Queue之後進入stack被立即執行，因為他對JS來說是同步執行的程式碼，
        然後在stack中的事件執行完畢之後，Event Loop會將Event Queue中的事件逐一塞入stack中並執行，
        那麼接著我們可以思考一下當async function進入stack後會發生什麼事，也就是執行到await的時後回傳一個Promise，
        恭喜，又是一個非同步代碼，於是又進入Event Queue中等待Event Loop的輪詢了。
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
  $p-title-font-size: 30px;
  $p-font-size: 22px;
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
          background-color: rgba(0, 0, 0, 0.05);;
          text-align: center;
          margin-top: 20px;
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