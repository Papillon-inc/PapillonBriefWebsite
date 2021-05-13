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
        margin-bottom: 200px;

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
}
</style>