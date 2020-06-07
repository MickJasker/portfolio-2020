<style src="./ArticleHighlight.scss" module lang="scss"></style>
<script src="./ArticleHighlight.js"></script>

<template>
  <section :class="$style.articleHighlight">
    <main>
      <h1 ref="title">
        Leeswijzer project – PIDZ
      </h1>
      <p ref="copy">
        In 2019 waren er ruim 1.1 miljoen zzp’ers op de arbeidsmarkt. Het CBS voorspelt dat dit
        aantal in 2020 alleen maar toe zal nemen. Deze zelfstandigen zitten in alle sectoren van de
        arbeidsmarkt. Zo ook in de zorg. Er zijn verschillende platformen die bemiddelen in klussen
        voor zzp’ers in de zorg. PIDZ is een van deze bemiddelaars.
      </p>
      <div
        ref="cta"
        class="cta-wrapper"
      >
        <Button
          inverted
          to="/portfolio/pidz/overig/leeswijzer"
          copy="Lees meer"
        />
      </div>
    </main>
  </section>
</template>
