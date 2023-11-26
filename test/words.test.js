import { expect, test } from "@jest/globals";

import words from "../src/words.js";

test('Returns words from a space-separated string', () => {
    expect(words("One two three")).toEqual(["One", "two", "three"])
});

test('Returns words from a string with punctuation', () => {
    expect(words("One, two & three!")).toEqual(["One", "two", "three"])
});

test('Returns an empty array for an empty string', () => {
    expect(words("")).toEqual([])
});

test('Returns an empty array for punctuation-only strings', () => {
    expect(words(",,,")).toEqual([])
    expect(words("!  ? &")).toEqual([])
});

test('Returns a single word from a single-word string', () => {
    expect(words("One")).toEqual(["One"])
});

test('Handles hyphenated words as a single word', () => {
    expect(words("check-in")).toEqual(["check-in"])
    expect(words("father-in-law")).toEqual(["father-in-law"])
    expect(words("He x-rayed the father-in-law in a check-in")).toEqual(["He", "x-rayed", "the", "father-in-law", "in", "a", "check-in"])
});

test('Works with a custom regex pattern', () => {
    expect(words("an eye said aye", /[aeiouy]+/g)).toEqual(["a", "eye", "ai", "aye"])
});

test('Works with a custom regex pattern specified as string', () => {
    expect(words("an eye said aye", "[aeiouy]+")).toEqual(["a", "eye", "ai", "aye"])
});
