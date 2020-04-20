<style src="./Heading.scss" module lang="scss"></style>
<script src="./Heading.js"></script>

<template>
  <h1
    v-if="level === '1'"
    :id="id"
    ref="heading"
    :class="[$style.heading, $style.h1, {[$style.large]: large}]"
    :name="id"
  >
    <slot />
  </h1>
  <h2
    v-else-if="level === '2'"
    :id="id"
    ref="heading"
    :class="[$style.heading, $style.h2, {[$style.large]: large}]"
    :name="id"
  >
    <slot />
  </h2>
  <h3
    v-else-if="level === '3'"
    :id="id"
    ref="heading"
    :class="[$style.heading, $style.h3, {[$style.large]: large}]"
    :name="id"
  >
    <slot />
  </h3>
</template>
