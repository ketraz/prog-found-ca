// Question 1

for (var x = 15; x <= 25; x++) {
    if (x % 2 == 0) {
        console.log(x);
    }
}

// Question 2

function iAm() {
    console.log("i am a function");
}
var innerFunction = iAm();

function outerFunction() {
    console.log();
}
outerFunction(innerFunction);