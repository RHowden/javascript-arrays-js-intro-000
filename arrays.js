var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

addElementToBeginningOfArray = (a, b) => { [b, ...a]
  a.unshift(b)
return a
}

destructivelyAddElementToBeginningOfArray = (a, b) => {
  a.unshift(b)
return a
}
