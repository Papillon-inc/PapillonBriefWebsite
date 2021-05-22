<template>
    <div class="container">
        <Header />
        <HelpSearchBlock />
        <HelpCards />
        <div class="content">
            <div class="title">e-playersとは？</div>
            <div class="detail">
                e-playersはesports大会を誰でもラクに開催できるサービスです。<br>
                e-playersは主催者の負担を減らし、主催者自身も大会に参加して楽しめるくらいラクに大会開催・運営ができることをコンセプトとして誕生しました。<br>
                <!-- そしてこれからは利用者の方々の声に寄り添い改善を重ね、大会運営において強い信頼感のあるサービスを目指していきます。 -->
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from '~/components/Header.vue'
import SearchBar from '~/components/SearchBar.vue'
import Footer from '~/components/Footer.vue'
import HelpCards from '~/components/help/HelpCards.vue'
import HelpSearchBlock from '~/components/help/HelpSearchBlock.vue'

export default {
    components: {
        Header,
        SearchBar,
        Footer,
        HelpCards,
        HelpSearchBlock
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');

.container {
    background: #fafafa;

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