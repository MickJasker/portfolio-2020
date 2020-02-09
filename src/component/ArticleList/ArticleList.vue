<style src="./ArticleList.scss" module lang="scss"></style>
<script src="./ArticleList.js"></script>

<template>
  <section :class="[$style.articleList]">
    <div :class="$style.column">
      <h1>{{ title }}</h1>
      <ul>
        <li
          v-for="(article, index) in articles"
          :key="`articles-${title}-${article.title}-${index}`"
        >
          <router-link
            :to="{ name: RouteNames.ARTICLE, params: { category: createRouterString(parentCategory), subcategory: createRouterString(title), title: createRouterString(article.title) }}"
          >
            {{ article.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <div :class="[$style.column, $style.img]">
      <img
        :src="img"
        :alt="title"
      >
    </div>
  </section>
</template>
