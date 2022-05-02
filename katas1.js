function oneThroughTwenty(number){
  let count = []
  for(let i = 1; i <= number; i++){
      count += `${i},`
  }
  return count
}
console.log(oneThroughTwenty(20))

function evensToTwenty(number){
  let count = []
  for(let i = 1; i <= number; i++){
      if(i % 2 == 0){
          count += `${i},`
      }
  }
  return count
}
console.log(evensToTwenty(20))

function oddsToTwenty(number){
  let count = []
  for(let i = 1; i <= number; i++){
      if(i % 2 !== 0){
          count += `${i},`
      }
  }
  return count
}
console.log(oddsToTwenty(20))

function multiplesOfFive(number){
  let count = []
  for(let i = 1; i <= number; i++){
      if(i % 5 == 0){
          count += `${i},`
      }
  }
  return count
}
console.log(multiplesOfFive(100))

function squareNumbers(number){
  let count = []
  for(let i = 1; i <= number; i++){
      if(Math. sqrt(i) % 1 === 0){
          count += `${i},`
      }
  }
  return count
}
console.log(squareNumbers(100))

function oneThroughTwenty(number){
  let count = []
  for(let i = 20; i >= number; i--){
      count += `${i},`
  }
  return count
}
console.log(oneThroughTwenty(1))

function evenNumbersBackwards(number){
  let count = []
  for(let i = 20; i >= number; i--){
      if(i % 2 == 0){
          count+= `${i}, `
      }
  }
  return count
}
console.log(evenNumbersBackwards(1))

function oddNumbersBackwards(number){
  let count = []
  for(let i = 20; i >= number; i--){
      if(i % 2 !== 0){
          count+= `${i}, `
      }
  }
  return count
}
console.log(oddNumbersBackwards(1))

function multiplesOfFiveBackwards(number){
  let count = []
  for(let i = 100; i >= number; i--){
      if(i % 5 == 0){
          count+= `${i}, `
      }
  }
  return count
}
console.log(multiplesOfFiveBackwards(1))

function squareNumbersBackwards(number){
  let count = []
  for(let i = 100; i >= number; i--){
      if(Math. sqrt(i) % 1 === 0){
          count+= `${i}, `
      }
  }
  return count
}
console.log(squareNumbersBackwards(1))