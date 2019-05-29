<script>
import HeaderBar from "../components/Header.vue";
import SideBar from "../components/SideBar.vue";
import FooterBar from "../components/Footer.vue";
export default {
  components: {
    HeaderBar,
    SideBar,
    FooterBar
  }
};
</script>

<template>
  <div>
    <header-bar/>
    <div class="container section">
      <div class="columns">
        <div class="column is-8">
          <slot />
        </div>

        <div class="column is-4">
          <side-bar />
        </div>
      </div>
    </div>

    <footer-bar />
  </div>
</template>