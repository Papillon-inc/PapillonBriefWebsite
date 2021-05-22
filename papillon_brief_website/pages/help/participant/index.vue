<template>
    <div class="container">
        <Header />
        <HelpSearchBlock />
        <HelpCards />
        <div class="content">
            <h1>参加者スタートガイド</h1>
            ここではどのように大会に参加するのかについて説明します。
            <h2>大会を見つける</h2>
            <img src="~/static/image/help/participant/home.png" /><br>
            大会は基本的にHOME画面から見つけることができます。<br>
            自分が興味のあるゲーム、大会名から検索をして大会を絞り込むこともできます。<br>
            <img src="~/static/image/help/participant/info1.png" />
            <img src="~/static/image/help/participant/info2.png" /><br>
            興味のある大会を選択すると、大会の情報が表示されます。<br>
            「参加」ボタンをタップすることで大会に参加登録することができます。<br>
            <img src="~/static/image/help/participant/leave.png" /><br>
            参加は「抜ける」ボタンで取り消すことができます。<br>
            なお、大会の開催時刻が被ってしまう場合は参加登録することができないようにしています。<br>
            <img src="~/static/image/help/participant/enter.png" /><br>
            参加登録をした大会はエントリーしている大会一覧の画面（以下、エントリー画面）に表示されます。<br>
            エントリー画面には以下の大会が表示されます。<br>
            <ul>
                <li>自分が主催している大会</li>
                <li>自分がアシスタントとして追加されている大会</li>
                <li>自分が参加している大会</li>
            </ul>
            <img src="~/static/image/help/participant/match.png" /><br>
            
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import HelpCards from '~/components/help/HelpCards.vue'
import HelpSearchBlock from '~/components/help/HelpSearchBlock.vue'

export default {
    components: {
        Header,
        Footer,
        HelpCards,
        HelpSearchBlock
    }
}
</script>

<style scoped lang="scss">
.container {
    background: #fafafa;

    .content {
        position: relative;
        margin-top: 200px;

        img {
            width: 260px;
        }
    }
}
</style>