import filter from "../src/filter.js";

test("Normal case, check applicability to a number array", () => {
    const fn = (value) => value > 3;
    expect(filter([1, 2, 3, 4, 5], fn)).toEqual([4, 5]);
});

test("Normal case, filter custom objects, return the filtered array", () => {
    const obj1 = {name: 'John', active: true};
    const obj2 = {name: 'Jane', active: false};
    const obj3 = {name: 'Jack', active: true};

    const fn = (value) => value.active == true;
    expect(filter([obj1, obj2, obj3], fn)).toEqual([obj1, obj3]);
});

test("Filter array with multiple repeated values,\
    return filtered array, order preserved", () => {
    const fn = (value) => value > 3;
    expect(filter([5, 5, 4, 4, 3, 3, 2, 2, 1,1 ], fn)).toEqual([5,5,4,4]);
});


test("Filter out null values, return an array without null values", () => {
    const fn = (value) => value != null;
    expect(filter([1, 2, null, 4, null], fn)).toEqual([1, 2, 4]);
});

test("Filter by type, return array with correct typed values", () => {
    const fn = (value) => typeof(value) === 'number';
    expect(filter(['a', 2, 'b', 4, 'c'], fn)).toEqual([2, 4]);
});


test("Give a unusable predicate, expect to throw and error", () => {
    const fn = 3;
    expect(() => {filter([1, 2, 3, 4, 5], fn);}).toThrow();
});

test("Give no predicate, expect to throw and error", () => {
    expect(() => {filter([1, 2, 3, 4, 5]);}).toThrow();
});

test("Give no inputs, expect to return an empty array", () => {
    expect(filter()).toEqual([]);
});


//Below are listed the AI created complements to the tests

// Test with an empty array, expect to return an empty array
test("Give an empty array, expect to return an empty array", () => {
    const fn = (value) => value > 3;
    expect(filter([], fn)).toEqual([]);
});

// Test with undefined values in the array, expect to return an array without undefined values
test("Filter out undefined values, return an array without undefined values", () => {
    const fn = (value) => value !== undefined;
    expect(filter([1, 2, undefined, 4, undefined], fn)).toEqual([1, 2, 4]);
});

// Test with a predicate that always returns false, expect to return an empty array
test("Give a predicate that always returns false, expect to return an empty array", () => {
    const fn = (value) => false;
    expect(filter([1, 2, 3, 4, 5], fn)).toEqual([]);
});

// Test with a predicate that always returns true, expect to return the original array
test("Give a predicate that always returns true, expect to return the original array", () => {
    const fn = (value) => true;
    const arr = [1, 2, 3, 4, 5];
    expect(filter(arr, fn)).toEqual(arr)
});