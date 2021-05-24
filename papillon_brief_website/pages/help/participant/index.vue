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

            <h2>参加した大会を見る</h2>
            <img src="~/static/image/help/participant/enter.png" /><br>
            参加登録をした大会はエントリーしている大会一覧の画面（以下、エントリー画面）に表示されます。<br>
            エントリー画面には以下の大会が表示されます。<br>
            <ul>
                <li>自分が主催している大会</li>
                <li>自分がアシスタントとして追加されている大会</li>
                <li>自分が参加している大会</li>
            </ul>
            <img src="~/static/image/help/participant/match.png" /><br>
            エントリー画面から大会を選択すると、大会に関する様々な情報の載っている画面（以下、大会画面）が表示されます。<br>
            大会画面には以下の項目が表示されます。<br>
            <ul>
                <li>メンバー</li>
                大会に関係しているメンバーが表示されます。
                <li>大会強制開始</li>
                指定した時刻にならなくても大会を開始することができます。<br>
                自分が主催者兼参加者のときに表示されます。
                <li>グループチャット</li>
                大会内で利用するグループチャットを使用することができます。
                <li>トーナメント</li>
                トーナメント表が表示されます。
                <li>インフォメーション</li>
                大会の詳細情報を確認することができます。
            </ul>

            <h2>参加した大会で遊ぶ</h2>
            <img src="~/static/image/help/participant/got_opponent.png" /><br>
            大会が開始時刻になるか強制的にスタートされると、大会画面が切り替わります。<br>
            大会が開催される前は開催までのカウントダウンの情報が表示されていましたが、<br>
            画面が切り替わったあとは大会を進行するための画面に切り替わります。<br>
            この画面では対戦相手が表示されており、STARTボタンを押すと対戦開始されたことが主催者に知らされます。<br>
            <img src="~/static/image/help/participant/wait_for_opponent.png" /><br>
            対戦相手がスタートを押すまではこの画面が続きます。<br>
            <img src="~/static/image/help/participant/score.png" /><br>
            対戦相手もスタートを押すとマッチが開始し、スコアが入力できるようになります。<br>
            この画面になったら対戦相手とゲームでの対戦を開始します。<br>
            そして自分のスコアがゲーム内で表示されたらe-playersでスコアを入力し、送信します。<br>
            <img src="~/static/image/help/participant/wait.png" /><br>
            次の対戦相手はトーナメント表に基づいて自動的に決まります。<br>
            対戦相手が決まるまではこの画面が表示されます。<br>
            <img src="~/static/image/help/participant/rank.png" /><br>
            敗北してしまった場合は自身のランクが表示されます。<br>
            対戦が最後まで進み、1位になった場合もランクが表示されます。<br>

            <br>
            参加の手順は以上です。
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