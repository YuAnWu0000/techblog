<template>
  <div class="page">
    <div class="article">
      <div class="title">
        <div>
          Async/Await與forEach的愛恨情仇
        </div>
        <div class="mt-20">
          <img src="@/assets/images/tech/forEachAsync/title.jpg" style="width: 50%;" />
        </div>
      </div>
      <div class="content">
        <div class="p-title">
          「ㄟ~Zachary~~你可以過來幫我通靈一下嗎？」
        </div>
        <div class="p">
          前幾天公司同事在forEach內使用async/await遇到了問題，卡關了許久仍不明所以，
          於是叫上我幫忙通靈，身為通靈菜鳥的我，盯著他如下的程式碼：(簡化版本)
        </div>
        <myPrism class="p">
          <pre class="line-numbers">
          <code class="language-javascript">const basket = [
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
        </myPrism>
        <div class="p">
          我將概念梳理了一下，流程簡化為菜籃中有若干種水果，我想為每樣水果都多添購一顆，
          每次購買須花費兩秒的時間，購買完成後將菜籃中所有水果的新數量打印出來。
        </div>
        <div class="p">
          好的！回到問題...
        </div>
        <div class="p-title">
          「到底為什麼console出來是下面這樣啊！」他一臉懊惱的抱著頭嘶吼
        </div>
        <div class="text-center mt-20">
          <img src="@/assets/images/tech/forEachAsync/1.jpg" style="width: 50%;" />
        </div>
        <div class="p">
          「而且...點了一下箭頭...」
        </div>
        <div class="flex mt-20" style="padding-left: 10%; padding-right: 10%">
          <img src="@/assets/images/tech/forEachAsync/2.jpg" style="width: 35%;" />
          <div class="p">
            「你看！我要的值又長出來啦！是怎樣，為什麼這世界這麼複雜啊啊啊？」
            見他開始抱著頭歇斯底里，同樣也深感困惑的我開始在網路上找尋相關資料，
            發現會造成這種現象其實可以歸咎於兩個原因，也就是說，造成我同事崩潰的犯人，有兩位！
            <p style="font-size: 40px; font-weight: 400;">Chrome, Async/Await</p>
            就是你們(指
          </div>
        </div>
        <div class="p-title">
          釋迦牟尼《法句經》中有言：莫輕小惡，以為無罪，小惡所積，足以滅身。
        </div>
        <div class="p">
          我們先說行小惡的兇手，Google Chrome！沒錯，就是你，不要以為把頭撇開我就抓不到你了(Chrome:
          關我屁事)， 事實上只要你把鼠標移到上圖的藍色icon，就會出現tooltip告訴你原因了："Value
          below was evaluated just now."
          這是什麼意思呢？以chrome來說，展開前的數值是console當下的值，而展開後則是現在存放在記憶體中最新的值，
          至於兩者有什麼不同？為什麼console當下數值會還沒變更呢？這問題就牽涉到了我們今天的千古罪人，
          Async/Await了！(Async/Await: 你再繼續誣陷我兩兄弟，我就把你打到你媽都不認識你。)
        </div>
        <div class="p-title">
          其實他倆兄弟是無辜的，前面只是玩笑話而已，各位客官請別太認真，他們現在拿著球棒站在我身後呢！
        </div>
        <div class="p">
          我們都知道JavaScript是單執行緒的語言，他內部有著Event
          Loop機制，各位可能很困惑，奇怪，怎麼被威脅了一下，
          就開始講其他的東西不講async/await了呢？除了他們倆個手上的球棒真的很大根之外，其實，這些都是環環相扣的，觀念缺一不可。
        </div>
        <div class="p-title">
          如果對Event Loop機制不理解的人，可以參照<a
            href="https://pjchender.blogspot.com/2017/08/javascript-learn-event-loop-stack-queue.html"
            >這篇</a
          >文章
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
          我決定等你看完再繼續講解，放心，我很閒， 我可以在這等你一天都不是問題。
          至於如何算是完全理解Event Loop？ 對不起，我現階段還沒厲害到可以給你這個問題的答案，
          但是...
        </div>
        <div class="p">
          <iframe
            src="https://www.youtube.com/embed/YOo001UM8PI"
            scrolling="no"
            frameborder="0"
            width="100%"
            height="430"
            allowfullscreen="true"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
          ></iframe>
        </div>
        <div class="p-title">
          當你可以完全預測上面這個影片的走向時，我相信你應該就可以繼續閱讀以下的文章了。
        </div>
        <myPrism class="p">
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
        </myPrism>
        <myPrism class="p">
          <pre class="line-numbers">
          <code class="language-javascript">function shopping(number) {
            return new Promise((resolve, reject) => {
              setTimeout(function() {
                resolve(number + 1);
              }, 2000);
            });
          }</code>
        </pre>
        </myPrism>
        <div class="p-title">
          讓我們用上面影片的邏輯來重新檢視一下這個範例
        </div>
        <div class="p">
          我們首先觀察buyEachOne這個function，程式先用forEach對basket進行遍歷，依序執行傳入forEach的三個callback，
          執行到shopping的時候發現遇到了setTimeOut，因此將setTimeOut交由Web
          APIs進行處理，接著由於await的效果，
          暫時凍結內部執行環境，至此，第一個callback處理完畢。這樣的流程總共會重複三次。
        </div>
        <div class="p">
          forEach的三個callback處理完以後，接著call
          stack執行了console這一行，因而才有了上面chrome打印的結果。
          也就是說，這邊console執行時，那三個Async
          callback還沒有結束凍結，這也就解釋了為什麼圖一會有我們意想不到的結果出現。
        </div>
        <div class="p">
          與此同時，剛剛被我們棄之不理的那三個setTimeOut也在Web
          APIs的幫助下等待了兩秒並將後續程式塞入工作佇列(task queue)當中了。
        </div>
        <div class="p"></div>
        <div class="p">
          當stack中的事件執行完畢之後，Event Loop機制才會將工作佇列(task
          queue)中的事件逐一塞入stack中並執行，
          直到這時候，那三個callback才結束凍結繼續運行，而水果的數量才真正地進行更新。
        </div>
        <div class="p-title">
          還記得開頭的那張迷因嗎？
        </div>
        <div class="p">
          我曾看過不少人說Async/Await在forEach中是不起作用的，但其實事實並不是這樣，以結果來說，Async/Await依舊保證了函式內部的執行順序，
          以這個例子而言，就是等待了兩秒後才更新水果的數量，但他不能保證的是，函式外部call
          stack會先跳過他來執行其他程式。(Async/Await：說得不錯，今天就饒你一命)
        </div>
        <div class="p-title">
          ㄟ等等，講了這麼多，所以你到底有沒有幫你同事解決問題啊？
        </div>
        <div class="p">
          阿對了，差點忘記在一邊懷疑人生的同事了，不過眼尖的你可能已經發現了，
          答案其實就在一開始程式註解的部分喔！
        </div>
        <myPrism class="p">
          <pre class="line-numbers">
          <code class="language-javascript">async function buyEachOne() { // 希望拿到每種水果+1的結果
            /* basket.forEach(async (item) => {
              const newNumber = await shopping(item.number);
              item.number = newNumber;
            }); */
            for (let item of basket) {
              const newNumber = await shopping(item.number);
              item.number = newNumber;
            }
            console.log(basket);
          }</code>
        </pre>
        </myPrism>
        <div class="p">
          只要把forEach改為for就會是你預想的結果了！
        </div>
        <div class="text-center mt-20">
          <img src="@/assets/images/tech/forEachAsync/3.jpg" style="width: 60%;" />
        </div>
        <div class="p-title">
          這真是神奇阿傑克！！
        </div>
        <div class="p">
          其實懂了Event Loop的原理後，這樣的結果也沒什麼好驚訝的了。
          Async/Await的作用是保證當前函式的執行順序，而forEach與for的最大區別就在於forEach是傳入callback來執行，因此對於Async/Await來說，
          當前函式是那三個callback，也就是說，這邊它的作用是凍結那三個callback function。
          但for...of就不同了，它內部的await會凍結最近的Async
          function，也就是凍結buyEachOne()的執行，因此才會有我們想要的結果出現。
        </div>
        <div class="p-title">
          如果你認為你已經理解上面的範例，那就不妨試試下面這個吧!
        </div>
        <myPrism class="p">
          <pre class="line-numbers">
          <code class="language-javascript">const example = async () => {
            const nums = [1,2,3];
            nums.forEach(async num => {
              console.log('start ', num);
              const result = await returnNum(num);
              console.log('end ', num);
            });
            console.log('after forEach');
          }
          
          const returnNum = x => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve(x);
              }, 500*(5-x));
            });
          }
          
          example().then(() =>{
            console.log('done');
          })</code>
        </pre>
        </myPrism>
        <div class="p show-ans" @click="showAns = !showAns">
          思考完後看解答>>>>>>
        </div>
        <div class="text-center mt-20" v-show="showAns">
          <img src="@/assets/images/tech/forEachAsync/4.jpg" style="width: 40%;" />
        </div>
        <div class="p">
          希望解答有跟你心目中的一樣！那麼我們下次見！
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAns: false,
    };
  },
  mounted() {},
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
