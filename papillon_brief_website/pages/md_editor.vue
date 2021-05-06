<template>
    <div class="container">
        <div v-html="$md.render(markdown)"></div>
    </div>
</template>

<script>
export default {
    computed: {
        markdown: function() {
            const md = `
# asdfasa  
## asdfasdfadfasdfa
  `
            return md
        }
    }
}
</script>

<style scoped lang="scss">
</style>