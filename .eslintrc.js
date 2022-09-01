module.exports = {
  extends: [require.resolve('@systemlight/fabric/dist/tsVueEslint')],
  rules: {
    'no-undef': 'off' // 针对vue3新特性语法 $ref()，https://cn.vuejs.org/guide/extras/reactivity-transform.html
  }
}
