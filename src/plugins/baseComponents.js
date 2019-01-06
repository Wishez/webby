const requireComponents = require.context(
  '../components', false, /Base[\w]+\.vue$/
)

export default (Vue) => {
  requireComponents.keys().forEach(fileName => {
    const config = requireComponents(fileName)
    const component = config.default || config

    Vue.component(component.name, component)
  })
}
