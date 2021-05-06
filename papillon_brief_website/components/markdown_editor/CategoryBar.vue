<template>
    <div class="category_bar">
        <ul>
            <li>カテゴリー：<li>
            <li v-for="(n, i) in categories" :key="n" class="category" @click="selectCategory(i)">
                {{ n }}
            </li>
            <li>+</li>
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
    },
    methods: {
        selectCategory(n) {
            const selectedCategory = document.getElementsByClassName('selected')[0]
            selectedCategory.classList.remove("selected")

            const firstCategory = document.getElementsByClassName('category')[n]
            firstCategory.classList.add("selected")
        }
    },
    mounted() {
        const firstCategory = document.getElementsByClassName('category')[0]
        firstCategory.classList.add("selected")
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

.category_bar {
    height: 64px;
    width: 100%;
    background: white;
    color: #212121;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    line-height: 46px;
    scrollbar-width: none;

    ul {
        display: inline;
        overflow-x: scroll;
        white-space: nowrap;

        padding-right: 60px;

        li:first-child {
            font-weight: 900;
            margin-right: 20px;
        }

        li {
            margin-top: -8px;
            height: 46px;
            display: inline-block;
        }

        .category {
            cursor: pointer;
            padding-left: 35px;
            padding-right: 35px;
        }

        .selected {
            border-radius: 100px;
            background: #E16565;
            color: white;
        }

        li:last-child {
            font-size: 16px;
            font-weight: 700;
            margin-left: 20px;
            margin-right: 20px;
            color: #ccc;
            cursor: pointer;
        }
    }
}
</style>