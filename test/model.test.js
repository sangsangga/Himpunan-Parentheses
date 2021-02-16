const Himpunan = require("../models/himpunan");
const Parentheses = require("../models/parentheses");

describe("Test Method Himpunan Angka", () => {
  test("Mengembalikan Himpunan Angka", () => {
    const himpunan1 = new Himpunan([1, 3, 5]);
    expect(himpunan1.show()).toBe([
      [],
      [1],
      [3],
      [5],
      [1, 3],
      [1, 5],
      [3, 5],
      [1, 3, 5],
    ]);
  });
});

describe("Test Method Kombinasi Parentheses", () => {
  test("Mengembalikan Kombinasi Paretheses", () => {
    const parentheses1 = new Parentheses([1, 3, 5]);
    expect(parentheses1.show()).toBe([
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()",
    ]);
  });
});
