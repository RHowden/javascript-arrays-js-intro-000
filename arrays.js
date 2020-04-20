var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

addElementToBeginningOfArray = (a, b) => { [b, ...a]

}

destructivelyAddElementToBeginningOfArray = (a, b) => {
  a.unshift(b)
return a
}
