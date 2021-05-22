<template>
    <div class="help-cards-container">
        <div class="cards">
            <nuxt-link to="/help">
                <span class="card">
                    <img src="~/static/image/help/logo-only.png" alt="e-players-logo" />
                    e-playersとは？
                </span>
            </nuxt-link>
            <nuxt-link to="/help/organizer">
                <span class="card">
                    <img src="~/static/image/help/world.png" alt="world" />
                    主催者スタートガイド
                </span>
            </nuxt-link>
            <nuxt-link to="/help/organizer">
                <span class="card">
                    <img src="~/static/image/help/controller.png" alt="controller" />
                    参加者スタートガイド
                </span>
            </nuxt-link>
            <span class="card">
                <img src="~/static/image/help/question.png" alt="question" />
                よくある質問
            </span>
            <span class="card">
                <img src="~/static/image/help/team.png" alt="team" />
                さまざまなヒント
            </span>
        </div>
    </div>
</template>

<script>
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap');

.help-cards-container {
    .cards {
        position: relative;
        margin-top: 50px;
        margin-left: 3%;
        height: 260px;
        width: 96%;
        //background: magenta;
        margin-bottom: 200px;

        .card {
            display: inline-block;
            position: relative;
            width: 18%;
            height: 100%;
            margin-right: 1%;
            border-radius: 30px;

            color: #212121;
            font-size: 24px;
            font-weight: 500;
            font-family: 'Noto Sans JP', sans-serif;
            text-align: center;
            line-height: 430px;

            background: white;
            box-shadow: 0px 3px 3px #00000029;
            cursor: pointer;

            img {
                position: absolute;
                bottom: 30%;
                width: 56%;
                left: 22%;
            }
        }
    }
}
</style>