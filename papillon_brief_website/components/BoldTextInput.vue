<template>
    <div class="container">
        <input :type="type" :placeholder="placeholder" :area-label="areaLabel" :style="{background: color}" />
    </div>
</template>

<script>
export default {
    props: {
        "type": {
            type: String,
            required: false,
            'default': "text"
        },
        "placeholder": String,
        "areaLabel": String,
        "color": {
            type: String,
            required: false
        }
    }
}
</script>

<style scoped lang="scss">
input {
  margin-top: 18px;
  width: 100%;
  height: 86px;
  font-size: 32px;
  padding-left: 30px;
  background: #f6f6f6;
  border: none;

  @media screen and (max-width: 1000px) {
    height: 50px;
    font-size: 20px;
  }

  @media screen and (max-width: 600px) {
    margin-top: 14px;
    height: 30px;
    padding-left: 15px;
    padding-left: 5%;
    font-size: 14px;
  }
}
</style>