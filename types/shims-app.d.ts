declare module '*.module.css' {
  const classes: {readonly [key: string]: string}
  export default classes
}

declare module '*.module.scss' {
  const classes: {readonly [key: string]: string}
  export default classes
}

declare module '*.module.sass' {
  const classes: {readonly [key: string]: string}
  export default classes
}

declare module '*.svg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.bmp' {
  const src: string
  export default src
}

declare module '*.tiff' {
  const src: string
  export default src
}

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'production' | 'development'
  }
}

declare interface WebpackHotModule {
  hot: {
    accept: (modulePath: string, callback?: (modulePaths: Array<string>) => void) => void
  }
}

declare let module: WebpackHotModule

declare module '*/demo/foo.css' {
  const fooCss: any
  export default fooCss
}
