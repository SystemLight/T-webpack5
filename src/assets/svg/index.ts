let context = require.context('./icons', false, /\.svg$/)
let requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext)
requireAll(context)
