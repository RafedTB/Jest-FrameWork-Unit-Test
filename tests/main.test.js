const { checkNumber } = require("../src/main");
const { sayHello } = require("../src/main");

describe("checkNumber function", () => {
  
  test("returns the number if it is positive", () => {
    const result = checkNumber(5);
    expect(result).toBe(5);
  });

  test("returns 0 if the number is negative", () => {
    const result = checkNumber(-3);
    expect(result).toBe(0);
  });

  test("returns 0 if the number is zero", () => {
    const result = checkNumber(0);
    expect(result).toBe(0);
  });

});


describe("sayHello function", () => {
  test("returns a greeting message with the provided name", () => {
    const result = sayHello("Alice");
    //Assertion
    expect(result).toContain("Alice");
  });
});
