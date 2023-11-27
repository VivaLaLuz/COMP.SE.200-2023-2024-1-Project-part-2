import { expect, test } from "@jest/globals";

import slice from "../src/slice.js";

test("should return a slice of the array from start to end", () => {
    const array = [1, 2, 3, 4, 5];

    expect(slice(array, 1, 4)).toEqual([2, 3, 4]);
    expect(slice(array, 2)).toEqual([3, 4, 5]);
    expect(slice(array, -3, -1)).toEqual([3, 4]);
});

test("should return an empty array if start is greater than or equal to end", () => {
    const array = [1, 2, 3, 4, 5];

    expect(slice(array, 3, 2)).toEqual([]);
    expect(slice(array, 4, 4)).toEqual([]);
});

test("should handle negative indices correctly", () => {
    const array = [1, 2, 3, 4, 5];

    expect(slice(array, -3)).toEqual([3, 4, 5]);
    expect(slice(array, -4, -2)).toEqual([2, 3]);
});

test("should return an empty array if input array is empty", () => {
    const array = [];

    expect(slice(array, 1, 4)).toEqual([]);
    expect(slice(array, 2)).toEqual([]);
    expect(slice(array, -3, -1)).toEqual([]);
});

test("should return an empty array if input array is null or undefined", () => {
    expect(slice(null, 1, 4)).toEqual([]);
    expect(slice(undefined, 2)).toEqual([]);
    expect(slice(null, -3, -1)).toEqual([]);
});

test("should handle null or undefined start or end indices correctly", () => {
    const array = [1, 2, 3, 4, 5];

    expect(slice(array, null, 4)).toEqual([1, 2, 3, 4]);
    expect(slice(array, 2, null)).toEqual([3, 4, 5]);
    expect(slice(array, null, null)).toEqual([1, 2, 3, 4, 5]);

    expect(slice(array, undefined, 4)).toEqual([1, 2, 3, 4]);
    expect(slice(array, 2, undefined)).toEqual([3, 4, 5]);
    expect(slice(array, undefined, undefined)).toEqual([1, 2, 3, 4, 5]);
});
