import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import ts from 'rollup-plugin-typescript2'

/**
 * Rollup配置选项，https://github.com/rollup/rollup
 * @type {import('rollup').RollupOptions}
 */
const rollupOptions = {
  input: 'src/main.ts',
  output: {
    name: 'demo',
    format: 'esm',
    file: 'dist/main.esm-bundler.js',
    exports: 'auto',
    sourcemap: false
  },
  plugins: [
    nodeResolve({
      extensions: ['.js', '.ts']
    }),
    commonjs(),
    ts()
  ]
}

export default rollupOptions
