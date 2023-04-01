import { calculator } from "./calculator.js";

test("Add 2 nums", () => {
  expect(calculator().add(2, 4)).toBe(6);
});

test("Add 2 big nums", () => {
  expect(calculator().add(10010, 203902)).toBe(213912);
});

test("Add negative nums", () => {
  expect(calculator().add(-2345, -9999)).toBe(-12344);
});

test("Subtract 2 nums", () => {
  expect(calculator().subtract(999, 998)).toBe(1);
});

test("Subtract 2 big nums", () => {
  expect(calculator().subtract(1000000, 567493)).toBe(432507);
});

test("Subtract 2 negative numbers", () => {
  expect(calculator().subtract(-20002, -5002)).toBe(-15000);
});

test("Divide 2 nums", () => {
  expect(calculator().divide(10, 2)).toBe(5);
});

test("Divide 2 big nums", () => {
  expect(calculator().divide(212526620, 45685)).toBe(4652);
});

test("Divide negative nums", () => {
  expect(calculator().divide(-200, -400)).toBe(0.5);
});

test("Multiply 2 nums", () => {
  expect(calculator().multiply(5, 100)).toBe(500);
});

test("Multiply 2 big nums", () => {
  expect(calculator().multiply(456, 112233)).toBe(51178248);
});

test("Multiply negative num", () => {
  expect(calculator().multiply(444, -1032)).toBe(-458208);
});
