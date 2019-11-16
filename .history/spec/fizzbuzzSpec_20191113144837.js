describe("My undrednumbers function", function () {
    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.

    beforeEach(function () {
        undrednumbers = new undrednumbers();
    });

    describe("Returns number, Three, Five or ThreeFive", function () {
        it("should exist", function () {
            expect(undrednumbers).toBeDefined();
        });

        it("should return Three when called as undrednumbers(9)", function () {
            var result = undrednumbers(9)
            expect(result).toBe('Three');
        });

        it("should return Five when called as undrednumbers(10)", function () {
            var result = undrednumbers(10)
            expect(result).toBe("Five");
        });

        it("should return FizzBuzz when called as undrednumbers(15)", function () {
            var result = undrednumbers(15)
            expect(result).toBe("ThreeFive");
        });
        it("should return 2 when called as undrednumbers(2)", function () {
            var result = undrednumbers(2)
            expect(result).toBe(2);
        });
    });
});