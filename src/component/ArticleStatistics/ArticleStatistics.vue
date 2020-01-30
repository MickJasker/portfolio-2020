<style src="./ArticleStatistics.scss" module lang="scss"></style>
<script src="./ArticleStatistics.js"></script>

<template>
  <section :class="[$style.articleStatistics]">
    <time class="transition-in" :class="$style.readTime">
      {{ readTime }}<sub>min</sub>
    </time>
    <time
      class="transition-in"
      :class="$style.publishDate"
      :datetime="publishDate"
    >{{ formattedDate }}</time>
    <div
      class="transition-in"
      :class="$style.author"
    >
      <img
        :src="author.img"
        :alt="author.name"
      >
      <h2>{{ author.name }}</h2>
    </div>
  </section>
</template>
