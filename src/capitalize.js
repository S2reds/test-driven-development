export function capitalize(str) {
    let first = str[0]
    let rest = str.substring(1)
    return first.toUpperCase() + rest
}