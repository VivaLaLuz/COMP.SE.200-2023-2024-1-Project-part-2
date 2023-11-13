import { describe, expect, test } from '@jest/globals';

import difference from "../src/difference.js";

test('returns [] when passed 2 empty arrays', () => {
    expect(difference([], [])).toEqual([]);
});
