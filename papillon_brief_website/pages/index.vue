<template>
  <div class="container">
    <Navigation class="navi"/>
    <div class="firstPanel">
      <div class="bar">
        <div class="papillon">
          <img src="~/static/image/papillon.png" class="logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/NavigationBar.vue'

export default {
  components: {
    Navigation
  }
}
</script>

<style scoped lang="scss">
.container {
  margin: 0;
  height: 2400px;

  .navi {
    position: fixed;
    top: 0;
    left: 0;

    //FIXME: 影の付け方が雑
    z-index: 2;
  }

  .firstPanel {
    position: relative;
    top: 0;
    left: 0;
    z-index: 3;

    height: 1060px;
    width: 100%;

    background: #fafafa;

    .bar {
      .papillon {
        .logo {
          position: relative;
          height: 80px;
          width: 80px;
        }
      }
      .papillon:after {
        content: "Papillon";
        position: absolute;
        top: 16px;
        margin-left: 5px;

        font-weight: 900;
        font-size: 36px;
        font-family: 'Roboto', sans-serif;
        color: #212121;
      }
    }
  }
}
</style>
