<template>
  <div id="app">
    <header>
      <figure class="banner"></figure>

      <div class="container headerContainer">
        <div class="headerTop parent fullWidth h-between v-centered">
          <h1 class="logo">
            <svg class="logoBorder" viewBox="0 0 100 100">
              <rect class="logoBorder__rect"></rect>
            </svg>

            <span class="logo__text">FDN</span>
          </h1>

          <nav class="navigation" aria-label="Навигация по странице">
            <ul class="parent row navigationList">
              <li class="navigationItem" v-for="({ icon, name, href }, index) in navigation" :key="index">
                <a :href="href" :aria-label="name" class="">
                  <v-icon :name="icon" />
                </a>
              </li>

              <li class="navigationItem">
                <base-button type="button">
                  <v-icon name="bars" />
                </base-button>
              </li>
            </ul>
          </nav>
        </div>

      </div>

      <figure class="rightBackground"></figure>
    </header>

    <main></main>

    <aside></aside>

    <footer></footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    navigation: [
      {
        icon: 'brain',
        href: 'https://facebook.com',
        name: 'Our Facebook page'
      },
      {
        icon: 'bug',
        href: 'https://twitter.com',
        name: 'Our creative twitter'
      },
      {
        icon: 'shopping-cart',
        onClickMethod: 'goToCard',
        href: '/cart',
        name: 'Your cart'
      }
    ]
  })
}
</script>

<style lang="sass" scoped>
@import 'styles/conf/_colors'
.headerTop
  height: 242px
  z-index: 2
  position: relative
  padding-bottom: 130px

$bannerWidth: 1254 * 100 / (1254 + 666)
$rightBackgroundWidth: 100 - $bannerWidth
.rightBackground
  right: 0
  width: 1% * $rightBackgroundWidth
  background-color: $darkGray

.rightBackground, .banner
  padding-bottom: 826% / 1254 * 100
  position: fixed
  top: 0
  z-index: 1

.banner
  left: 0
  width: 1% * $bannerWidth
  background-color: #d8d8d8

.logo
  width: 83px
  height: 83px
  font-size: 28px
  white-space: nowrap
  font-weight: bold
  display: flex
  justify-content: flex-end
  align-items: center
  position: relative

  &:before, &:after
    content: ""
    position: absolute
    right: -4px
    width: 7.5px
    height: 21px
    background-color: $darkGray

  &:after
    top: 0

  &:before
    bottom: 0

  &Border
    transform: rotateY(180deg)
    position: absolute

    &, &__rect
      height: 100%
      width: 100%

    &__rect
      stroke-dasharray: 307
      fill: none
      stroke: $darkGray
      stroke-width: 15px

  &__text
    right: -10px
    position: relative

.navigationItem

  svg
    color: $white
    font-size: 21.94px
    transform: scaleY(1.0023)

  &:not(:last-of-type)
    margin-right: 39px
</style>
