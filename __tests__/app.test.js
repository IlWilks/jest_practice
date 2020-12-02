import {
  // methods,
  // methods,
  numberArray,
  NAN,
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero,
  someNumbersAreOdd,
  evensOnlyAndDoubleArray,
  findItem,
  sortArray,
} from '../app'


// hint of look in before_each before_all
describe('originalArray Test', ()=> {
  test('originalArray should return it self', ()=>{
    expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
  })
})

describe('doubleArray Tests', ()=> {
  test('Array returns values with double values', () =>{
    expect(doubleArray(numberArray)).toEqual([2,4,6,8])
  })
})

describe('evensOnlyArray tests', () => {
  test('Array returns only even values', () => {
    expect(evensOnlyArray(numberArray)).toEqual([2,4])
  })
})

describe('arraySum tests', () => {
  test('returns sum of array values', () => {
    expect(arraySum(numberArray)).toEqual(10)
  })
  test('If given strings, returns error', () => {
    expect(arraySum(["Hello","World"])).toEqual(NAN)
  })
})

describe('allNumbersGreaterThanZero tests', () => {
  test('returns true if all array elements are >0', () => {
    expect(allNumbersGreaterThanZero(numberArray)).toEqual(true)
  })
})

describe('someNumbersAreOdd tests', () => {
  test('returns true if any number is odd', () => {
    expect(someNumbersAreOdd(numberArray)).toEqual(true)
  })
})

describe('evensOnlyAndDoubleArray tests', () => {
  test('returns an array that is only the even values and doubled', () => {
    expect(evensOnlyAndDoubleArray(numberArray)).toEqual([4,8])
  })
})

describe('findItem tests', () => {
  test('no item present returns not found', () => {
    expect(findItem(numberArray, "doggy")).toEqual('not found')
  })
})

describe('sortArray tests', () => {
  test('returns array is descending order', () => {
    expect(sortArray(numberArray)).toEqual([4,3,2,1])
  })
})








describe('test names', () => {
  test('specific test', () => {
    
  })
})