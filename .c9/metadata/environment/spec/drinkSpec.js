{"filter":false,"title":"drinkSpec.js","tooltip":"/spec/drinkSpec.js","undoManager":{"mark":74,"position":74,"stack":[[{"start":{"row":0,"column":0},"end":{"row":25,"column":3},"action":"insert","lines":["","describe(\"Calculator\", function() {","","    beforeEach(function(){","    calc = new Calculator;","});","    describe(\"Addition function\", function() {","        it(\"should return 42\", function() {","            calc.add(20);","            calc.add(22);","            expect(calc.value).toBe(42);","        });","","        it(\"should return 26\", function() {","            calc.add(7);","            calc.add(19);","            expect(calc.value).toBe(26);","        });","","        it(\"should return an error if we don't supply two numbers\", function() {","            spyOn(window, \"alert\");","            calc.add(\"Hitchhikers\");","            expect(window.alert).toHaveBeenCalledWith(\"Error!\");","        });","    });","});"],"id":1}],[{"start":{"row":1,"column":19},"end":{"row":1,"column":20},"action":"remove","lines":["r"],"id":2},{"start":{"row":1,"column":18},"end":{"row":1,"column":19},"action":"remove","lines":["o"]},{"start":{"row":1,"column":17},"end":{"row":1,"column":18},"action":"remove","lines":["t"]},{"start":{"row":1,"column":16},"end":{"row":1,"column":17},"action":"remove","lines":["a"]},{"start":{"row":1,"column":15},"end":{"row":1,"column":16},"action":"remove","lines":["l"]},{"start":{"row":1,"column":14},"end":{"row":1,"column":15},"action":"remove","lines":["u"]},{"start":{"row":1,"column":13},"end":{"row":1,"column":14},"action":"remove","lines":["c"]},{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"remove","lines":["l"]},{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"remove","lines":["a"]}],[{"start":{"row":1,"column":10},"end":{"row":1,"column":11},"action":"remove","lines":["C"],"id":3}],[{"start":{"row":1,"column":10},"end":{"row":1,"column":11},"action":"insert","lines":["W"],"id":4},{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":["h"]},{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"insert","lines":["a"]},{"start":{"row":1,"column":13},"end":{"row":1,"column":14},"action":"insert","lines":["r"]}],[{"start":{"row":1,"column":13},"end":{"row":1,"column":14},"action":"remove","lines":["r"],"id":5}],[{"start":{"row":1,"column":13},"end":{"row":1,"column":14},"action":"insert","lines":["t"],"id":6}],[{"start":{"row":1,"column":10},"end":{"row":1,"column":14},"action":"remove","lines":["What"],"id":7},{"start":{"row":1,"column":10},"end":{"row":1,"column":23},"action":"insert","lines":["WhatCanIDrink"]}],[{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"remove","lines":["r"],"id":8},{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"remove","lines":["o"]},{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"remove","lines":["t"]},{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"remove","lines":["a"]},{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"remove","lines":["l"]},{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"remove","lines":["u"]},{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"remove","lines":["c"]},{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"remove","lines":["l"]},{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"remove","lines":["a"]},{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"remove","lines":["C"]}],[{"start":{"row":4,"column":15},"end":{"row":5,"column":13},"action":"insert","lines":["  ","whatCanIDrink"],"id":10}],[{"start":{"row":4,"column":17},"end":{"row":5,"column":0},"action":"remove","lines":["",""],"id":11},{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"remove","lines":[" "]},{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"remove","lines":[" "]},{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"remove","lines":[" "]}],[{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":[" "],"id":12}],[{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"remove","lines":["A"],"id":13},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"remove","lines":["d"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"remove","lines":["d"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"remove","lines":["i"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"remove","lines":["t"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"remove","lines":["i"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"remove","lines":["o"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"remove","lines":["n"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"remove","lines":[" "]},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"remove","lines":["f"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"remove","lines":["u"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"remove","lines":["n"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"remove","lines":["c"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"remove","lines":["t"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"remove","lines":["i"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"remove","lines":["o"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"remove","lines":["n"]}],[{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"insert","lines":["C"],"id":14},{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":["h"]},{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":["e"]},{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"insert","lines":["c"]},{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["k"]}],[{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["A"],"id":15},{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":["g"]},{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"insert","lines":["e"]}],[{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":[" "],"id":16}],[{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"remove","lines":[" "],"id":17}],[{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":[" "],"id":18}],[{"start":{"row":7,"column":27},"end":{"row":7,"column":28},"action":"remove","lines":["2"],"id":19},{"start":{"row":7,"column":26},"end":{"row":7,"column":27},"action":"remove","lines":["4"]}],[{"start":{"row":7,"column":26},"end":{"row":7,"column":27},"action":"insert","lines":["0"],"id":20}],[{"start":{"row":8,"column":0},"end":{"row":9,"column":25},"action":"remove","lines":["            calc.add(20);","            calc.add(22);"],"id":21},{"start":{"row":7,"column":42},"end":{"row":8,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":8,"column":28},"end":{"row":8,"column":29},"action":"remove","lines":["e"],"id":22},{"start":{"row":8,"column":27},"end":{"row":8,"column":28},"action":"remove","lines":["u"]},{"start":{"row":8,"column":26},"end":{"row":8,"column":27},"action":"remove","lines":["l"]},{"start":{"row":8,"column":25},"end":{"row":8,"column":26},"action":"remove","lines":["a"]},{"start":{"row":8,"column":24},"end":{"row":8,"column":25},"action":"remove","lines":["v"]},{"start":{"row":8,"column":23},"end":{"row":8,"column":24},"action":"remove","lines":["."]},{"start":{"row":8,"column":22},"end":{"row":8,"column":23},"action":"remove","lines":["c"]},{"start":{"row":8,"column":21},"end":{"row":8,"column":22},"action":"remove","lines":["l"]},{"start":{"row":8,"column":20},"end":{"row":8,"column":21},"action":"remove","lines":["a"]},{"start":{"row":8,"column":19},"end":{"row":8,"column":20},"action":"remove","lines":["c"]}],[{"start":{"row":8,"column":19},"end":{"row":8,"column":20},"action":"insert","lines":["0"],"id":23}],[{"start":{"row":8,"column":27},"end":{"row":8,"column":28},"action":"remove","lines":["4"],"id":24},{"start":{"row":8,"column":27},"end":{"row":8,"column":28},"action":"remove","lines":["2"]}],[{"start":{"row":8,"column":27},"end":{"row":8,"column":29},"action":"insert","lines":["\"\""],"id":25}],[{"start":{"row":8,"column":28},"end":{"row":8,"column":89},"action":"insert","lines":["Sorry. I can’t tell what drink because that age is incorrect!"],"id":26}],[{"start":{"row":10,"column":0},"end":{"row":21,"column":11},"action":"remove","lines":["","        it(\"should return 26\", function() {","            calc.add(7);","            calc.add(19);","            expect(calc.value).toBe(26);","        });","","        it(\"should return an error if we don't supply two numbers\", function() {","            spyOn(window, \"alert\");","            calc.add(\"Hitchhikers\");","            expect(window.alert).toHaveBeenCalledWith(\"Error!\");","        });"],"id":27},{"start":{"row":10,"column":0},"end":{"row":12,"column":11},"action":"insert","lines":["        it(\"should return 0\", function() {","            expect(0).toBe(\"Sorry. I can’t tell what drink because that age is incorrect!\");","        });"]}],[{"start":{"row":12,"column":11},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":28},{"start":{"row":13,"column":0},"end":{"row":13,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":13,"column":8},"end":{"row":15,"column":11},"action":"insert","lines":["        it(\"should return 0\", function() {","            expect(0).toBe(\"Sorry. I can’t tell what drink because that age is incorrect!\");","        });"],"id":29}],[{"start":{"row":15,"column":11},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":30},{"start":{"row":16,"column":0},"end":{"row":16,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":16,"column":8},"end":{"row":18,"column":11},"action":"insert","lines":["        it(\"should return 0\", function() {","            expect(0).toBe(\"Sorry. I can’t tell what drink because that age is incorrect!\");","        });"],"id":31}],[{"start":{"row":18,"column":11},"end":{"row":19,"column":0},"action":"insert","lines":["",""],"id":32},{"start":{"row":19,"column":0},"end":{"row":19,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":19,"column":8},"end":{"row":21,"column":11},"action":"insert","lines":["        it(\"should return 0\", function() {","            expect(0).toBe(\"Sorry. I can’t tell what drink because that age is incorrect!\");","        });"],"id":33}],[{"start":{"row":21,"column":11},"end":{"row":22,"column":0},"action":"insert","lines":["",""],"id":34},{"start":{"row":22,"column":0},"end":{"row":22,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":22,"column":8},"end":{"row":24,"column":11},"action":"insert","lines":["        it(\"should return 0\", function() {","            expect(0).toBe(\"Sorry. I can’t tell what drink because that age is incorrect!\");","        });"],"id":35}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":36},{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":[" "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"insert","lines":["    "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"insert","lines":["    "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":8},"action":"remove","lines":["        "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":8},"action":"remove","lines":["        "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":8},"action":"remove","lines":["        "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":8},"action":"remove","lines":["        "]},{"start":{"row":25,"column":3},"end":{"row":26,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":9,"column":26},"end":{"row":9,"column":27},"action":"remove","lines":["0"],"id":37}],[{"start":{"row":9,"column":26},"end":{"row":9,"column":27},"action":"insert","lines":["1"],"id":38},{"start":{"row":9,"column":27},"end":{"row":9,"column":28},"action":"insert","lines":["4"]}],[{"start":{"row":12,"column":26},"end":{"row":12,"column":27},"action":"remove","lines":["0"],"id":39}],[{"start":{"row":12,"column":26},"end":{"row":12,"column":27},"action":"insert","lines":["1"],"id":40},{"start":{"row":12,"column":27},"end":{"row":12,"column":28},"action":"insert","lines":["8"]}],[{"start":{"row":15,"column":26},"end":{"row":15,"column":27},"action":"remove","lines":["0"],"id":41}],[{"start":{"row":15,"column":26},"end":{"row":15,"column":27},"action":"insert","lines":["2"],"id":42},{"start":{"row":15,"column":27},"end":{"row":15,"column":28},"action":"insert","lines":["1"]}],[{"start":{"row":18,"column":26},"end":{"row":18,"column":27},"action":"insert","lines":["1"],"id":43},{"start":{"row":18,"column":27},"end":{"row":18,"column":28},"action":"insert","lines":["3"]}],[{"start":{"row":21,"column":8},"end":{"row":21,"column":9},"action":"remove","lines":["i"],"id":44},{"start":{"row":21,"column":8},"end":{"row":21,"column":9},"action":"remove","lines":["t"]}],[{"start":{"row":21,"column":8},"end":{"row":21,"column":9},"action":"insert","lines":["e"],"id":45},{"start":{"row":21,"column":9},"end":{"row":21,"column":10},"action":"insert","lines":["l"]},{"start":{"row":21,"column":10},"end":{"row":21,"column":11},"action":"insert","lines":["s"]},{"start":{"row":21,"column":11},"end":{"row":21,"column":12},"action":"insert","lines":["e"]}],[{"start":{"row":10,"column":19},"end":{"row":10,"column":20},"action":"remove","lines":["0"],"id":46}],[{"start":{"row":10,"column":19},"end":{"row":10,"column":20},"action":"insert","lines":["1"],"id":47},{"start":{"row":10,"column":20},"end":{"row":10,"column":21},"action":"insert","lines":["4"]}],[{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"remove","lines":["0"],"id":48}],[{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"insert","lines":["1"],"id":49},{"start":{"row":13,"column":20},"end":{"row":13,"column":21},"action":"insert","lines":["8"]}],[{"start":{"row":16,"column":19},"end":{"row":16,"column":20},"action":"remove","lines":["0"],"id":50}],[{"start":{"row":16,"column":19},"end":{"row":16,"column":20},"action":"insert","lines":["1"],"id":51}],[{"start":{"row":16,"column":19},"end":{"row":16,"column":20},"action":"remove","lines":["1"],"id":52}],[{"start":{"row":16,"column":19},"end":{"row":16,"column":20},"action":"insert","lines":["2"],"id":53},{"start":{"row":16,"column":20},"end":{"row":16,"column":21},"action":"insert","lines":["1"]}],[{"start":{"row":19,"column":19},"end":{"row":19,"column":20},"action":"remove","lines":["0"],"id":54}],[{"start":{"row":19,"column":19},"end":{"row":19,"column":20},"action":"insert","lines":["1"],"id":55},{"start":{"row":19,"column":20},"end":{"row":19,"column":21},"action":"insert","lines":["3"]},{"start":{"row":19,"column":21},"end":{"row":19,"column":22},"action":"insert","lines":["0"]}],[{"start":{"row":21,"column":7},"end":{"row":23,"column":11},"action":"remove","lines":[" else(\"should return 0\", function() {","            expect(0).toBe(\"Sorry. I can’t tell what drink because that age is incorrect!\");","        });"],"id":56}],[{"start":{"row":21,"column":7},"end":{"row":22,"column":0},"action":"remove","lines":["",""],"id":57}],[{"start":{"row":21,"column":4},"end":{"row":21,"column":11},"action":"remove","lines":["       "],"id":58}],[{"start":{"row":3,"column":32},"end":{"row":3,"column":34},"action":"insert","lines":["()"],"id":59}],[{"start":{"row":0,"column":0},"end":{"row":23,"column":0},"action":"remove","lines":["describe(\"WhatCanIDrink\", function() {","","    beforeEach(function() {","        calc = new whatCanIDrink();","    });","    describe(\"Check Age\", function() {","        it(\"should return 0\", function() {","            expect(0).toBe(\"Sorry. I can’t tell what drink because that age is incorrect!\");","        });","        it(\"should return 14\", function() {","            expect(14).toBe(\"Sorry. I can’t tell what drink because that age is incorrect!\");","        });","        it(\"should return 18\", function() {","            expect(18).toBe(\"Sorry. I can’t tell what drink because that age is incorrect!\");","        });","        it(\"should return 21\", function() {","            expect(21).toBe(\"Sorry. I can’t tell what drink because that age is incorrect!\");","        });","        it(\"should return 130\", function() {","            expect(130).toBe(\"Sorry. I can’t tell what drink because that age is incorrect!\");","        });","    });","});",""],"id":60},{"start":{"row":0,"column":0},"end":{"row":51,"column":3},"action":"insert","lines":["describe(\"My whatCanIDrink function\", function() {","    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.","    beforeEach(function() {","        drink = new whatCanIDrink();","    });","    ","    describe(\"Checks age\", function() {","        // Specs are defined by calling the global Jasmine function it","        it(\"should exist\", function() {","            // Expectations are built with the function expect which takes a value, called the actual.","            // Each matcher implements a boolean comparison between the actual value and the expected value.","            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.","            expect(whatCanIDrink).toBeDefined();","        });","        ","        it(\"should return drink toddy when called as whatCanIDrink(13)\", function() {","            var result = whatCanIDrink(13)","            expect(result).toBe(\"Drink Toddy\");","        });","        ","        ","        it(\"should return drink coke when called as whatCanIDrink(17)\", function() {","            var result = whatCanIDrink(17)","            expect(result).toBe(\"Drink Coke\");","        });","        ","        it(\"should return drink beer when called as whatCanIDrink(18)\", function() {","            var result = whatCanIDrink(18)","            expect(result).toBe(\"Drink Beer\");","        });","        ","        it(\"should return drink beer when called as whatCanIDrink(20)\", function() {","            var result = whatCanIDrink(20)","            expect(result).toBe(\"Drink Beer\");","        }); ","        ","        it(\"should return drink whisky when called as whatCanIDrink(30)\", function() {","            var result = whatCanIDrink(30)","            expect(result).toBe(\"Drink Whisky\");","        });","        ","        it(\"should be unable to return a drink when called as whatCanIDrink(140)\", function() {","            var result = whatCanIDrink(140)","            expect(result).toBe(\"Sorry. I can’t tell what drink because that age is incorrect!\");","        });","        ","        it(\"should contain Drink when called as whatCanIDrink(17)\", function() {","            var result = whatCanIDrink(10).indexOf(\"Drink\");","            expect(result).not.toEqual(-1);","        });","    });","});"]}],[{"start":{"row":9,"column":0},"end":{"row":12,"column":0},"action":"remove","lines":["            // Expectations are built with the function expect which takes a value, called the actual.","            // Each matcher implements a boolean comparison between the actual value and the expected value.","            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.",""],"id":61}],[{"start":{"row":0,"column":0},"end":{"row":48,"column":3},"action":"remove","lines":["describe(\"My whatCanIDrink function\", function() {","    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.","    beforeEach(function() {","        drink = new whatCanIDrink();","    });","    ","    describe(\"Checks age\", function() {","        // Specs are defined by calling the global Jasmine function it","        it(\"should exist\", function() {","            expect(whatCanIDrink).toBeDefined();","        });","        ","        it(\"should return drink toddy when called as whatCanIDrink(13)\", function() {","            var result = whatCanIDrink(13)","            expect(result).toBe(\"Drink Toddy\");","        });","        ","        ","        it(\"should return drink coke when called as whatCanIDrink(17)\", function() {","            var result = whatCanIDrink(17)","            expect(result).toBe(\"Drink Coke\");","        });","        ","        it(\"should return drink beer when called as whatCanIDrink(18)\", function() {","            var result = whatCanIDrink(18)","            expect(result).toBe(\"Drink Beer\");","        });","        ","        it(\"should return drink beer when called as whatCanIDrink(20)\", function() {","            var result = whatCanIDrink(20)","            expect(result).toBe(\"Drink Beer\");","        }); ","        ","        it(\"should return drink whisky when called as whatCanIDrink(30)\", function() {","            var result = whatCanIDrink(30)","            expect(result).toBe(\"Drink Whisky\");","        });","        ","        it(\"should be unable to return a drink when called as whatCanIDrink(140)\", function() {","            var result = whatCanIDrink(140)","            expect(result).toBe(\"Sorry. I can’t tell what drink because that age is incorrect!\");","        });","        ","        it(\"should contain Drink when called as whatCanIDrink(17)\", function() {","            var result = whatCanIDrink(10).indexOf(\"Drink\");","            expect(result).not.toEqual(-1);","        });","    });","});"],"id":62},{"start":{"row":0,"column":0},"end":{"row":51,"column":3},"action":"insert","lines":["describe(\"My whatCanIDrink function\", function() {","    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.","    beforeEach(function() {","        drink = new whatCanIDrink();","    });","    ","    describe(\"Checks age\", function() {","        // Specs are defined by calling the global Jasmine function it","        it(\"should exist\", function() {","            // Expectations are built with the function expect which takes a value, called the actual.","            // Each matcher implements a boolean comparison between the actual value and the expected value.","            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.","            expect(whatCanIDrink).toBeDefined();","        });","        ","        it(\"should return drink toddy when called as whatCanIDrink(13)\", function() {","            var result = whatCanIDrink(13)","            expect(result).toBe(\"Drink Toddy\");","        });","        ","        ","        it(\"should return drink coke when called as whatCanIDrink(17)\", function() {","            var result = whatCanIDrink(17)","            expect(result).toBe(\"Drink Coke\");","        });","        ","        it(\"should return drink beer when called as whatCanIDrink(18)\", function() {","            var result = whatCanIDrink(18)","            expect(result).toBe(\"Drink Beer\");","        });","        ","        it(\"should return drink beer when called as whatCanIDrink(20)\", function() {","            var result = whatCanIDrink(20)","            expect(result).toBe(\"Drink Beer\");","        }); ","        ","        it(\"should return drink whisky when called as whatCanIDrink(30)\", function() {","            var result = whatCanIDrink(30)","            expect(result).toBe(\"Drink Whisky\");","        });","        ","        it(\"should be unable to return a drink when called as whatCanIDrink(140)\", function() {","            var result = whatCanIDrink(140)","            expect(result).toBe(\"Sorry. I can’t tell what drink because that age is incorrect!\");","        });","        ","        it(\"should contain Drink when called as whatCanIDrink(17)\", function() {","            var result = whatCanIDrink(10).indexOf(\"Drink\");","            expect(result).not.toEqual(-1);","        });","    });","});"]}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"remove","lines":["k"],"id":63}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["k"],"id":64}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"remove","lines":["k"],"id":65},{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"remove","lines":["n"]},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"remove","lines":["i"]},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"remove","lines":["r"]},{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"remove","lines":["d"]}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["r"],"id":66},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["e"]},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["s"]},{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["u"]},{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["l"]},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["t"]}],[{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"remove","lines":["t"],"id":67},{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"remove","lines":["l"]},{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"remove","lines":["u"]},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"remove","lines":["s"]},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"remove","lines":["e"]},{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"remove","lines":["r"]}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["d"],"id":68},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["t"]}],[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"remove","lines":["t"],"id":69}],[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["r"],"id":70},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["i"]},{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["n"]},{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["k"]}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"remove","lines":["k"],"id":71},{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"remove","lines":["n"]},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"remove","lines":["i"]},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"remove","lines":["r"]},{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"remove","lines":["d"]}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":9},"action":"insert","lines":["a"],"id":72},{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["g"]},{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"remove","lines":["r"],"id":73}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["e"],"id":74}],[{"start":{"row":0,"column":0},"end":{"row":51,"column":3},"action":"remove","lines":["describe(\"My whatCanIDrink function\", function() {","    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.","    beforeEach(function() {","        age = new whatCanIDrink();","    });","    ","    describe(\"Checks age\", function() {","        // Specs are defined by calling the global Jasmine function it","        it(\"should exist\", function() {","            // Expectations are built with the function expect which takes a value, called the actual.","            // Each matcher implements a boolean comparison between the actual value and the expected value.","            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.","            expect(whatCanIDrink).toBeDefined();","        });","        ","        it(\"should return drink toddy when called as whatCanIDrink(13)\", function() {","            var result = whatCanIDrink(13)","            expect(result).toBe(\"Drink Toddy\");","        });","        ","        ","        it(\"should return drink coke when called as whatCanIDrink(17)\", function() {","            var result = whatCanIDrink(17)","            expect(result).toBe(\"Drink Coke\");","        });","        ","        it(\"should return drink beer when called as whatCanIDrink(18)\", function() {","            var result = whatCanIDrink(18)","            expect(result).toBe(\"Drink Beer\");","        });","        ","        it(\"should return drink beer when called as whatCanIDrink(20)\", function() {","            var result = whatCanIDrink(20)","            expect(result).toBe(\"Drink Beer\");","        }); ","        ","        it(\"should return drink whisky when called as whatCanIDrink(30)\", function() {","            var result = whatCanIDrink(30)","            expect(result).toBe(\"Drink Whisky\");","        });","        ","        it(\"should be unable to return a drink when called as whatCanIDrink(140)\", function() {","            var result = whatCanIDrink(140)","            expect(result).toBe(\"Sorry. I can’t tell what drink because that age is incorrect!\");","        });","        ","        it(\"should contain Drink when called as whatCanIDrink(17)\", function() {","            var result = whatCanIDrink(10).indexOf(\"Drink\");","            expect(result).not.toEqual(-1);","        });","    });","});"],"id":75}],[{"start":{"row":0,"column":0},"end":{"row":51,"column":3},"action":"insert","lines":["describe(\"My whatCanIDrink function\", function() {","    // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.","    beforeEach(function() {","        drink = new whatCanIDrink();","    });","    ","    describe(\"Checks age\", function() {","        // Specs are defined by calling the global Jasmine function it","        it(\"should exist\", function() {","            // Expectations are built with the function expect which takes a value, called the actual.","            // Each matcher implements a boolean comparison between the actual value and the expected value.","            // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.","            expect(whatCanIDrink).toBeDefined();","        });","        ","        it(\"should return drink toddy when called as whatCanIDrink(13)\", function() {","            var result = whatCanIDrink(13)","            expect(result).toBe(\"Drink Toddy\");","        });","        ","        ","        it(\"should return drink coke when called as whatCanIDrink(17)\", function() {","            var result = whatCanIDrink(17)","            expect(result).toBe(\"Drink Coke\");","        });","        ","        it(\"should return drink beer when called as whatCanIDrink(18)\", function() {","            var result = whatCanIDrink(18)","            expect(result).toBe(\"Drink Beer\");","        });","        ","        it(\"should return drink beer when called as whatCanIDrink(20)\", function() {","            var result = whatCanIDrink(20)","            expect(result).toBe(\"Drink Beer\");","        }); ","        ","        it(\"should return drink whisky when called as whatCanIDrink(30)\", function() {","            var result = whatCanIDrink(30)","            expect(result).toBe(\"Drink Whisky\");","        });","        ","        it(\"should be unable to return a drink when called as whatCanIDrink(140)\", function() {","            var result = whatCanIDrink(140)","            expect(result).toBe(\"Sorry. I can’t tell what drink because that age is incorrect!\");","        });","        ","        it(\"should contain Drink when called as whatCanIDrink(17)\", function() {","            var result = whatCanIDrink(10).indexOf(\"Drink\");","            expect(result).not.toEqual(-1);","        });","    });","});"],"id":76}]]},"ace":{"folds":[],"scrolltop":139,"scrollleft":0,"selection":{"start":{"row":51,"column":3},"end":{"row":51,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1575845114583,"hash":"775c073eee79558912944d938db5105c8c7f85d8"}