var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

addElementToBeginningOfArray = (a, b) =>  [b, ...a]

destructivelyAddElementToBeginningOfArray = (a, b) => {
  a.unshift(b)
return a
}

destructivelyAddElementToEndOfArray = (a, b) => {
  a.push(b)
return a
}

destructivelyAddElementToEndOfArray = (a, b) => {
  a.push(b)
return a
}

addElementToEndOfArray = (a, b) => [...a, b]

accessElementInArray = (a, b) => a[b]

destructivelyRemoveElementFromBeginningOfArray = (array) {
  array.shift()
  return array
}
