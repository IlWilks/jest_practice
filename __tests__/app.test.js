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
  test('returns true or false for array', () => {
    expect(allNumbersGreaterThanZero(numberArray)).toEqual(true)
  })
})











describe('test names', () => {
  test('specific test', () => {
    
  })
})