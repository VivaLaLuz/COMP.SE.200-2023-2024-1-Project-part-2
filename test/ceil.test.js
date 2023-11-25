import { expect, test } from "@jest/globals";

import ceil from "../src/ceil.js";

test('default precision 0 rounds up to nearest integer', () => {
    expect(ceil(0.00000000001)).toEqual(1);
    expect(ceil(-0.0000000001)).toEqual(-0);
    expect(ceil(3.9999999999)).toEqual(4);
    expect(ceil(-3.9999999999)).toEqual(-3);
    expect(ceil(1.00000000001, 0)).toEqual(2);
});

test('default precision 0 does not round up integers', () => {
    expect(ceil(1)).toEqual(1);
    expect(ceil(-1)).toEqual(-1);
    expect(ceil(0)).toEqual(0);
    expect(ceil(0.00000000001, 0)).toEqual(1);
});

test('precision 1 rounds up to nearest tenth', () => {
    expect(ceil(0.00000000001, 1)).toEqual(0.1);
    expect(ceil(-0.0000000001, 1)).toEqual(-0);
    expect(ceil(3.9999999999, 1)).toEqual(4);
    expect(ceil(-3.9999999999, 1)).toEqual(-3.9);
});

test('precision 1 does not round up integers or tenths', () => {
    expect(ceil(1, 1)).toEqual(1);
    expect(ceil(-1, 1)).toEqual(-1);
    expect(ceil(0, 1)).toEqual(0);
    expect(ceil(0.1, 1)).toEqual(0.1);
    expect(ceil(-0.1, 1)).toEqual(-0.1);
});

test('precision -1 rounds up to nearest ten', () => {
    expect(ceil(0.00000000001, -1)).toEqual(10);
    expect(ceil(-0.0000000001, -1)).toEqual(-0);
    expect(ceil(3.9999999999, -1)).toEqual(10);
    expect(ceil(-3.9999999999, -1)).toEqual(-0);
});

test('precision -1 does not round up tens', () => {
    expect(ceil(10, -1)).toEqual(10);
    expect(ceil(-10, -1)).toEqual(-10);
    expect(ceil(0, -1)).toEqual(0);
});
