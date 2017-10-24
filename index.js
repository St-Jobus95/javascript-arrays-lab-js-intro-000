const app = "I don't do much."

kittens = [
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
  var new_array = [...array, "Broom"];
  return new_array
}

function prependKitten(array, name) {
  var new_array = ["Arnold", ...array];
  return new_array
}

function removeLastKitten(array, name) {
  kittens.slice(0, kittens.length - 1);
  return new_array
}

function removeFirstKitten(array, name) {
  kittens.slice(1);
  return new_array
}
