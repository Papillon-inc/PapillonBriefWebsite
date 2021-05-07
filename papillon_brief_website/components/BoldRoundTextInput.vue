<template>
    <div class="container">
        <input 
        :type="type" 
        :placeholder="placeholder" 
        :area-label="areaLabel" 
        :style="{background: color}" 
        v-model="text"
        />
    </div>
</template>

<script>
export default {
    data() {
      return {
        text: ""
      }
    },
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
    },
    watch: {
      text: function() {
        this.$emit("text-changed", this.text)
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
  border: 2px solid #dbdbdb;
  border-radius: 10px;

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

input:focus {
  outline: none;
}
</style>