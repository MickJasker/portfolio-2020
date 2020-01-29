<style src="./ArticleHighlight.scss" module lang="scss"></style>
<script src="./ArticleHighlight.js"></script>

<template>
  <section :class="$style.articleHighlight">
    <main>
      <h1 ref="title">Algemene Reflectie</h1>
      <p ref="copy">
        When I started this minor after a fantastic summer break, I was highly motivated and
        super excited about what was to come.
        <br><br>
        Unfortunately, this minor was not entirely what I expected and not what I was…
      </p>
      <div class="cta-wrapper" ref="cta">
        <Button
          inverted
          to="/article/general-reflection"
          copy="Lees meer"
        />
      </div>
    </main>
  </section>
</template>
