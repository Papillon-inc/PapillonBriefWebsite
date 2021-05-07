<template>
	<div class="container">
		<div class="bar">
			<div class="papillon">
				<img src="~/static/image/papillon.png" class="logo" alt="papillon logo" />
			</div>
			<div class="menu">
				<span class="product" @click="product_scroll">Product</span>
				<span class="news" @click="news_scroll">News</span>
				<span class="contact" @click="contact_scroll">Contact</span>
				<span class="info" @click="information_scroll">Information</span>
			</div>
      	</div>

		<div class="news-block">
			<div class="news-text">News</div>
			<div class="news-subtext">当社の様々な情報をお伝えします。</div>
			<div class="filter-dropdown-field">
				<select class="filter-dropdown" name="filter">
					<option selected="true">All</option>
				</select>
			</div>
			<br>
			<br>
			<div v-for="n in news" :key="n">
				{{n.title}}
			</div>
			<br>
		</div>

		<nuxt-link to="terms_of_use">利用規約</nuxt-link>
		<br>
		<nuxt-link to="privacy_policy">プライバシーポリシー</nuxt-link>
		<br>
		<nuxt-link to="help">ヘルプ</nuxt-link>
	</div>
</template>

<script>

export default {
  data() {
		return {
			news: [
        {
          "date": "2019/12/03",
          "title": "会社を設立しました"
        },
        {
          "date": "2020/01/01",
          "title": "謹賀新年 今年も精進します"
        },
        {
          "date": "2020/03/01",
          "title": "事務所OPEN！"
        },
        {
          "date": "2020/11/20",
          "title": "順調にプロダクトの開発が進んでいます！"
        },
        {
          "date": "2020/11/29",
          "title": "サイトリニューアルのお知らせ"
        },
        {
          "date": "2021/03/26",
          "title": "ステーションAIに入居"
        },
				{
					"date": "2021/04/14",
					"title": "利用規約を掲載"
				}
      ]
		}
	}
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

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
  background: url(../static/image/triangle.png) right 50% no-repeat, -webkit-linear-gradient(top, #fff 0%,#efebe1 100%);
  background: url(../static/image/triangle.png) right 50% no-repeat, linear-gradient(top, #fff 0%,#efebe1 100%);
  background-size: 20px, 100%;

 //画像をselect要素内に出すための仕組み
  background-image: url(../static/image/tri_button.png);
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
	top: 100px;
	width: 100%;
	padding-left: 10%;
	padding-right: 10%;

	font-size: 28px;

	.bar {
      position: relative;
      top: 1px;
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

	.news-block {
		//background: red;
		margin-top: 90px;
		margin-left: 15px;

		.news-text {
			font-size: 72px;
			font-weight: 900;
			font-family: 'Roboto', sans-serif;
		}

		.news-subtext {
			color: #767676;
			font-weight: 900;
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
			}
		}
	}
}
</style>