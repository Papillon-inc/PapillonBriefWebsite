<template>
    <div class="black-header">
        <span class="txt">株式会社Papillon</span>
        <purple-button class="purple-button" @on-click="onClick"/>
    </div>
</template>

<script>
import PurpleButton from '~/components/PurpleButton.vue'

export default {
    components: {
        PurpleButton
    },
    methods: {
        onClick() {
            this.$emit("on-click")
        }
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

.black-header {
    position: relative;
    height: 80px;
    width: 100%;
    background: black;
    color: white;
    font-size: 26px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;

    padding-left: 70px;
    line-height: 80px;
    border: none;

    .txt {
        position: absolute;
    }

    .purple-button {
        top: 16px;
        position: absolute;
        right: 60px;
        border-radius: 10px;
        text-align: center;
        cursor: pointer;
    }
}
</style>