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
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/NavigationBar.vue'

export default {
  components: {
    Navigation
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

body, html {
  margin: 0;
  padding: 0;
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
      margin-right: 90px;
    }
  }

  .thirdPanel {
    position: relative;
    height: 710px;
  }
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
