export function analyzeArray(arr) {
    let average = Math.floor(arr.reduce((curr,acc) => acc + curr, 0) / arr.length)
    let sorted = arr.sort((a, b) => a - b)
    let min = sorted[0]
    let max = sorted[sorted.length-1]
    let length = arr.length
    return {
        average,
        min,
        max,
        length
    }
}