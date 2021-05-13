<template>
    <div class="searchbar-container">
        <font-awesome-icon icon="search" class="search" />
        <input type="text" autocomplete="on" list="suggestion" placeholder="質問をしてみてください...">
        <datalist id="suggestion">
            <option value="候補A"></option>
            <option value="候補B"></option>
            <option value="候補C"></option>
        </datalist>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');

.searchbar-container {
    width: 100%;
    height: 100px;

    input {
        padding-left: 10%;
        width: 100%;
        height: 100px;
        font-size: 26px;
        border-radius: 100px;
        font-family: 'Noto Sans JP', sans-serif;
        border: none;
        box-shadow: 5px 5px 20px #00000029;
    }

    .search {
        display: block;
        position: absolute;
        margin-top: 36px;
        margin-left: 5%;
        width: 36px;
        height: 36px;
        color: #767676;
    }
}
</style>