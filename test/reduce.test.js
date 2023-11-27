import reduce from '../src/reduce.js';

// Fully created by using AI (GitHub Copilot)

test('should reduce an array of numbers to a single value', () => {
    const array = [1, 2, 3, 4, 5];
    const sum = reduce(array, (accumulator, value) => accumulator + value, 0);
    expect(sum).toBe(15);
});

test('should reduce an object to a new object with values as keys and keys as values', () => {
    const object = { 'a': 1, 'b': 2, 'c': 3 };
    const result = reduce(object, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key);
        return result;
    }, {});
    expect(result).toEqual({ '1': ['a'], '2': ['b'], '3': ['c'] });
});

test('should use the first element of the array as the initial value if accumulator is not given', () => {
    const array = [2, 4, 6, 8, 10];
    const product = reduce(array, (accumulator, value) => accumulator * value);
    expect(product).toBe(3840);
});

test('should return undefined if the array is empty', () => {
    const array = [];
    const result = reduce(array, (accumulator, value) => accumulator + value);
    expect(result).toBe(undefined);
});

test('should return the initial value if the array is empty and the initial value is provided', () => {
    const array = [];
    const initialValue = 10;
    const result = reduce(array, (accumulator, value) => accumulator + value, initialValue);
    expect(result).toEqual(initialValue); // Changed from toBe to toEqual
});

test('should return the initial value if the array is empty and the initial value is provided as a function', () => {
    const array = [];
    const initialValue = () => 10;
    const result = reduce(array, (accumulator, value) => accumulator + value, initialValue());
    expect(result).toEqual(initialValue()); // Changed from toBe to toEqual
});

test('should handle negative numbers in the array', () => {
    const array = [-1, -2, -3, -4, -5];
    const sum = reduce(array, (accumulator, value) => accumulator + value, 0);
    expect(sum).toBe(-15);
});

test('should handle an empty object', () => {
    const object = {};
    const result = reduce(object, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key);
        return result;
    }, {});
    expect(result).toEqual({});
});

test('should handle an object with duplicate values', () => {
    const object = { 'a': 1, 'b': 2, 'c': 1 };
    const result = reduce(object, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key);
        return result;
    }, {});
    expect(result).toEqual({ '1': ['a', 'c'], '2': ['b'] });
});

test('should handle an array with a single element', () => {
    const array = [10];
    const sum = reduce(array, (accumulator, value) => accumulator + value, 0);
    expect(sum).toBe(10);
});

test('should handle an object with a single key-value pair', () => {
    const object = { 'a': 1 };
    const result = reduce(object, (result, value, key) => {
        (result[value] || (result[value] = [])).push(key);
        return result;
    }, {});
    expect(result).toEqual({ '1': ['a'] });
});

