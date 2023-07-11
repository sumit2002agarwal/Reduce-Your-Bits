export function formatBits(bits) {
    let result = ""
    for (let i = 0; i < bits.length; i++) {
        result += bits[i] + " "
    }
    return result
}