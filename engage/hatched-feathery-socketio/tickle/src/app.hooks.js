// Application hooks that run for every service

// eslint-disable-line no-unused-vars
// const logHook = (options = {}) => {
//   return async context => {
//     //  Object.keys(context) =  [
//     //   'type', 'arguments', 'service', 'app', 'method',  'path', 'data',    'params'
//     //  ]
//     let { method, path, data } = context
//     if (path==="authentication" && method==="create") {
//
//     }
//     console.log("APP HOOKS CREATE!", { method, path, data })
//   }
// }

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [], // logHook()
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
}
