<style src="./ArticleHighlight.scss" module lang="scss"></style>
<script src="./ArticleHighlight.js"></script>

<template>
  <section :class="$style.articleHighlight">
    <main>
      <h1 ref="title">Adobe / Philips Creative Jam</h1>
      <p ref="copy">
        During the Dutch Design Week (DDW), four classmates and I got the opportunity to participate
        with the Adobe Creative Jam at Sint Lucas. We got a case presented by the lead UX designer
        from Philips Hue. He defined a problem where users were taking the starter pack – which
        contained three bulbs – and spread them around the house while the best possible experience
        is to hang the lamps in the same room...
      </p>
      <div class="cta-wrapper" ref="cta">
        <Button
          inverted
          to="/article"
          copy="Lees meer"
        />
      </div>
    </main>
  </section>
</template>
