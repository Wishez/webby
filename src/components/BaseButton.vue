
<template>
  <button :aria-pressed="isPressed" v-on="buttonListteners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  data () {
    return { isPressed: false }
  },

  computed: {
    buttonListteners () {
      return Object.assign({}, this.$listeners, {
        click: (event) => {
          this.$emit('click', event)

          if (this.isPressed) this.pressButton()
        },

        blur: (event) => {
          this.$emit('blur', event)

          this.unpressButton()
        }
      })
    }
  },

  methods: {
    pressButton () {
      this.setPressedState(true)
    },

    setPressedState (isPressed) {
      this.isPressed = isPressed
    },

    unpressButton () {
      this.setPressedState(false)
    }
  }
}
</script>

<style lang="sass">
button[aria-pressed]
  transition-duration: 250ms
  border: 4px dashed orchid
</style>
