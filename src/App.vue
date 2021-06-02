<template>
  <div class="">
    <h3>{{ coupon }}</h3>
    <img :src="require(`./assets/${coupon}.png`)" :alt="coupon" />
    <!-- component -->
    <div class="buttons">
      <button
        v-for="coup in coupons"
        :key="coup"
        @click="changeCoupon(coup)"
        :class="coup === coupon ? 'active' : ''"
      >
        {{ coup }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Coupon from "@/types/Coupon";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const coupon = ref<Coupon>("hamburger");
    const date = ref<string>(new Date().toDateString());

    const changeCoupon = (type: Coupon) => (coupon.value = type);

    return { coupon, date, changeCoupon };
  },
  data() {
    return {
      coupons: ["cheeseburger", "frytki", "hamburger", "lody"] as Coupon[],
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.buttons {
  button.active {
    padding: 10px 20px;
  }
}
</style>
