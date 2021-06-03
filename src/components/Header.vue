<template>
  <header>
    <img src="../assets/icons/mcdonald.svg" width="60" alt="Mc Donald's logo" />
    <h1>Mc Donal Coupon Generator</h1>

    <div class="links">
      <a
        v-for="social in socials"
        :key="social.id"
        :href="social.url"
        target="_blank"
      >
        <img
          :src="social.img_src"
          :alt="social.name"
          width="22"
          :title="social.name"
        />
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import socialMediaData from "@/data/socialmedia";

export default defineComponent({
  name: "Header",

  setup() {
    const socials = [...socialMediaData];
    return { socials };
  },
});
</script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;

  @media (min-width: 720px) {
    padding: 10px 30px;
  }

  h1 {
    font-weight: 600;
    margin: 0;
    font-size: 20px;

    @media (min-width: 670px) {
      transform: translateX(40px);
    }

    @media (min-width: 750px) {
      font-size: 32px;
    }
  }
}

.links {
  display: none;

  @media (min-width: 670px) {
    display: block;
  }
  a {
    margin: 0 5px;
  }
}
</style>