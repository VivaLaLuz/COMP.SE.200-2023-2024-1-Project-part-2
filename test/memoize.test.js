import { expect, test } from "@jest/globals";

import memoize from "../src/memoize.js";

test('memoize returns a function', () => {
    expect(typeof memoize(() => { })).toBe("function");
});

test('memoize returns a function that returns the same values as the original function', () => {
    const fn = memoize((a, b) => a + b);

    expect(fn(1, 2)).toBe(3);
    expect(fn(0, 0)).toBe(0);
});

test('memoize caches using the first argument as key', () => {
    var calls = 0;

    const fn = memoize((a, b) => {
        calls++;

        return a + b;
    });

    expect(fn(1, 2)).toBe(3);
    expect(fn(1, 2)).toBe(3);
    expect(fn(1, 2)).toBe(3);
    expect(calls).toBe(1);
    expect(fn(0, 0)).toBe(0);
    expect(fn(0, 0)).toBe(0);
    expect(fn(0, 0)).toBe(0);
    expect(calls).toBe(2);

    expect(fn(1, 999)).toBe(3);
});

test('memoize caches the results of the original function with custom resolver', () => {
    var calls = 0;

    const fn = memoize((key, a, b) => {
        calls++;

        return a + b;
    }, (key, a, b) => key);

    expect(fn("first", 1, 2)).toBe(3);
    expect(fn("first", 3, 4)).toBe(3);
    expect(fn("second", -1, -2)).toBe(-3);
    expect(fn("second", -1, -2)).toBe(-3);
    expect(calls).toBe(2);
});

test('memoize cache is accessible', () => {
    const fn = memoize((a, b) => a + b);

    fn(1, 2);
    fn(0, 0);

    expect(fn.cache).toEqual(new Map([[1, 3], [0, 0]]));

    fn.cache.set(1, 999);
    expect(fn(1, 2)).toBe(999);
});
