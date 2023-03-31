import { capitalize } from "./capitalize.js";

test("Not capitalized", () => {
  expect(capitalize("hello there")).toBe("Hello there");
});

test("All capitalized", () => {
  expect(capitalize("yO WTF HURRY UP")).toBe("YO WTF HURRY UP");
});

