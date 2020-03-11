<style src="./PortfolioOverview.scss" module lang="scss"></style>
<script src="./PortfolioOverview.js"></script>

<template>
  <main :class="[$style.portfolioOverview]">
    <Hero
      :class="$style.hero"
      subtitle="Portfolio"
      :image="{
        x3: require('../../asset/image/berlin@3x.jpg'),
        x2: require('../../asset/image/berlin@2x.jpg'),
        src: require('../../asset/image/berlin.jpg'),
      }"
    >
      Mijn Werk<span class="highlight">.</span>
    </Hero>
    <Search :class="$style.search" />
    <div :class="$style.container">
      <section
        v-for="(category, index) in data.portfolio.categories"
        :key="`category-${category.title}-${index}`"
        :class="$style.category"
      >
        <h1>{{ category.title }}</h1>
        <ArticleList
          v-for="(subcategory, index2) in category.subcategories"
          :key="`subcategory-${subcategory.title}-${index2}`"
          :ref="`subcategory-${subcategory.title}-${index2}`"
          :title="subcategory.title"
          :parent-category="category.title"
          :articles="subcategory.articles"
          :img="subcategory.img"
          @isReady="handleScrollComponentReady"
        />
      </section>
    </div>
  </main>
</template>
