import validateEmail from "./validateEmail";

test("check validate email", () => {
  expect(validateEmail("john@cl.com")).toBe(true);
  expect(validateEmail("john@cl")).toBe(false);
  expect(validateEmail("qepfwq")).toBe(false);
});
