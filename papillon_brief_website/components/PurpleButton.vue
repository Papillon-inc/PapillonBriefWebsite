<template>
    <div class="button" @click="onClick">
        {{ content }}
    </div>
</template>

<script>
export default {
    props: {
        "content": {
            type: String,
            required: false,
            'default': "投稿"
        }
    },
    methods: {
        onClick() {
            this.$emit('on-click')
        }
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

.button {
    background: #7565E1;
    width: 180px;
    height: 48px;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    line-height: 48px;
}
</style>