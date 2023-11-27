import upperFirst from "../src/upperFirst.js";


test("Normal case, turn the first letter of a string to uppercase", () => {
    expect(upperFirst('apples')).toEqual('Apples');
});

test("The first letter is already in capital, return the original input", () => {
    expect(upperFirst('Apples')).toEqual('Apples');
});

test("The first character is not a letter, return the original input", () => {
    expect(upperFirst(' apples')).toEqual(' apples');
    expect(upperFirst('1apples')).toEqual('1apples');
    expect(upperFirst('/apples')).toEqual('/apples');
});

test("Give number as input, expect to return an empty string", () => {
    expect(upperFirst(0)).toEqual('');
});

test("Give boolean as input, expect to return an empty string", () => {
    expect(upperFirst(true)).toEqual('');
});

test("Give null as input, expect to return an empty string", () => {
    expect(upperFirst(null)).toEqual('');
});

test("Give undefined input, expect to return an empty string", () => {
    expect(upperFirst(undefined)).toEqual('');
});

test("Give custom object as input, expect to return an empty string", () => {
    const obj1 = {name: 'John', age: 25};
    expect(upperFirst(obj1)).toEqual('');
});

test("Give no input, expect to return an empty string", () => {
    expect(upperFirst()).toEqual('');
});

test("Give multiple inputs, only the first is to be returned", () => {
    expect(upperFirst('apples', 'are', 'delicious')).toEqual('Apples');
});


//Below are listed the (selected) AI created complements to the tests

// Test with a sentence, expect to return the sentence with the first letter of the first word capitalized
test("Give a sentence, expect to return the sentence with the first letter of the first word capitalized", () => {
    expect(upperFirst('apple is delicious')).toEqual('Apple is delicious');
});

// Test with a string that starts with a lowercase letter followed by an uppercase letter, expect to return the string with the first letter capitalized
test("Give a string that starts with a lowercase letter followed by an uppercase letter, expect to return the string with the first letter capitalized", () => {
    expect(upperFirst('aPple')).toEqual('APple');
});

// Test with a string that contains only uppercase letters, expect to return the same string
test("Give a string that contains only uppercase letters, expect to return the same string", () => {
    expect(upperFirst('APPLE')).toEqual('APPLE');
});
