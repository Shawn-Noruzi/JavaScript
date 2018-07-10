describe("Calculator", function () {
    let calculator;

    before(function () {
        calculator = new Calculator;
    });

    it("sum of 3 + 7 is : 10", function () {
        assert.equal(calculator.calculate("3 + 7"),10); // 21
    });

    it("calculate(12 + 34) = 46", function () {
        assert.equal(calculator.calculate("12 + 34"), 46);
    });

    it("calculate 3*7 = 21", function () {
        calculator.addMethod("*", (a, b) => a * b);
        assert.equal(calculator.calculate("3 * 7"), 21);
    });

  });
