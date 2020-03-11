<style src="./Heading.scss" module lang="scss"></style>
<script src="./Heading.js"></script>

<template>
  <h1
    v-if="level === '1'"
    ref="heading"
    :class="[$style.heading, $style.h1]"
  >
    <slot />
    <span
      ref="underline"
      :class="[$style.underline]"
    />
  </h1>
  <h2
    v-else-if="level === '2'"
    ref="heading"
    :class="[$style.heading, $style.h2]"
  >
    <slot />
  </h2>
  <h3
    v-else-if="level === '3'"
    ref="heading"
    :class="[$style.heading, $style.h3]"
  >
    <slot />
  </h3>
</template>
