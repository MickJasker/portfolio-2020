<style src="./Link.scss" module lang="scss"></style>
<script src="./Link.js"></script>

<template>
  <div
    :class="[$style.link]"
  >
    <router-link
      v-if="type === 'route'"
      ref="link"
      :to="to"
    >
      <slot />
    </router-link>
    <a
      v-else
      ref="link"
      :href="to"
      target="_blank"
    >
      <slot />
    </a>
  </div>
</template>
