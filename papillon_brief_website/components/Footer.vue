<template>
  <div class="footer">
    <div class="text">
      <span class="copyright">@2020 Papillon Inc</span>
      <!-- <font-awesome-icon :icon="['fab', 'twitter']" class="twitter" /> -->
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

  @media screen and (max-width: 600px) {
    height: 60px;
    font-size: 14px;
  }

  .text {
    position: relative;
    top: 30px;
    width: 100%;

    @media screen and (max-width: 600px) {
      top: 20px;
    }

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

      @media screen and (max-width: 600px) {
        top: 2px;
        right: 105px;
      }
    }

    .papillon {
      position: absolute;
      right: 10%;
      text-align: left;
    }
  }
}
</style>