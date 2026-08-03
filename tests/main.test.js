const { checkNumber,sayHello,getNames } = require("../src/main");
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

describe("getNames function", () => {
  test("returns an array of names", () => {
    const result = getNames();
    expect(result).toEqual(expect.arrayContaining(["Alice", "Bob", "Charlie"]));
    expect(result).toHaveLength(3);
    expect(result).toBeDefined();
    expect(result).not.toBeNull();
  });
})