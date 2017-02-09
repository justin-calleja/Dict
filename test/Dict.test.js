import test from 'ava'
import Dict from '../src'

test('concat is associative', t => {
  let d1 = Dict({ a: 1, b: 2 })
  let d2 = Dict({ c: 3, b: 20 })
  let d3 = Dict({ x: 900, b: 500 })

  t.deepEqual(d1.concat(d2).concat(d3), d1.concat(d2.concat(d3)))
  t.deepEqual(d1.concat(d3).concat(d2), d1.concat(d3.concat(d2)))
  t.deepEqual(d2.concat(d1).concat(d3), d2.concat(d1.concat(d3)))
  t.deepEqual(d2.concat(d3).concat(d1), d2.concat(d3.concat(d1)))
  t.deepEqual(d3.concat(d1).concat(d2), d3.concat(d1.concat(d2)))
  t.deepEqual(d3.concat(d2).concat(d1), d3.concat(d2.concat(d1)))
})

test('concat works as expected', t => {
  let d1 = Dict({ a: 1, b: 2 })
  let d2 = Dict({ c: 3, b: 222 })
  let d3 = Dict({ x: 900, a: 111 })
  let d4 = Dict({})
  let d5 = Dict({ y: 'why?' })

  t.deepEqual(
    Dict.unwrap(d1.concat(d2).concat(d3).concat(d4).concat(d5)),
    { a: 111, b: 222, c: 3, x: 900, y: 'why?' }
  )
})
