<template>
  <div class="navigationBar">
    <div class="papillonPos">
      <img src="~/static/image/papillon.png" class="papillonImg" alt="papillon" />
    </div>
    <div class="menu">
      <span class="product" @click="product">Product</span>
      <span class="news" @click="news">News</span>
      <span class="contact" @click="contact">Contact</span>
      <span class="info" @click="information">Information</span>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    product: function(){
      this.$emit("product")
    },

    news: function(){
      this.$emit("news")
    },

    contact: function(){
      this.$emit("contact")
    },

    information: function(){
      this.$emit("information")
    }
  },
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

.navigationBar {
  height: 80px;
  width: 100%;

  background: white;
  box-shadow: #dbdbdb 2px 2px 2px;

  @media screen and (max-width: 600px){
    display: none;
  }

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
      font-weight: 500;
      font-family: 'Roboto', sans-serif;
      text-align: right;
      cursor: pointer;
    }

    .product:hover {
      text-decoration: underline #7565E1 3px;
      text-decoration-skip-ink: none;
    }

    .news {
      position: relative;
      top: -36px;
      right: 20px;
      font-size: 24px;
      font-weight: 500;
      font-family: 'Roboto', sans-serif;
      text-align: right;
      cursor: pointer;
    }

    .news:hover {
      text-decoration: underline #7565E1 3px;
      text-decoration-skip-ink: none;
    }

    .contact {
      position: relative;
      right: 10px;
      top: -36px;
      font-size: 24px;
      font-weight: 500;
      font-family: 'Roboto', sans-serif;
      text-align: right;
      cursor: pointer;
    }

    .contact:hover {
      text-decoration: underline #7565E1 3px;
      text-decoration-skip-ink: none;
    }

    .info {
      position: relative;
      top: -36px;
      font-size: 24px;
      font-weight: 500;
      font-family: 'Roboto', sans-serif;
      text-align: right;
      cursor: pointer;
    }

    .info:hover {
      text-decoration: underline #7565E1 3px;
      text-decoration-skip-ink: none;
    }
  }
}
</style>