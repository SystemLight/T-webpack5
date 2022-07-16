declare interface WebpackHotModule {
  hot: {
    accept: (modulePath: string, callback?: (modulePaths: Array<string>) => void) => void
  }
}

declare var process: any
declare var module: WebpackHotModule
declare var webpack5RecommendConfigOptions: any

declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

declare module '*.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.vue' {
  import type {defineComponent} from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}
