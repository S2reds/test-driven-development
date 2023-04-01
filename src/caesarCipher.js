export function caesarCipher(str, num) {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i)
        let shifted = String.fromCharCode(code + num)
        if (code + num >  90 && (code < 90 && code > 64)) {
            let newStart = num - (90 - code) 
            shifted = String.fromCharCode(64 + newStart)
        } else if (code + num > 122 && (code < 122 && code > 96)) {
            let newStart = num - (122 - code)
            shifted = String.fromCharCode(96 + newStart)
        } else if ((code >= 32 && code <= 47) || (code >= 58 && code <= 64) || (code >= 91 && code <= 96) || (code >= 123 && code <= 126)) {
            shifted = str[i]
        }
        newStr += shifted
    }
    return newStr
}