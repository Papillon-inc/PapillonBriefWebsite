<template>
    <div class="category-modal">
        <div class="card">
            <div class="add-category-txt">カテゴリーを追加する</div>
            <div>
                <font-awesome-icon icon="times" class="times" @click="tapped" />
            </div>
            <bold-round-text-input 
            type="text" 
            placeholder="ex: esports" 
            areaLabel="カテゴリ" 
            color="white" 
            class="input-category" 
            @text-changed="textChanged"
            />
            <purple-button class="add-category-button" content="追加" @on-click="addCategory" />
        </div>
    </div>
</template>

<script>
import BoldRoundTextInput from '~/components/BoldRoundTextInput.vue'
import PurpleButton from '~/components/PurpleButton.vue'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()

export default {
    components: {
        BoldRoundTextInput,
        PurpleButton
    },
    data() {
        return {
            categoryText: ""
        }
    },
    methods: {
        tapped() {
            this.$emit("tapped")
        },
        textChanged(text) {
            this.categoryText = text
        },
        addCategory() {
            if (this.categoryText == "") return

            db.collection("categories")
                .add({
                    name: this.categoryText
                })
                .then((docRef) => {
                    this.tapped()
                })
                .catch((e) => {
                    console.log(e)
                })
        }
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

.category-modal {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #0303038F;

    z-index: 20;

    .card {
        position: fixed;
        height: 80%;
        width: 50%;
        left: 25%;
        top: 10%;
        background: white;
        border-radius: 20px;

        .times {
            position: fixed;
            top: 15%;
            right: 28%;
            height: 40px;
            cursor: pointer;
            font-size: 26px;
            color: #ccc;
        }

        .add-category-txt {
            position: fixed;
            top: 34%;
            width: 40%;
            left: 30%;
            text-align: center;
            font-size: 42px;
            font-family: 'Roboto', sans-serif;
            font-weight: 900;
        }

        .input-category {
            position: fixed;
            top: 40%;
            width: 40%;
            left: 30%;
        }

        .add-category-button {
            position: fixed;
            top: 60%;
            left: calc(50% - 90px);
            text-align: center;
            cursor: pointer;
            border-radius: 10px;
        }
    }
}
</style>