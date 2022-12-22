// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat (name) {
    cats.push(name);
  };

  function destructivelyPrependCat(name) {
    cats.unshift(name);
  };

  function destructivelyRemoveLastCat(name) {
    cats.pop(name);
  };

  function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
  };

  function appendCat(name) {
    const cats2 = [...cats]
    cats2.push(name);
    return cats2
  };

//   prependCat(name)
//   1) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
  
  function prependCat(name) {
    const cats2 = [...cats]
    cats2.unshift(name);
    return cats2
  };


//   removeLastCat()
//   1) removes the last cat in the cats array and returns a new array, leaving the cats array unchanged

function removeLastCat(name) {
    const cats2 = [...cats]
    cats2.pop(name);
    return cats2
  };

  function removeFirstCat(name) {
    const cats2 = [...cats]
    cats2.shift(name);
    return cats2
  };
