<template>
	<div class="container">
    <div class="pad">
      <div class="bar">
        <nuxt-link to="/">
          <div class="papillon">
            <img src="~/static/image/papillon.png" class="logo" alt="papillon logo" />
          </div>
        </nuxt-link>
        <div class="menu">
          <span class="product">Product</span>
          <span class="news">News</span>
          <span class="contact">Contact</span>
          <span class="info">Information</span>
        </div>
      </div>

      <div class="news-block">
        <div class="news-text">News</div>
        <div class="news-subtext">当社の様々な情報をお伝えします。</div>
        <div class="filter-dropdown-field">
          <select class="filter-dropdown" name="filter" v-model="selectedCategory">
            <option selected="true" value="">All</option>
            <option v-for="(category, index) in categories" :key="index" :value="category.name">
              {{ category.name }}
            </option>
          </select>
        </div>
        <div class="articles-field">
          <div v-for="(article, index) in articles" :key="index" class="article" @click="showArticlePage(index)">
            <span class="date">{{article.date}}</span>
            <span class="category">{{article.category}}</span>
            <span class="title">{{article.title}}</span>
          </div>
        </div>
      </div>
    </div>
    <Footer />
	</div>
</template>

<script>
import Footer from "~/components/Footer.vue"
import firebase from "~/plugins/firebase.js"

const db = firebase.firestore()

export default {
	components: {
		Footer
	},
  data() {
		return {
			articles: [],
      categories: [],
      selectedCategory: ""
		}
	},
  methods: {
    showArticlePage(index) {
      this.$router.push({
        path: "/news/article",
        query: {
          id: this.articles[index].id
        }
      })
    }
  },
  watch: {
    selectedCategory: function() {
      if (this.selectedCategory == "") {
        db.collection("articles")
          .orderBy("date")
          .get()
          .then((querySnapshot) => {
            this.articles = []
            querySnapshot.forEach((doc) => {
              const data = doc.data()
              let t = new Date(1970, 0, 1);
              t.setUTCSeconds(data.date.seconds)
              data.date = t.getFullYear() + "/" + ('00' + (t.getMonth()+1)).slice(-2) + "/" + ('00'+t.getDate()).slice(-2)
              data.id = doc.id
              this.articles.push(data)
            })
        })
      } else {
        db.collection("articles")
          .where("category", "==", this.selectedCategory)
          .orderBy("date")
          .get()
          .then((querySnapshot) => {
            this.articles = []
            querySnapshot.forEach((doc) => {
              const data = doc.data()
              let t = new Date(1970, 0, 1);
              t.setUTCSeconds(data.date.seconds)
              data.date = t.getFullYear() + "/" + ('00' + (t.getMonth()+1)).slice(-2) + "/" + ('00'+t.getDate()).slice(-2)
              data.id = doc.id
              this.articles.push(data)
            })
          })
      }
    }
  },
  created() {
		db.collection("articles")
      .orderBy("date")
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					const data = doc.data()
					let t = new Date(1970, 0, 1);
					t.setUTCSeconds(data.date.seconds)
					data.date = t.getFullYear() + "/" + ('00' + (t.getMonth()+1)).slice(-2) + "/" + ('00'+t.getDate()).slice(-2)
          data.id = doc.id
					this.articles.push(data)
				})
			})
			.catch((e) => {
				console.log(e)
			})

    db.collection("categories")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          this.categories.push(data)
        })
      })
      .catch((e) => {
        console.log(e)
      })
	}
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

body, html {
	background: #fafafa;
	margin: 0;
	padding: 0;
}

select {
  position: relative;
  margin-top: 18px;
  width: 65%;
  height: 87px;
  font-size: 32px;
  padding-left: 30px;
  background: white;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(../../static/image/triangle.png) right 50% no-repeat, -webkit-linear-gradient(top, #fff 0%,#efebe1 100%);
  background: url(../../static/image/triangle.png) right 50% no-repeat, linear-gradient(top, #fff 0%,#efebe1 100%);
  background-size: 20px, 100%;

 //画像をselect要素内に出すための仕組み
  background-image: url(../../static/image/tri_button.png);
  background-repeat: no-repeat;
  background-position: 95%; /* 背景画像を若干右に移動 */
  
  @media screen and (max-width: 1000px) {
    height: 50px;
    font-size: 20px;
  }

  @media screen and (max-width: 600px) {
    margin-top: 14px;
    height: 30px;
    padding-left: 15px;
    padding-left: 5%;
    font-size: 14px;
  }
}

.container {
	position: relative;
	width: 100%;
	background: #FAFAFA;

	font-size: 28px;

  .pad {
    padding-left: 10%;
    padding-right: 10%;

    @media screen and (max-width: 600px) {
      padding-left: 0;
      padding-right: 0;
    }
    
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
          top: 8px;
        }

        @media screen and (max-width: 600px) {
          top: -10px;
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

    .news-block {
      margin-top: 100px;
      margin-left: 15px;
      padding-bottom: 100px;

      @media screen and (max-width: 600px) {
        margin-top: 30px;
        margin-left: 5%;
        margin-right: 5%;
        padding-bottom: 50px;
      }

      .news-text {
        font-size: 72px;
        font-weight: 900;
        font-family: 'Roboto', sans-serif;

        @media screen and (max-width: 600px) {
          font-size: 36px;
        }
      }

      .news-subtext {
        color: #767676;
        font-weight: 900;

        @media screen and (max-width: 600px) {
          font-size: 20px;
        }
      }

      .filter-dropdown-field {
        width: 100%;
        height: 100px;
        padding-top: 23px;
        padding-bottom: 23px;
        
        .filter-dropdown {
          position: absolute;
          right: 14%;
          height: 64px;
          width: 220px;
          border-style: solid;
          border-width: 3px;
          border-color: #92E065;
          border-radius: 3px;
          color: #92E065;

          @media screen and (max-width: 600px) {
            height: 32px;
            width: 110px;
          }
        }
      }

      .articles-field {
        background: white;
        padding-top: 100px;
        padding-left: 80px;
        padding-bottom: 100px;
        margin-top: 40px;

        @media screen and (max-width: 600px) {
          margin-top: 20px;
          padding-left: 20px;
          padding-top: 25px;
          padding-bottom: 20px;
        }

        .article {
          //display: inline;
          margin-bottom: 15px;
          cursor: pointer;
          
          .date {
            color: #767676;
            font-size: 28px;

            @media screen and (max-width: 600px) {
              font-size: 16px;
            }
          }

          .title {
            position: relative;
            margin-left: 30px;
            color: #212121;
            font-size: 28px;

            @media screen and (max-width: 600px) {
              display: block;
              font-size: 16px;
              margin-left: 0;
              margin-top: 5px;
            }
          }

          .category {
            position: relative;
            margin-left: 30px;
            font-size: 16px;
            background: #E16565;
            padding-top: 7px;
            padding-bottom: 7px;
            padding-left: 24px;
            padding-right: 24px;
            border-radius: 100px;
            color: white;

            @media screen and (max-width: 600px) {
              font-size: 12px;
              margin-left: 15px;
              padding-top: 4px;
              padding-bottom: 4px;
              padding-left: 10px;
              padding-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>