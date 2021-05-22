<template>
    <div class="help-search-block-container">
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
    </div>
</template>

<script>
</script>

<style scoped lang="scss">
.help-search-block-container {
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
}
</style>