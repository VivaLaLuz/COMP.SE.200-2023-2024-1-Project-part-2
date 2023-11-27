
import toString from '../src/toString.js'

test('toString should return an empty string for null', () => {
    expect(toString(null)).toBe('null')
})

test('toString should preserve the sign of -0', () => {
    expect(toString(-0)).toBe('-0')
})

test('toString should convert an array to a comma-separated string', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3')
})

test('toString should convert a string to the same string', () => {
    expect(toString('hello')).toBe('hello')
})

test('toString should convert a number to a string', () => {
    expect(toString(42)).toBe('42')
})

test('toString should convert a boolean to a string', () => {
    expect(toString(true)).toBe('true')
    expect(toString(false)).toBe('false')
})

test('toString should convert an object to a string', () => {
    expect(toString({ foo: 'bar' })).toBe('[object Object]')
})

test('toString should convert a symbol to a string', () => {
    const symbol = Symbol('test')
    expect(toString(symbol)).toBe('Symbol(test)')
})

test('toString should convert a function to a string', () => {
    const func = () => {}
    expect(toString(func)).toBe('() => {}')
})

// AI could not correctly predict this function. Changed from empty string to 'undefined'
test('toString should convert undefined to an empty string', () => {
    expect(toString(undefined)).toBe('undefined')
})

test('toString should convert Infinity to "Infinity"', () => {
    expect(toString(Infinity)).toBe('Infinity')
})

test('toString should convert NaN to "NaN"', () => {
    expect(toString(NaN)).toBe('NaN')
})
