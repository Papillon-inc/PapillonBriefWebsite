<template>
    <div class="article-container">
        <div class="pad">
             <div class="bar">
                <div class="papillon">
                    <img src="~/static/image/papillon.png" class="logo" alt="papillon logo" />
                </div>
                <div class="menu">
                    <span class="product">Product</span>
                    <span class="news">News</span>
                    <span class="contact">Contact</span>
                    <span class="info">Information</span>
                </div>
            </div>

            <div class="content">
                <span class="category">
                    {{ this.category }}
                </span><br>
                <div class="title">
                    {{ this.title }}
                </div>
                <div class="date">
                    {{ this.date }}
                </div>

                <div class="text" v-html="$md.render(text)"></div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from "~/components/Footer.vue"
import firebase from '~/plugins/firebase'

const db = firebase.firestore()

export default {
    components: {
        Footer
    },
    data() {
        return {
            category: "asdf",
            title: "Title",
            date: "2020/1/1",
            text: "akffkkk<br>asdf\\nasdfasdfsssas"
        }
    },
    created() {
        const id = this.$route.query.id
        db.collection("articles")
            .doc(id)
            .get()
            .then((doc) => {
                const data = doc.data()
                this.title = data.title
                this.text = data.text
                this.category = data.category
                let t = new Date(1970, 0, 1);
				t.setUTCSeconds(data.date.seconds)
                this.date = t.getFullYear() + "/" + ('00' + (t.getMonth()+1)).slice(-2) + "/" + ('00'+t.getDate()).slice(-2)
            })
    }
}
</script>

<style scoped lang="scss">
.pad {
    padding-left: 10%;
    padding-right: 10%;

    .bar {
      position: relative;
      top: 100px;
      left: 50%;

      width: 100%;

      @media screen and (max-width: 600px) {
        top: 10px;
        width: 100%;
        padding-left: 5%;
        z-index: 2;
        background: #fafafa;
      }

      transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);

      .papillon {
        .logo {
          position: relative;
          height: 80px;
          width: 80px;

          @media screen and (max-width: 1000px) {
            width: 48px;
            height: 48px;
          }

          @media screen and (max-width: 600px) {
            width: 26px;
            height: 26px;
          }
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

        @media screen and (max-width: 1000px) {
          top: 10px;
          font-size: 28px;
        }

        @media screen and (max-width: 600px) {
          top: 6px;
          margin-left: 3px;
          font-size: 12px;
          z-index: 3;
        }
      }

      .menu {
        position: absolute;
        top: 20px;
        right: 5%;
        color: #767676;

        @media screen and (max-width: 1000px) {
          top: 10px;
        }

        @media screen and (max-width: 600px) {
          top: 2px;
        }

        .product {
          position: relative;
          right: 60px;
          font-size: 30px;
          font-weight: 500;
          text-align: right;
          cursor: pointer;

          @media screen and (max-width: 1000px) {
            right: 36px;
            font-size: 24px;
          }

          @media screen and (max-width: 600px) {
            right: 16px;
            font-size: 12px;
          }
        }

        .news {
          position: relative;
          right: 40px;
          font-size: 30px;
          font-weight: 500;
          text-align: right;
          cursor: pointer;

          @media screen and (max-width: 1000px) {
            right: 27px;
            font-size: 24px;
          }

          @media screen and (max-width: 600px) {
            right: 12px;
            font-size: 12px;
          }
        }

        .contact {
          position: relative;
          right: 20px;
          font-size: 30px;
          font-weight: 500;
          text-align: right;
          cursor: pointer;

          @media screen and (max-width: 1000px) {
            right: 18px;
            font-size: 24px;
          }

          @media screen and (max-width: 600px) {
            right: 8px;
            font-size: 12px;
          }
        }

        .info {
          position: relative;
          font-size: 30px;
          font-weight: 500;
          text-align: right;
          cursor: pointer;

          @media screen and (max-width: 1000px) {
            right: 9px;
            font-size: 24px;
          }

          @media screen and (max-width: 600px) {
            right: 4px;
            font-size: 12px;
          }
        }
      }
    }

    .content {
        margin-top: 220px;
        margin-left: 15px;
        margin-bottom: 120px;;

        .category {
            font-size: 16px;
            background: #E16565;
            border-radius: 100px;
            padding-left: 18px;
            padding-right: 18px;
            padding-top: 5px;
            padding-bottom: 5px;
            color: white;
        }

        .title {
            margin-top: 80px;
            font-size: 36px;
            font-weight: 500;
            color: #212121;
        }

        .date {
            font-size: 20px;
            color: #767676;
        }

        .text {
            margin-top: 70px;
            font-size: 42px;
        }
    }
}
</style>