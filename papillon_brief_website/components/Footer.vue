<template>
  <div class="footer">
    <span class="copyright">@2020 Papillon, Inc</span>
    <span class="papillon">Papillon</span>
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

  .copyright {
    position: relative;
    left: 10%;
    top: 20px;
  }

  .papillon {
    position: absolute;

    right: 10%;
    top: 20px;
    text-align: right;
  }
}
</style>