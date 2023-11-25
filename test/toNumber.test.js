import { expect, test } from "@jest/globals";

import toNumber from '../src/toNumber.js'

// Test converting a decimal number
test('Converts decimal number to number', () => {
    expect(toNumber(3.2)).toBe(3.2)
})

// Test converting Number.MIN_VALUE
test('Converts Number.MIN_VALUE to number', () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324)
})

// Test converting Infinity
test('Converts Infinity to number', () => {
    expect(toNumber(Infinity)).toBe(Infinity)
})

// Test converting a string representation of a decimal number
test('Converts string representation of decimal number to number', () => {
    expect(toNumber('3.2')).toBe(3.2)
})

// Test converting a string representation of a hexadecimal number
test('Converts string representation of hexadecimal number to number', () => {
    expect(toNumber('0x10')).toBe(16)
})

// Test converting a string representation of a binary number
test('Converts string representation of binary number to number', () => {
    expect(toNumber('0b1010')).toBe(10)
})

// Test converting a string representation of an octal number
test('Converts string representation of octal number to number', () => {
    expect(toNumber('0o10')).toBe(8)
})

// Test converting a boolean value
test('Converts boolean value to number', () => {
    expect(toNumber(true)).toBe(1)
    expect(toNumber(false)).toBe(0)
})

// Test converting null and undefined
test('Converts null and undefined to number', () => {
    expect(toNumber(null)).toBe(0)
    expect(toNumber(undefined)).toBe(NaN)
})

// Test converting an object and a symbol
test('Converts object and symbol to number', () => {
    expect(toNumber({})).toBe(NaN)
    expect(toNumber(Symbol())).toBe(NaN)
})
