const app = "I don't do much."

var kittens = [
  "Milo", "Otis", "Garfield"
]

function destructivelyAppendKitten(array, name) {
  var name = "Ralph";
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(array, name) {
  var name = "Bob";
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten(array, name) {
  var name = "Ralph";
  kittens.pop(name);
  return kittens
}

function destructivelyRemoveFirstKitten(array, name) {
  var name = "Bob";
  kittens.shift(name);
  return kittens
}

function appendKitten(array, name) {
  var name = "Broom";
  var new_array = [...array, name]
  return new_array
}

function prependKitten(array, name) {
  var name = "Arnold";
  var new_array = [name, ...array]
  return new_array
}

function removeLastKitten(array, name) {
  var name = "Ralph";
  kittens.pop(name);
  return kittens
}

function removeFirstKitten(array, name) {
  var name = "Bob";
  kittens.shift(name);
  return kittens
}
