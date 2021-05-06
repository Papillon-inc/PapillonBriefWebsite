<template>
    <div class="category_bar">
        <ul>
            <li>カテゴリー：<li>
            <li>Cat1</li>
            <li>Cat2</li>
            <li>Cat1</li>
            <li>Cat2</li>
            <li>Cat1</li>
            <li>Cat2</li>
            <li>Cat1</li>
            <li>Cat2</li>
            <li>Cat1</li>
            <li>Cat2</li>
            <li>Cat1</li>
            <li>Cat2</li>
            <li>Cat1</li>
            <li>Cat2</li>
            <li>Cat1</li>
            <li>Cat2</li>
            <li>Cat1</li>
            <li>Cat2</li>
            <li>Cat1</li>
            <li>Cat2</li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
.category_bar {
    height: 64px;
    width: 100%;
    background: violet;
    color: #212121;
    font-size: 24px;
    line-height: 64px;
    scrollbar-width: none;

    padding-left: 30px;

    ul {
        display: inline;
        overflow-x: scroll;
        white-space: nowrap;

        li {
            display: inline-block;
        }
    }
}
</style>