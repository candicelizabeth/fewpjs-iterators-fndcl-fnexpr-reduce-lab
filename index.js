const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(total, num){
  return num + total
  }
)
// reduce takes in a function where you enter your accumulator(total with everything that will be added up)
//and a word to represent each element (num) and show what you want to do each time.
//for this one I am just adding them together 

// const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element)
// { return element * 2 + accumulator
// }, 0)
// - you add the zero if you want to start from zero instead of first number for accumulator