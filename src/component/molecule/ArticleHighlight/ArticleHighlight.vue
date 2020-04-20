<style src="./ArticleHighlight.scss" module lang="scss"></style>
<script src="./ArticleHighlight.js"></script>

<template>
  <section :class="$style.articleHighlight">
    <main>
      <h1 ref="title">
        Leeswijzer project – LeesGeest
      </h1>
      <p ref="copy">
        Stichting ‘Ik Wil’ biedt hulp aan de bewoners van de wijk. Het doel van de stichting is er
        voor zorgen dat de buurtbewoners elkaar gaan helpen en de stichting zelf overbodig worden.
        De opdracht voor ons is: Ontwerp een platform om lokale bewoners in aandachtswijken in staat
        te stellen elkaar te helpen om minder dagelijkse problemen te hebben. Op dit moment wordt er
        namelijk vooral hulp aangeboden vanuit de stichting zelf. Wanneer de buurtbewoners elkaar
        gaan helpen zorgt dit voor meer sociaal contact en kan de hulp komen vanuit de mensen zelf.
      </p>
      <div
        ref="cta"
        class="cta-wrapper"
      >
        <Button
          inverted
          to="/portfolio/stichting-ik-wil/overig/leeswijzer"
          copy="Lees meer"
        />
      </div>
    </main>
  </section>
</template>
