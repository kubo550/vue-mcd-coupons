<template>
  <div class="">
    <h4 class="step">> Wybierz dzień na kuponie</h4>
    <div class="buttons">
      <button
        v-for="day in days"
        :key="day"
        @click="changeDay(day)"
        :class="day === date && 'active'"
      >
        {{ day }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Day from "@/types/Day";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    days: {
      required: true,
      type: Array as PropType<Day[]>,
    },
    date: {
      required: true,
      type: String as PropType<Day>,
    },
    changeDay: {
      required: true,
      type: Function as PropType<(day: Day) => void>,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>