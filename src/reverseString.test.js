import {reverseString} from './reverseString.js'

test('Alphabet', () => {
    expect(reverseString('abcedfghijk')).toBe('kjihgfdecba')
})

test('Capitals, nums, and symbols', () => {
    expect(reverseString('HeLLo !@# ... 128')).toBe('821 ... #@! oLLeH')
})

test('Whitespace', () => {
    expect(reverseString('   h e l l o   ')).toBe('   o l l e h   ')
})