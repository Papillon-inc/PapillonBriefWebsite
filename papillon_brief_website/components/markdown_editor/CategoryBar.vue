<template>
    <div class="category_bar">
        <ul>
            <li>カテゴリー：<li>
            <li v-for="(n, i) in categories" :key="n" class="category" @click="selectCategory(i)">
                {{ n }}
            </li>
            <li @click="tapPlus">+</li>
        </ul>
    </div>
</template>

<script>
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
let categoryRef

export default {
    data() {
        return {
            categories: [],
            selectedCategory: ""
        }
    },
    methods: {
        selectCategory(n) {
            const selectedCategories = document.getElementsByClassName('selected')
            if (selectedCategories.length > 0) {
                const selectedCategory = selectedCategories[0]
                selectedCategory.classList.remove("selected")
            }

            const firstCategory = document.getElementsByClassName('category')[n]
            firstCategory.classList.add("selected")
            this.selectedCategory = firstCategory.innerText
        },
        tapPlus() {
            this.$emit('plus-tapped')
        }
    },
    watch: {
        selectedCategory: function() {
            this.$emit("category-selected", this.selectedCategory)
        }
    },
    mounted() {
        categoryRef = db.collection("categories")
        categoryRef.get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const data = doc.data()
                    this.categories.push(data.name)
                })
            })
            .catch((e) => {
                console.log(e)
            })
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
            transition: 0.2s;
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