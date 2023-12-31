import { expect, test } from "@jest/globals";
import difference from "../src/difference.js";

beforeAll(() => {});
afterAll(() => {});

test("Normal case, remove values from number object array", () => {
    expect(difference([1,2,3,4,5], [2,4])).toEqual([1,3,5]);
});

test("Normal case, remove values from string array", () => {
    expect(difference(['a','b','c','d','e'], ['b','d'])).toEqual(['a','c','e']);
});

test("Normal case, remove a single value from boolean array", () => {
    expect(difference([true, false], [true])).toEqual([false]);
});

test("Normal case, remove values from a mixed array", () => {
    expect(difference([1, 'b', 3, 'd', 5], [1, 'b'])).toEqual([3, 'd', 5]);
});

test("Normal case, remove values from custom object array", () => {
    const obj1 = {name: 'John', age: 25};
    const obj2 = {name: 'Jane', age: 30};
    const obj3 = {name: 'Jack', age: 40};
    expect(difference([obj1, obj2, obj3], [obj3])).toEqual([obj1, obj2]);
});

test("Remove same multiples from the array, return the cleaned array", () => {
    const obj1 = {name: 'John', age: 25};
    const obj2 = {name: 'Jane', age: 30};
    const obj3 = {name: 'Jack', age: 40};
    
    expect(difference([1,2,2,3,4], [2,4])).toEqual([1,3]);
    expect(difference(['a','a','b','b', 'b','c'], ['a','b'])).toEqual(['c']);
    expect(difference([obj1, obj2, obj2, obj3, obj3], [obj3])).toEqual([obj1, obj2, obj2]);
    expect(difference([true, false, true, false], [true])).toEqual([false, false]);
});

test("Remove all of the values from the array to return an empty array", () => {
    expect(difference([1, 2, 3], [1, 2, 3])).toEqual([]);
    expect(difference(['a','a','b','b', 'b','c'], ['a','b','c'])).toEqual([]);
    expect(difference([true, false, true, false], [true, false])).toEqual([]);
});

test("Give only a single array as input, should return unmodified array", () => {
    expect(difference(['a','b','c'])).toEqual(['a', 'b', 'c']);
    expect(difference([true, false])).toEqual([true, false]);
});

test("Give removable values as multiple arrays, expect them to be removed", () => {
    expect(difference(['a','b','c','d','e'],['a'],['b'],['c'])).toEqual(['d','e']);
});

test("Give no array, expect to return an empty array", () => {
    expect(difference('a','b','c','c')).toEqual([]);
});

test("Check that original array order is preserved", () => {
    expect(difference([5, 3, 4, 2, 9], [4, 9])).toEqual([5, 3, 2]);
});

test("Give array with null values and remove them, return cleaned array", () => {
    expect(difference([1, 2, null, 4, null], [null])).toEqual([1, 2, 4]);
});


test('returns [] when passed 2 empty arrays', () => {
    expect(difference([], [])).toEqual([]);
});


//Below are listed the AI created complements to the tests

// Test with an empty array, expect to return the same array
test("Give an empty array, expect to return the same array", () => {
    expect(difference([], [1, 2, 3])).toEqual([]);
});

// Test with undefined values in the array, expect to return an array without undefined values
test("Difference with undefined values, return an array without undefined values", () => {
    expect(difference([1, 2, undefined, 4, undefined], [undefined])).toEqual([1, 2, 4]);
});

// Test with a array that has no common elements, expect to return the original array
test("Give a array that has no common elements, expect to return the original array", () => {
    expect(difference([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])).toEqual([1, 2, 3, 4, 5]);
});

// Test with two identical arrays, expect to return an empty array
test("Give two identical arrays, expect to return an empty array", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(difference(arr, arr)).toEqual([]);
});
