<template>
  <div class="quotes">
    <RandomQuote />
    <pre>
      made by
      <a href="https://www.maxstouten.com" target="_blank">Max</a>
    </pre>
  </div>
</template>

<script lang="ts">
import RandomQuote from '/@/components/RandomQuote.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Hello',
  components: {
    RandomQuote
  }
})
</script>

<style lang="scss">
html {
  background: #e0e0e0;
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('./../assets/markus.png');
    background-repeat: no-repeat;
    background-position: bottom left;
    filter: invert(0.2) opacity(0.3);
  }
}
pre {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translate(-50%, -50%);
  a {
    color: #484848;
  }
}

</style>
