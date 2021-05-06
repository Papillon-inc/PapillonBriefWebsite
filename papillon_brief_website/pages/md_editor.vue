<template>
    <div class="container">
        <textarea v-model="markdown" />
        <div v-html="$md.render(markdown)"></div>
    </div>
</template>

<script>
export default {
    data() {
        const markdown = `
# AASDF
## asdf
`
        return {
            markdown
        }
    }
}
</script>

<style scoped lang="scss">
</style>