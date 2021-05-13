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
        </div>
    </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
    components: {
        Header
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

.container {
    .title-block {
        position: relative;
        margin-top: 260px;
        margin-left: 10%;

        width: 80%;
        background: cyan;

        .title {
            font-size: 72px;
            font-weight: 900;
            font-family: 'Roboto', sans-serif;
        }

        .subtitle {
            font-size: 32px;
            color: #767676;
            font-weight: 500;
        }
    }
}
</style>