<template>
  <div class="footer">
    <div>Idea source <a href="https://xdonald.k44.eu/#food"> XDonald</a></div>
    |
    <div>Icons source <a href="https://www.flaticon.com/"> Flaticon</a></div>
    |
    <div>Oryginal site <a href="https://mcdonalds.pl/"> Mc Donald's</a></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  height: 70px;
  background-color: #000;
  color: #bbb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  div {
    margin: 0 10px;

    @media (min-width: 650px) {
      margin: 0 30px;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
  }
}
</style>