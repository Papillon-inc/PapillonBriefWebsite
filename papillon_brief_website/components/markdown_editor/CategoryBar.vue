<template>
    <div class="category_bar">
        <ul>
            <li>カテゴリー：<li>
            <li v-for="n in categories" :key="n" class="category">
                {{ n }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                "Cat1", "Cat2", "MyCat", "OutCat", "InterCattingfulness", "asdf"
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

.category_bar {
    height: 64px;
    width: 100%;
    background: violet;
    color: #212121;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    line-height: 64px;
    scrollbar-width: none;

    padding-left: 0px;

    ul {
        display: inline;
        overflow-x: scroll;
        white-space: nowrap;

        li:first-child {
            margin-right: 15px;
            font-weight: 900;
        }

        li {
            margin-left: 15px;
            margin-right: 15px;
            display: inline-block;
        }

        .category {
            cursor: pointer;
        }
    }
}
</style>