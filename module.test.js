// module.test.js
import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
    const expected = 5;
    const got = mut.div(10, 2);
    expect(got).toBe(expected);
});

test('Testing div -- success', () => {
    const expected = 0.5;
    const got = mut.div(1, 2);
    expect(got).toBe(expected);
});

test('containsNumbers - string only letters', () => {
    expect(mut.containsNumbers("hello")).toBe(false);
});

test('containsNumbers - string letters and spaces', () => {
    expect(mut.containsNumbers("hello world")).toBe(false);
});

test('containsNumbers - string special characters', () => {
    expect(mut.containsNumbers("!@#$%")).toBe(false);
});

test('containsNumbers - empty string', () => {
    expect(mut.containsNumbers("")).toBe(false);
});

test('containsNumbers - string with one number', () => {
    expect(mut.containsNumbers("hello123")).toBe(true);
});

test('containsNumbers - string with spaces only', () => {
    expect(mut.containsNumbers("     ")).toBe(true);
});