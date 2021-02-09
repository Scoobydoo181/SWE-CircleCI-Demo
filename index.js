function distance(point1, point2) {
    if(point1.length != point2.length)
        throw new Error('Points must have the same number of dimensions')

    let sum = 0
    for(let i = 0; i < point1.length; i++)
        sum += Math.pow(point1[i] - point2[i], 2)

    return Math.sqrt(sum)
}

exports.distance = distance