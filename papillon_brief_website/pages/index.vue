<template>
  <div class="container">
    <Navigation class="navi"/>
    <div class="firstPanel">
      <div class="bar">
        <div class="papillon">
          <img src="~/static/image/papillon.png" class="logo" />
        </div>
        <div class="menu">
          <span class="product">Product</span>
          <span class="news">News</span>
          <span class="contact">Contact</span>
          <span class="info">Company Info</span>
        </div>
      </div>
      <div class="textBlock">
        <span class="toSport">
          遊びからスポーツへ
        </span>
        <div class="eplayersPos">
          <span class="eplayers">
            e-players<span class="praise">でゲームに称賛を</span>
          </span>
        </div>
        <div class="content">
          <span class="eplayers">e-players</span>は、スマホ一つで<br>
          ゲーム大会を行えるサポートツールです<br>
          運営者、プレイヤーがお互いに<br>
          より楽しんでゲーム大会を実施することができます。
        </div>
        <img src="~/static/image/ossan.png" class="ossan" />
      </div>
    </div>
    <div class="secondPanel">
      <div class="textBlock">
        <span class="title">
          シンプルでわかりやすく<br>
          <br>
          <br>
          <br>
        </span>
        〇〇分であっという間にユーザー登録完了。<br>
        大会に参加するための長い手続きもなし。<br>
        "<span class="highlight">面倒な手続き</span>"は、もう必要ありません。<br>
        シンプルなデザインを採用することで<br>
        アプリ内に難しい操作はありません。
      </div>
      <div class="image">
        <img src="~/static/image/chat.png" />
      </div>
    </div>
    <div class="thirdPanel">
      <div class="title">
        <div class="purpleDot"></div>
        News
        <div class="detail">当社の様々な情報を素早くお届け致します。</div>
        <div v-for="n in news" :key="n">
          <div class="banner">
            <span class="bannerDate">{{n.date}}</span>
            <span class="bannerTitle">{{n.title}}</span>
          </div>
        </div>
        <span class="seeDetail">詳しく見る</span>
      </div>
    </div>
    <div class="fourthPanel">
      <div class="title">
        <div class="purpleDot"></div>
        Contact
        <div class="detail">お気軽にご相談ください。</div>
        <div class="forms">
          <div class="topic">
            会社名<br>
            <input type="text" placeholder="例:株式会社Papillon" /><br>
          </div>
          <div class="topic">
            お名前<br>
            <input type="text" placeholder="姓" class="shortInput" /><br>
            <input type="text" placeholder="名" class="shortInput" /><br>
          </div>
          <div class="topic">
            メールアドレス<br>
            <input type="text" placeholder="例:papillon@domain.com" />
          </div>
          <div class="topic">
            お問い合わせ内容<br>
            <div class="selectWrap">
              <select name="inquiry">
                <option value="complaint">クレーム</option>
                <option value="complaint">クレーム</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fifthPanel">

    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from '~/components/NavigationBar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      news: [
        {
          "date": "2020/08/08",
          "title": "大会配信について"
        },
        {
          "date": "2020/09/30",
          "title": "大会開催"
        },
        {
          "date": "2020/10/1",
          "title": "アップデートについて"
        },
        {
          "date": "2020/10/2",
          "title": "アップデートに伴う注意"
        },
        {
          "date": "2020/10/15",
          "title": "大会中止のお知らせ"
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

body, html {
  margin: 0;
  padding: 0;
}

input {
  margin-top: 18px;
  width: 65%;
  height: 87px;
  font-size: 32px;
  padding-left: 30px;
  background: #f6f6f6;
  border: none;
}

select {
  position: relative;
  margin-top: 18px;
  width: 65%;
  height: 87px;
  font-size: 32px;
  padding-left: 30px;
  background: #f6f6f6;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.shortInput {
  width: 40%;
}

.down-arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.container {
  margin: 0;
  padding: 0;
  background: #fafafa;
  overflow-x: hidden;
  //animation: fadeIn 1s ease 1s 1 normal;

  .navi {
    position: fixed;
    top: 0;
    left: 0;

    //FIXME: 影の付け方が雑
    z-index: 2;
  }

  .firstPanel {
    position: relative;
    top: 0;
    left: 0;
    z-index: 3;

    height: 1060px;
    width: 100%;

    background: #fafafa;

    .bar {
      position: relative;
      top: 100px;
      left: 50%;

      width: 80%;

      transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);

      .papillon {
        .logo {
          position: relative;
          height: 80px;
          width: 80px;
        }
      }
      .papillon:after {
        content: "Papillon";
        position: absolute;
        top: 16px;
        margin-left: 5px;

        font-weight: 900;
        font-size: 36px;
        font-family: 'Roboto', sans-serif;
        color: #212121;
      }

      .menu {
        position: absolute;
        top: 20px;
        right: 0;
        color: #767676;

        .product {
          position: relative;
          right: 60px;
          font-size: 30px;
          font-weight: 500;
          text-align: right;
          cursor: pointer;
        }

        .news {
          position: relative;
          right: 40px;
          font-size: 30px;
          font-weight: 500;
          text-align: right;
          cursor: pointer;
        }

        .contact {
          position: relative;
          right: 20px;
          font-size: 30px;
          font-weight: 500;
          text-align: right;
          cursor: pointer;
        }

        .info {
          position: relative;
          font-size: 30px;
          font-weight: 500;
          text-align: right;
          cursor: pointer;
        }
      }
    }

    .textBlock {
      position: relative;
      margin-top: 300px;
      left: 51%;

      width: 80%;

      transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);

      .toSport {
        position: relative;
        color: #212121;
        font-size: 32px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        letter-spacing: 1.15px;
      }

      .eplayersPos {
        position: relative;
        margin-top: 25px;

        .eplayers {
          margin-top: 30px;
          margin-left: 15px;

          color: #BE2B50;
          position: absolute;

          font-weight: 900;
          font-size: 52px;
          font-family: 'Roboto', sans-serif;

          .praise {
            color: #212121;
            font-size: 36px;
            margin-left: 2px;

            font-weight: 500;
          }
        }
      }
      .eplayersPos::before {
        position: relative;
        content: url(../static/image/logo.png);
        margin-top: 25px;
      }

      .content {
        position: relative;
        top: 65px;
        color: #767676;
        font-size: 28px;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;

        .eplayers {
          color: #BE2B50;
          margin-right: 3px;
        }
      }

      .ossan {
        position: absolute;

        top: -150px;
        right: -90px;
        width: 730px;
        height: 730px;
      }
    }
  }

  .secondPanel {
    position: relative;
    margin-top: 80px;
    background: #7565E1;

    height: 900px;
    width: 100%;

    .textBlock {
      position: relative;

      top: 50%;
      left: 10%;
      color: white;
      font-size: 28px;
      font-family: 'Roboto', sans-serif;

      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);

      .title {
        font-weight: 700;
        font-size: 36px;
      }

      .highlight {
        color: #E2FF1A;
      }
    }

    .image {
      position: absolute;
      top: 50%;
      right: 10%;

      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
    }
    .image:before {
      content: url("../static/image/menu.png");
      margin-right: 80px;
    }
  }

  .thirdPanel {
    position: relative;
    height: 750px;
    background: white;

    .title {
      position: relative;
      top: 100px;
      left: 200px;

      color: #212121;
      font-size: 30px;
      font-family: 'Roboto', sans-serif;
    }
    .detail {
      position: relative;
      top: 10px;
      left: -24px;
      margin-bottom: 100px;

      color: #767676;
      font-size: 28px;
      font-family: 'Roboto', sans-serif;
    }

    .banner {
      position: relative;
      color: #212121;
      font-size: 26px;
      margin-top: 36px;
      left: -24px;
      cursor: pointer;

      .bannerDate {
        color: #767676;
      }

      .bannerTitle {
        position: absolute;
        left: 200px;
      }
    }

    .seeDetail {
      position: relative;
      top: 50px;
      height: 60px;
      width: auto;
      padding-left: 110px;
      padding-right: 110px;
      padding-top: 10px;
      padding-bottom: 10px;
      color: white;
      font-size: 24px;
      background: black;
      border-radius: 26px;
      text-align: center;
      font-family: 'Roboto', sans-serif;
      cursor: pointer;
    }
  }

  .fourthPanel {
    position: relative;
    height: 1140px;
    width: 100%;

    .title {
      position: relative;
      top: 100px;
      left: 200px;

      color: #212121;
      font-size: 30px;
      font-family: 'Roboto', sans-serif;
    }
    .detail {
      position: relative;
      top: 10px;
      left: -24px;

      color: #767676;
      font-size: 28px;
      font-family: 'Roboto', sans-serif;
    }

    .forms {
      position: relative;
      top: 80px;
      left: -24px;

      .topic {
        color: #212121;
        margin-top: 30px;
        font-size: 26px;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
      }
    }
  }

  .fifthPanel {
    position: relative;
    background: #F5F7FA;
    height: 810px;
    width: 100%;
  }
}

.purpleDot {
  position: absolute;
  top: 8px;
  left: -24px;

  background: #7565E1;
  width: 16px;
  height: 16px;
  border-radius: 10px;
}

@keyframes fadeIn {
  0% {opacity: 0}
  100% {opacity: 1}
}

.page-enter-active, .page-leave-active {
  transition: opacity 0.1s
}
.page-enter, .page-leave-active {
  opacity: 0
}

</style>
