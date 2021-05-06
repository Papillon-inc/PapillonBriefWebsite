<template>
    <div class="container">
        <black-header />
        <table>
            <tr>
                <textarea v-model="markdown" />
                <div v-html="$md.render(markdown)" class="md"></div>
            </tr>
        </table>
    </div>
</template>

<script>
import BlackHeader from '~/components/BlackHeader.vue'

export default {
    components: {
        BlackHeader
    },
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

.container {
    width: 100vw;
    height: 100vh;

}
</style>