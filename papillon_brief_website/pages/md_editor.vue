<template>
    <div class="container">
        <black-header />
        <div class="grid">
            <div class="left-pane">
                <category-bar />
                <div class="txt-content">
                    <div class="title">
                        <input type="text" placeholder="タイトル" />
                    </div>
                    <textarea v-model="markdown" placeholder="本文" />
                </div>
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
            background: #1f1f1f;

            .txt-content {
                padding-left: 50px;
                padding-right: 50px;
                height: calc(100% - 64px);

                .title {
                    height: 80px;
                    width: 100%;
                    
                    input {
                        height: 80px;
                        width: 100%;
                        font-size: 36px;
                        border: none;
                        background: #1F1F1F;
                        color: white;
                    }

                    input:focus {
                        outline: none;
                    }
                }

                textarea {
                    margin-top: 20px;
                    position: relative;
                    height: calc(100% - 100px);
                    width: 100%;
                    resize: none;
                    background: #1F1F1F;
                    border: none;
                    color: white;
                    font-size: 24px;
                }

                textarea:focus {
                    outline: none;
                }
            }
        }

        .right-pane {
            grid-row: 1;
            grid-column: 2;
            background: yellow;
        }
    }
}
</style>