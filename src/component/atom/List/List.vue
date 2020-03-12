<style src="./List.scss" module lang="scss"></style>
<script src="./List.js"></script>

<template>
  <div :class="[$style.list]">
    <ul v-if="type === 'unordered'">
      <li
        v-for="(item, index) in items"
        :key="`list-${item}-${index}`"
        ref="listItem"
      >
        <span :class="$style.content">
          {{ item }}
        </span>
      </li>
    </ul>
    <ol v-if="type === 'ordered'">
      <li
        v-for="(item, index) in items"
        :key="`list-${item}-${index}`"
        ref="listItem"
      >
        <span :class="$style.content">
          {{ item }}
        </span>
      </li>
    </ol>
  </div>
</template>
