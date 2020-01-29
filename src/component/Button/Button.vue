<style src="./Button.scss" module lang="scss"></style>
<script src="./Button.js"></script>

<template>
  <router-link
    v-if="to"
    :to="to"
    :class="[$style.anchor]"
  >
    <button :class="[$style.button, { [$style.inverted]: inverted, }]">
      {{ copy }}
    </button>
  </router-link>
  <button
    v-else
    :class="[$style.button, { [$style.inverted]: inverted, }]"
  >
    {{ copy }}
  </button>
</template>
