export const NAN = "NAN";
export const numberArray=[1,2,3,4];


export const originalArray = (arr) =>{
  return arr
}
//doubles values
export const doubleArray = (numberArray) => {
  return numberArray.map(value => value *2) 
}

export const evensOnlyArray = (numberArray) => {
  let filteredArray = numberArray.filter(value => value % 2 === 0);
  return filteredArray;
};

export const arraySum = (numberArray) => {
  const total = (total, nextNum) => total+nextNum;
  let sum = numberArray.reduce(total, 0);
  if (typeof sum === 'string') {
    return NAN
  } 
  else {
    return sum;
  }
};

export const allNumbersGreaterThanZero = (numberArray) => {
  const iseven = (value) => value >= 0 
  return numberArray.every(iseven,0);
}

export const someNumbersAreOdd = (numberArray) => {
  const someOdd = (value) => (value % 2) === 1
  return numberArray.some(someOdd)
}

export const evensOnlyAndDoubleArray = (numberArray) => {
  let filtered = evensOnlyArray(numberArray)
  return doubleArray(filtered)
}

export const findItem = (numberArray, item)  => {
  let found = numberArray.find(value => value == item)
  if (found !== undefined) {
    return found;
  }
  else {
    return 'not found'
  }
}

export const sortArray = (numberArray) => {
  return numberArray.sort((a,b) => b-a)
}