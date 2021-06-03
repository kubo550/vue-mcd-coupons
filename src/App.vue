<template>
  <div v-if="isGenerating" class="app">
    <Header />
    <div class="food-logo">
      <img src="./assets/icons/food.png" alt="food logo" />
    </div>

    <Coupons :coupons="coupons" :coupon="coupon" :changeCoupon="changeCoupon" />

    <Days :days="days" :date="date" :changeDay="changeDay" />

    <h4 class="step">> Generuj</h4>
    <div class="generate-btn" @click="generate">Generuj Kupon</div>

    <Footer />
  </div>

  <Result v-else :date="date" :coupon="coupon" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { couponsData, daysData } from "@/data/generator";

import Header from "@/components/Header.vue";
import Coupons from "@/components/Coupons.vue";
import Days from "@/components/Days.vue";
import Result from "@/components/Result.vue";
import Footer from "@/components/Footer.vue";

import Coupon from "@/types/Coupon";
import Day from "@/types/Day";

export default defineComponent({
  name: "App",
  components: {
    Coupons,
    Header,
    Days,
    Result,
    Footer,
  },
  setup() {
    const isGenerating = ref(true);
    const coupon = ref<Coupon>("hamburger");
    const date = ref<Day>("wczoraj");

    const changeCoupon = (type: Coupon) => (coupon.value = type);
    const changeDay = (day: Day) => (date.value = day);
    const generate = () => (isGenerating.value = false);

    return { coupon, date, changeCoupon, changeDay, isGenerating, generate };
  },
  data() {
    return {
      coupons: couponsData,
      days: daysData,
    };
  },
});
</script>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  background-color: rgb(252, 241, 183);
  min-height: 100vh;
}
.food-logo {
  text-align: center;
  margin-bottom: 40px;
  img {
    width: 120px;
    animation: animate 2s ease-in-out infinite alternate;

    @media (min-width: 720px) {
      width: 240px;
    }
  }
}

.buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 42%;
  min-width: 400px;
  margin: 0 auto;

  button {
    background-color: #ffbc0d;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    border-radius: 20px;
    border: none;
    outline: none;
    font-size: 0.96rem;
    font-weight: 600;
    margin: 6px 8px;
    text-transform: uppercase;
    box-shadow: 0 2px 2px 1px #645e0252;

    &:hover,
    &:active,
    &:focus {
      cursor: pointer;
      box-shadow: 0 2px 2px 1px #1cf30052;
    }

    &.active {
      box-shadow: 0 3px 3px 1px #1cf300;
    }
  }
}

.step {
  color: #222;
  letter-spacing: 2px;
  text-align: center;
}

.generate-btn {
  width: 180px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
  margin: 10px auto 18px;

  box-shadow: inset 0px 1px 0px 0px #f9eca0;
  background: linear-gradient(to bottom, #f0c911 5%, #f2ab1e 100%);
  background-color: #f0c911;
  border-radius: 6px;
  border: 1px solid #e65f44;
  cursor: pointer;
  color: #c92200;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ded17c;

  &:hover,
  &:focus {
    background: linear-gradient(to bottom, #f2ab1e 5%, #f0c911 100%);
    background-color: #f2ab1e;
  }

  &:active {
    position: relative;
    top: 1px;
  }
}

@keyframes animate {
  0% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(30px);
  }
}
</style>
