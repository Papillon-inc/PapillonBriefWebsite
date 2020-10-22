<template>
  <div class="footer">
    <div class="text">
      <span class="copyright">@2020 Papillon, Inc</span>
      <font-awesome-icon :icon="['fab', 'twitter']" class="twitter" />
      <span class="papillon">@Papillon</span>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

.footer {
  height: 100px;
  width: 100%;

  background: black;
  color: white;
  font-size: 24px;
  font-family: 'Roboto', sans-serif;

  .text {
    position: relative;
    top: 30px;
    width: 100%;

    .copyright {
      position: absolute;
      left: 10%;
      text-align: left;
    }

    .twitter {
      position: absolute;
      top: 5px;
      right: calc(10% + 110px);
      text-align: right;
    }

    .papillon {
      position: absolute;
      right: 10%;
      text-align: left;
    }
  }
}
</style>