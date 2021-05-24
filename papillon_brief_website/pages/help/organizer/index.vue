<template>
    <div class="container">
        <Header />
        <HelpSearchBlock />
        <HelpCards />
        <div class="content">
            <h1>主催者スタートガイド</h1>
            ここではどのように大会を作成し、運営していくのかについて説明します。<br>
            <br><br>
            <h2>大会を作成する</h2>
            <br>
            <img src="~/static/image/help/organizer/home.png" /><br>
            <br>
            主催者はまず大会を作成することから始めます。<br>
            HOME画面の中央にある円形のボタンを押すと自分のエントリーしている大会一覧が表示されます。<br>
            <br>
            <img src="~/static/image/help/organizer/enter.png" /><br>
            <br>
            エントリーしている大会一覧の画面（以下、エントリー画面）には<br>
            「大会を作成」と書かれたボタンが用意されています。<br>
            このボタンを押すと大会を作成するために必要な情報を入力する画面が表示されます。<br>
            なお、エントリー画面には以下の大会が表示されます。<br>
            <ul>
                <li>自分が主催している大会</li>
                <li>自分がアシスタントとして追加されている大会</li>
                <li>自分が参加している大会</li>
            </ul>
            <br>
            <img src="~/static/image/help/organizer/create_tournament1.png" />
            <img src="~/static/image/help/organizer/create_tournament2.png" /><br>
            <br>
            大会作成には、以下の情報が必須です。<br>
            <ul>
                <li>大会名</li>
                <li>ゲーム名</li>
                <li>プラットフォーム</li>
                <li>大会日時</li>
                <li>募集開始日時</li>
                <li>募集終了日時</li>
                <li>大会のタイプ</li>
                <li>募集人数</li>
            </ul>
            そのほかの情報は任意で入力することができます。<br>
            必要な情報を埋め、「作成」ボタンを押すと大会が作成されます。<br>
            <br><br>
            <h2>大会を運営する</h2>
            <br>
            <img src="~/static/image/help/organizer/match.png" /><br>
            <br>
            エントリー画面から自分の関係している大会の情報を閲覧することができます。<br>
            参加人数が2人以上いると大会を強制的にスタートできます。<br>
            <br>
            <img src="~/static/image/help/organizer/manager_container.png" /><br>
            <br>
            すでにスタートしている大会では画面の表示が切り替わっていきます。<br>
            これは「管理画面」です。<br>
            管理画面では、どのユーザーが対戦中でどのユーザーが待機中なのかが表示されます。<br>
            <br>
            <img src="~/static/image/help/organizer/member.png" /><br>
            <br>
            大会に関係しているユーザーの情報は「メンバー画面」からも確認できます。<br>
            メンバー画面は管理画面から遷移して表示することができます。<br>
            <br>
            <img src="~/static/image/help/organizer/manage_win.png" /><br>
            <br>
            やむを得ない場合はメンバーに対して敗北処理を行うこともできます。<br>
            欠席やもめ事が起きてしまい大会が進行できなくなった場合はこの機能を使用します。<br>
            <br>
            <img src="~/static/image/help/organizer/brackets.png" /><br>
            <br>
            トーナメント表画面から、どのユーザーがどれくらい勝ち進んでいるかを確認することもできます。<br>
            トーナメント表は自動で描画されていくので、主催者が管理する必要もありません。<br>

            <br>
            開催の手順は以上です。<br>
            <br>
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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');

.container {
    background: #fafafa;

    .content {
        position: relative;
        font-family: 'Noto Sans JP', sans-serif;
        color: #212121;
        font-size: 24px;

        margin-left: 10%;

        img {
            width: 260px;
        }
    }
}
</style>