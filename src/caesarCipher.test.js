import {caesarCipher} from './caesarCipher.js'

test('Test for alphabet', () => {
    expect(caesarCipher('abcdefghijk', 1)).toBe('bcdefghijkl')
})

test('Keep same case', () => {
    expect(caesarCipher('HELLO there MY name IS KYLE', 2)).toBe('JGNNQ vjgtg OA pcog KU MANG')
})

test('Test punctuation', () => {
    expect(caesarCipher('!!@@', 1)).toBe("!!@@")
})
