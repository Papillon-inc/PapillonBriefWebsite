<template>
	<div class="container">
		時間がなくて簡易的なページです！すみません...

		<br>
		<br>
		<br>
		<b>News</b>
		<br>
		<br>
		<div v-for="n in news" :key="n">
			{{n.title}}
		</div>
		<br>

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
.container {
	position: relative;
	top: 40px;
	width: 80%;
	left: 10%;

	font-size: 28px;
}
</style>