<template>
  <div class="navigationBar">
    <div class="papillonPos">
      <img src="~/static/image/papillon.png" class="papillonImg" />
    </div>
    <div class="menu">
      <span class="product">Product</span>
      <span class="news">News</span>
      <span class="contact">Contact</span>
      <span class="info">Company Info</span>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

.navigationBar {
  height: 80px;
  width: 100%;

  background: white;
  box-shadow: #dbdbdb 2px 2px 2px;

  .papillonPos {
    position: relative;
    left: 20%;
    top: 10px;

    .papillonImg {
      height: 60px;
      width: 60px;
    }
  }

  .papillonPos::after {
    content: "Papillon";
    position: absolute;
    top: 16px;
    margin-left: 5px;

    font-weight: 900;
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    color: #212121;
  }

  .menu {
    position: absolute;
    right: 10%;
    color: #767676;

    .product {
      position: relative;
      top: -36px;
      right: 30px;
      font-size: 24px;
      text-align: right;
    }

    .news {
      position: relative;
      top: -36px;
      right: 20px;
      font-size: 24px;
      text-align: right;
    }

    .contact {
      position: relative;
      right: 10px;
      top: -36px;
      font-size: 24px;
      text-align: right;
    }

    .info {
      position: relative;
      top: -36px;
      font-size: 24px;
      text-align: right;
    }
  }
}
</style>