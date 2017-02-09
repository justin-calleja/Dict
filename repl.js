const repl = require('repl')
const Dict = require('./src')

const replServer = repl.start({ prompt: '> ' })

replServer.context.Dict = Dict
replServer.context.d1 = Dict({ a: 1, b: 2 })
  .concat(Dict({ c: 3, b: 20 }))
  .concat(Dict({ x: 900, b: 500 }))

console.log('unwrapping d1 gives:')
console.log(Dict.unwrap(replServer.context.d1))
