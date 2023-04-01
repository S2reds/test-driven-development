import {analyzeArray} from './analyzeArray.js'

test('Averages of small array', () => {
    expect(analyzeArray([1,3,5,6,7,9])).toStrictEqual({
        average: 5,
        min: 1,
        max: 9,
        length: 6
    })
})

test('large array', () => {
    expect(analyzeArray([25,50,75,100,125,150,175,200,225,250,275,300])).toStrictEqual({
        average: 162,
        min: 25,
        max: 300,
        length: 12,
    })
})

test('negative nums', () => {
    expect(analyzeArray([-25,-100,500,-50])).toStrictEqual({
        average: 81,
        min: -100,
        max: 500,
        length: 4
    })
})