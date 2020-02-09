<style src="./App.scss" module lang="scss"></style>
<script src="./App.js"></script>

<template>
  <div :class="[$style.app]">
    <NavigationMenu />
    <transition @leave="onLeave">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>
