<template>
  <p>Dzień dobry,</p>
  <p>
    Przesyłamy kupon McDonald's w podziękowaniu za wzięcie udziału w ankiecie.
  </p>
  <p>
    <strong>DATA WYDANIA:</strong> <span> {{ actualDate }} </span>
  </p>
  <p>
    <strong>UNIKALNY KOD:</strong> <span> {{ uniqueCode }} </span>
  </p>
  <img
    :src="require(`../assets/coupons/${coupon}.png`)"
    alt="Wróć na stronę główna i dokonaj ponownego wyboru jeśli problem dalej występuje twoja przeglądarka nie obsługuje JavaScript lub nie masz połączenia z siecią"
  />

  <div>
    Kupon ten upoważnia do jednokrotnego odbioru produktu gratis przy kolejnym
    dowolnym zakupie z oferty klasycznej. Kupon ważny jest przez 7 dni od czasu
    jego wygenerowania i może być zrealizowany w dowolnej restauracji McDonald’s
    w Polsce z wyłączeniem restauracji znajdujących się na terenie Portu
    Lotniczego im. Fryderyka Chopina w Warszawie oraz Portu Lotniczego im. Lecha
    Wałęsy w Gdańsku. Szczegółowy regulamin ankiety „Opinia Gości” znajduje się
    na stronie
    <a
      href="http://62zt.mjt.lu/lnk/AM8AAD6TDwcAAAAAAAAAAI6VDSwAAAAc3d8AAAAAAAwYhQBc9Z51UliYp8_kRviBf-haxGfMRQAHKaM/1/H_gVqGi_Nd7AdmeieWY-iA/aHR0cDovL3d3dy5tY2RvbmFsZHMucGw"
      rel="noreferrer"
      target="_blank"
    >
      www.mcdonalds.pl
    </a>
    w sekcji
    <a
      href="http://62zt.mjt.lu/lnk/AM8AAD6TDwcAAAAAAAAAAI6VDSwAAAAc3d8AAAAAAAwYhQBc9Z51UliYp8_kRviBf-haxGfMRQAHKaM/2/rpoC4TU9YNTKJaBXy3oEZA/aHR0cHM6Ly9tY2RvbmFsZHMucGwvby1tY2RvbmFsZHMvcmVndWxhbWlueQ"
      rel="noreferrer"
      target="_blank"
    >
      Regulaminy
    </a>
  </div>
  <p>Dziękujemy za wzięcie udziału w badaniu!</p>
</template>

<script lang="ts">
import { daysData } from "@/data/generator";
import { getUniqeCode, generateLast7Days } from "../utils/result";
import Coupon from "@/types/Coupon";
import Day from "@/types/Day";

import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Result",
  props: {
    coupon: {
      required: true,
      type: String as PropType<Coupon>,
    },
    date: {
      required: true,
      type: String as PropType<Day>,
    },
  },
  setup(props) {
    const idx = daysData.findIndex((day) => day === props.date);
    const last7days = generateLast7Days();
    const actualDate = last7days[idx];

    const uniqueCode = getUniqeCode();

    return {
      actualDate,
      uniqueCode,
    };
  },
});
</script>

<style >
</style> 