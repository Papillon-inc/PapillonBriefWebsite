<template>
    <div class="container">
        <div class="group">
            <span class="medium">Welcome Back</span><br>
            <span class="big">Papillon coworker</span>
            <bold-round-text-input 
            type="password" 
            placeholder="Password" 
            areaLabel="パスワード" 
            color="white" 
            class="text-input"
            @text-changed="textChanged" />
        </div>
        <purple-button class="button" content="サインイン" @on-click="signin" />
    </div>
</template>

<script>
import BoldRoundTextInput from '~/components/BoldRoundTextInput.vue'
import PurpleButton from '~/components/PurpleButton.vue'
import firebase from '~/plugins/firebase'

export default {
    data() {
        return {
            password: ""
        }
    },
    components: {
        BoldRoundTextInput,
        PurpleButton
    },
    methods: {
        signin() {
            firebase.auth()
                .signInWithEmailAndPassword("info@papillon.co.jp", this.password)
                .then((req) => {
                    sessionStorage.setItem("user_email", req.user.email)
                    alert("サインインしました")
                    this.$router.push("/md_editor")
                })
                .catch((e)=> {
                    console.log(e)
                    alert('サインイン失敗')
                })
        },
        textChanged(text) {
            this.password = text
        }
    }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

body, html {
    margin: 0;
    padding: 0;
}

.container {
    width: 100vw;
    height: 100vh;
    background: #f6f6f6;
    overflow: hidden;

    .group {
        position: relative;
        top: calc(50% - 153px);
        height: auto;
        width: 65%;
        left: 17.5%;

        .medium {
            color: #212121;
            font-family: 'Roboto', sans-serif;
            font-size: 48px;
            font-weight: bold;
        }

        .big {
            color: #7565E1;
            font-family: 'Roboto', sans-serif;
            font-size: 64px;
            font-weight: bold;
        }

        .text-input {
            width: 100%;
        }
    }

    .button {
        position: fixed;
        right: 17.5%;
        top: calc(50% + 128px);
        border-radius: 10px;
        cursor: pointer;
        text-align: center;
    }
}
</style>