<style src="./NavigationMenu.scss" module lang="scss"></style>
<script src="./NavigationMenu.js"></script>

<template>
  <header :class="[$style.navigationMenu, {[$style.active]: active}]">
    <button
      :class="[$style.hamburger, {[$style.active]: active}]"
      @click="handleClick"
    >
      <div :class="[$style.hamburgerBox]">
        <div :class="[$style.hamburgerInner]" />
      </div>
    </button>
    <nav>
      <ul>
        <li>
          <router-link
            to="/"
            @click.native="hide"
          >
            Home
          </router-link>
        </li>
        <li>
          <router-link
            to="/portfolio"
            @click.native="hide"
          >
            Portfolio
          </router-link>
        </li>
        <li>
          <router-link
            to="/over-mij"
            @click.native="hide"
          >
            Over Mij
          </router-link>
        </li>
        <li>
          <router-link
            to="/contact"
            @click.native="hide"
          >
            Contact
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
