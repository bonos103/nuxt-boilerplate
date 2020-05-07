<template lang="pug">
  div(:class="$style.container")
    div
      logo
      h1(:class="$style.title")
        | fitness-salon-lp
      h2(:class="$style.subtitle")
        | My geometric Nuxt.js project
      div(:class="$style.links")
        a(href="https://nuxtjs.org/", target="_blank", :class="$style.buttonGreen")
          | Documentation
        a(
          href="https://github.com/nuxt/nuxt.js",
          target="_blank",
          :class="$style.buttonGrey",
        )
          | GitHub
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
}
</script>
<style lang="postcss" module>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.buttonGreen {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  &:hover {
    color: #fff;
    background-color: #3b8070;
  }
}

.buttonGrey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
  &:hover {
    color: #fff;
    background-color: #35495e;
  }
}
</style>
