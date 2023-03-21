let context = require.context('./icons', false, /\.svg$/)
let requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(context)
