function Dict (obj = {}) {
  return new _Dict(obj)
}

function _Dict (obj) {
  this.val = obj
}

Dict.unwrap = (d) => d.val

// defining concat on Dict instances makes them a fantasy-land compliant
// [Semigroup](https://github.com/fantasyland/fantasy-land#semigroup)
_Dict.prototype.concat = function (obj2) {
  return Dict(Object.assign({}, Dict.unwrap(this), Dict.unwrap(obj2)))
}

_Dict.prototype.toString = function () {
  return `Dict(this.val)`
}

module.exports = Dict
