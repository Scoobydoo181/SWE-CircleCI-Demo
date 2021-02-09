const {distance} = require('./index')

test('Distance formula works correctly', () => {
    let value = distance([1,2,3],[-1,-1,-1])
    let rounded = Math.round(value * 1000) / 1000
    expect(rounded).toEqual(5.385)
})

test('distance throws error if points aren\'t the same length', () => {
    expect(() => distance([8,6,1], [1,3,4,7,6,2,4,9])).toThrow()
})

test('Order of points doesn\'t matter', () => {
    expect( distance([1,2,3],[-1,-1,-1]) ).toEqual( distance([-1,-1,-1], [1,2,3]) )
})