<template>
  <transition name="fade">
    <div class="quote">
      <div v-if="is">

      </div>
      <div class="quote__svg--top quote__svg">
        <img src="./../assets/quote.svg" alt="quote" />
      </div>
      <p class="quote__quote">
        {{ randomQuote.quote }}
      </p>
      <p class="quote__author">
        {{ randomQuote.author }}
      </p>
      <div class="quote__svg--bottom quote__svg">
        <img src="./../assets/quote.svg" alt="quote" />
      </div>
    </div>
  </transition>
  <button @click="SET_RANDOM_QUOTE">Random quote</button>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, onUnmounted } from 'vue'
import { useStore } from '/@/store'

export default defineComponent({
  name: 'RandomQuote',
  setup(data) {
    const store = useStore()
    const count = computed(() => store.getters.countString)
    const quotes = computed(() => store.getters.getQuotes)
    const randomQuote = computed(() => store.getters.getRandomQuote)
    const { increment } = store.commit
    const { fetchMovies } = store.dispatch
    const { SET_RANDOM_QUOTE } = store.commit

    onMounted(() => {
      console.log(quotes)
      fetchMovies()
    })
    onMounted(() => {
      setTimeout(() => {
        console.log(randomQuote)
        SET_RANDOM_QUOTE()
      }, 600)
    })

    return {
      count,
      increment,
      quotes,
      fetchMovies,
      SET_RANDOM_QUOTE,
      randomQuote
    }
  }
})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

button {
  text-transform: uppercase;
  padding: 12px;
  color: #484848;
  position: relative;
  z-index: 3;
  cursor: pointer;
  transition: all .4s ease-in;
  border: 1px solid #484848;
  border-radius: 2px;
  &:hover {
    background: #484848;
    color: #e0e0e0;
    border: 1px solid #e0e0e0;
  }
}

.quote {
  max-width: 400px;
  min-height: 200px;
  padding: 2rem 3rem;
  margin: 1rem 1rem 5rem 1rem;
  position: relative;
  @media (min-width: 992px) {
    min-width: 400px;
  }
  &__quote {
    font-size: 1.2rem;
    line-height: 32px;
  }
  &__author {
    margin-top: 3rem;
    font-style: italic;
  }
  &__svg {
    width: 25px;
    fill: darkgrey;
    position: absolute;
    color: darkgrey;
    &--top {
      top: 5px;
      right: 25px;
    }
    &--bottom {
      bottom: 40px;
      left: 25px;
      transform: rotateY(180deg);
    }
  }
}
</style>
