<template>
    <div class="container">
        <black-header />
        <div class="grid">
            <div class="left-pane">
                <category-bar />
                <textarea v-model="markdown" />
            </div>
            <div class="right-pane">
                <div v-html="$md.render(markdown)" class="md"></div>
            </div>
        </div>
    </div>
</template>

<script>
import BlackHeader from '~/components/markdown_editor/BlackHeader.vue'
import CategoryBar from '~/components/markdown_editor/CategoryBar.vue'

export default {
    components: {
        BlackHeader,
        CategoryBar
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
    position: relative;
    width: 100vw;
    height: 100vh;

    .grid {
        position: relative;
        display: grid;
        grid-template-columns: 50vw;
        grid-template-rows: calc(100vh - 80px);

        .left-pane {
            grid-row: 1;
            grid-column: 1;
            background: violet;
        }

        .right-pane {
            grid-row: 1;
            grid-column: 2;
            background: yellow;
        }
    }
}
</style>