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
