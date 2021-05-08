<template>
    <div class="container">
        <category-modal class="cat-modal" @tapped="hideModal" />
        <black-header @on-click="post" />
        <div class="grid">
            <div class="left-pane">
                <category-bar class="cate" @plus-tapped="showModal" @category-selected="onCategorySelected" />
                <div class="txt-content">
                    <div class="title">
                        <input type="text" placeholder="タイトル" v-model="titleStr" />
                    </div>
                    <textarea v-model="markdown" placeholder="本文" class="md-editor" />
                </div>
            </div>
            <div class="right-pane">
                <div class="title">
                    {{ titleStr }}
                </div>
                <div v-html="$md.render(markdown)" class="md"></div>
            </div>
        </div>
    </div>
</template>

<script>
import BlackHeader from '~/components/markdown_editor/BlackHeader.vue'
import CategoryBar from '~/components/markdown_editor/CategoryBar.vue'
import CategoryModal from '~/components/markdown_editor/CategoryModal.vue'
import firebase from "~/plugins/firebase.js"

const db = firebase.firestore()

export default {
    components: {
        BlackHeader,
        CategoryBar,
        CategoryModal
    },
    data() {
        return {
            markdown: "",
            titleStr: "",
            selectedCategory: "",
        }
    },
    methods: {
        showModal() {
            const modal = document.getElementsByClassName("cat-modal")[0]
            modal.style.display = "block"
        },
        hideModal() {
            const modal = document.getElementsByClassName("cat-modal")[0]
            modal.style.display = "none"
        },
        post() {
            if (this.selectedCategory == "" ) {
                alert("カテゴリを選んでください")
                return
            }

            if (this.titleStr == "") {
                alert("タイトルを入れてください")
                return
            }

            if (this.markdown == "") {
                alert("本文を入れてください")
                return
            }

            db.collection("articles")
                .add({
                    title: this.titleStr,
                    text: this.markdown,
                    date: new Date(),
                    category: this.selectedCategory
                })
                .then((docRef) => {
                    alert("投稿しました")
                    this.$router.push("/news")
                })
                .catch((e) => {
                    console.log(e)
                })
        },
        onCategorySelected(selectedCategory) {
            this.selectedCategory = selectedCategory
        }
    },
    mounted() {
        const mdEditor = document.getElementsByClassName("md-editor")[0]
        mdEditor.addEventListener('paste', (event) => {
            if (!event.clipboardData) return
            if (!event.clipboardData.types) return
            if (event.clipboardData.types.length != 2) return
            if (event.clipboardData.types[1] != "Files") return

            const image = event.clipboardData.items[1].getAsFile()
            const fileReader = new FileReader()
            fileReader.onload = (e) => {
                console.log(e.target.result)
            }
            fileReader.readAsDataURL(image)
        })
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

.container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    background: #fafafa;

    .cat-modal {
        width: 100%;
        height: 100%;
        display: none;
    }

    .grid {
        position: relative;
        display: grid;
        grid-template-columns: 50vw;
        grid-template-rows: calc(100vh - 80px);

        .left-pane {
            grid-row: 1;
            grid-column: 1;
            background: #1f1f1f;
            box-shadow: 5px 5px 20px #00000029;
            z-index: 10;

            .cate {
                overflow-x: scroll;
            }

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
            background: #FAFAFA;
            padding: 60px;
            overflow-y: scroll;

            .title {
                font-weight: 500;
                color: #212121;
                font-size: 36px;
                font-family: 'Roboto', sans-serif;
            }

            .md {
                margin-top: 50px;
                color: #212121;
                font-size: 24px;
                font-family: 'Roboto', sans-serif;
            }
        }
    }
}
</style>