<style src="./ArticleList.scss" module lang="scss"></style>
<script src="./ArticleList.js"></script>

<template>
  <section :class="[$style.articleList]">
    <div :class="$style.column">
      <Heading
        ref="heading"
        :class="[$style.heading]"
        level="1"
      >
        {{ title }}
      </Heading>
      <ul>
        <li
          v-for="(article, index) in articles"
          :key="`${parentCategory}-${title}-${article.title}-${index}}`"
          ref="articleListItem"
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
        ref="image"
        :src="$versionRoot + img"
        :alt="title"
      >
    </div>
  </section>
</template>
