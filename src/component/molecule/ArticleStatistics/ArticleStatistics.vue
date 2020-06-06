<style src="./ArticleStatistics.scss" module lang="scss"></style>
<script src="./ArticleStatistics.js"></script>

<template>
  <section :class="[$style.articleStatistics]">
    <span
      class="transition-in"
      :class="$style.readTime"
    >
      {{ readTime }}<sub>woorden</sub>
    </span>
<!--    <time-->
<!--      class="transition-in"-->
<!--      :class="$style.publishDate"-->
<!--      :datetime="publishDate"-->
<!--    >{{ formattedDate }}</time>-->
    <div
      class="transition-in"
      :class="$style.authorContainer"
    >
      <div
        v-for="author in authors"
        :key="author.name"
        ref="author"
        :class="$style.author"
      >
        <div :class="$style.imgWrapper">
          <img
            :src="$versionRoot + author.img"
            :alt="author.name"
          >
        </div>
        <h2 :class="$style.authorLabel">
          <span :class="$style.content">
            {{ author.name }}
          </span>
        </h2>
      </div>
    </div>
  </section>
</template>
