<template>
  <div class="">
    <h4 class="step">> Wybierz kupon</h4>
    <div class="buttons">
      <button
        v-for="coup in coupons"
        :key="coup"
        @click="changeCoupon(coup)"
        :class="coup === coupon && 'active'"
      >
        {{ coup }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Coupon from "@/types/Coupon";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Coupons",
  props: {
    coupons: {
      required: true,
      type: Array as PropType<Coupon[]>,
    },
    coupon: {
      required: true,
      type: String as PropType<Coupon>,
    },
    changeCoupon: {
      required: true,
      type: Function as PropType<(coup: Coupon) => void>,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
</style>