export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    let m1 = merge2array(collection_1, collection_2)
    let m2 = merge2array(m1, collection_3.reverse())

    return m2
}

function merge2array(a1: number[], a2: number[]): number[] {
    let result: number[] = []
    let i = 0, j = 0

    while (i < a1.length && j < a2.length) {
        if (a1[i] <= a2[j]) {
            result.push(a1[i++])
        } else {
            result.push(a2[j++])
        }
    }

    while (i < a1.length) result.push(a1[i++])
    while (j < a2.length) result.push(a2[j++])

    return result
}