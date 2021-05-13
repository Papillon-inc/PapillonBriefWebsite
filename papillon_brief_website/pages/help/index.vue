<template>
    <div class="container">
        <Header />
        <div class="title-block">
            <div class="title">
                Help
            </div>
            <br>
            <div class="subtitle">
                何か手伝えることはありませんか？
            </div>
            <search-bar class="search-bar" />
        </div>
        <div class="cards">
            <span class="card">
                <img src="~/static/image/help/logo-only.png" alt="e-players-logo" />
                e-playersとは？
            </span>
            <span class="card">
                <img src="~/static/image/help/world.png" alt="world" />
                主催者スタートガイド
            </span>
            <span class="card">
                <img src="~/static/image/help/controller.png" alt="controller" />
                参加者スタートガイド
            </span>
            <span class="card">
                <img src="~/static/image/help/question.png" alt="question" />
                よくある質問
            </span>
            <span class="card">
                <img src="~/static/image/help/team.png" alt="team" />
                さまざまなヒント
            </span>
        </div>
        <div class="content">
            <div class="title">e-playersとは？</div>
            <div class="detail">説明</div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '~/components/Header.vue'
import SearchBar from '~/components/SearchBar.vue'
import Footer from '~/components/Footer.vue'

export default {
    components: {
        Header,
        SearchBar,
        Footer
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');

.container {
    background: #fafafa;

    .title-block {
        position: relative;
        margin-top: 260px;
        margin-left: 10%;

        width: 80%;
        //background: cyan;

        .title {
            font-size: 72px;
            font-weight: 900;
            font-family: 'Roboto', sans-serif;
        }

        .subtitle {
            font-size: 32px;
            color: #767676;
            font-weight: 500;
            font-family: 'Noto Sans JP', sans-serif;
        }

        .search-bar {
            margin-top: 55px;
        }
    }

    .cards {
        position: relative;
        margin-top: 50px;
        margin-left: 3%;
        height: 260px;
        width: 96%;
        //background: magenta;
        margin-bottom: 200px;

        .card {
            display: inline-block;
            position: relative;
            width: 18%;
            height: 100%;
            margin-right: 1%;
            border-radius: 30px;

            color: #212121;
            font-size: 24px;
            font-weight: 500;
            font-family: 'Noto Sans JP', sans-serif;
            text-align: center;
            line-height: 430px;

            background: white;
            box-shadow: 0px 3px 3px #00000029;
            cursor: pointer;

            img {
                position: absolute;
                bottom: 30%;
                width: 56%;
                left: 22%;
            }
        }
    }

    .content {
        width: 80%;
        margin-left: 10%;
        font-weight: 500;
        font-family: 'Noto Sans JP', sans-serif;

        .title {
            font-size: 64px;
            color: #212121;
            text-align: center;
        }

        .detail {
            margin-top: 30px;
            margin-bottom: 120px;
            font-size: 36px;
            color: #767676;
        }
    }
}
</style>